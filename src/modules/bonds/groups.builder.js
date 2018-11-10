'use strict';

let Group = require('./groups')
let accentFold  = require('../../util/accent-fold');

class  GroupBuilder{

   groupOfAssets(bonds){  

        return new Promise((resolve, reject) => {
            let groups = this.buildGroupsofAssets(bonds);

            if(!groups){
                reject("Nao foi possivel agrupar os ativos")
            }
            resolve(groups);
        });

    }

    buildGroupsOfAssetsByDealer(dealerId,bonds){  

        return new Promise((resolve, reject) => {
            let groups = this._buildGroupsOfAssetsByDealer(dealerId,bonds);

            if(!groups){
                reject("Nao foi possivel agrupar os ativos")
            }
            resolve(groups);
        });

    }

    buildGroupsOfAssets(bonds){
        let groups = {};

        bonds.forEach(bond => {
        
            let newGroup = new Group(bond.tipo,bond.emissor,bond.vencimentoDiasCorridos,bond.indexador);

            if(! (newGroup.getHash() in groups)){
                groups[newGroup.getHash() ] = [];
            }

            groups[newGroup.getHash()].push(bond);

            
        });

        return groups;
    }

    _buildGroupsOfAssetsByDealer(dealerId, bonds){
        let raw = this.buildGroupsOfAssets(bonds);

        const filtered = Object.keys(raw)
        .filter(k => {

            let g = raw[k];
            let found = false;
            
            g.forEach(bond => {

                let corretora = bond.corretora;
                let did = dealerId;
                
                if(this._isEqual(corretora,did)){
                    found = true
                }

            });

            return found;

        })
        .reduce((obj, k) => {
            obj[k] = raw[k];
            return obj;
        }, {});

        return filtered;
    }

    _isEqual(s1,s2){

        let s1Folded = accentFold.accent_fold(s1.toLowerCase().replace(" ",""));
        let s2Folded = accentFold.accent_fold(s2.toLowerCase().replace(" ",""));

        return (s1Folded===s2Folded);

    }

}

module.exports = GroupBuilder;