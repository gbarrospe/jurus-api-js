let BondDAO = require('../dao/bondDAO');
let GerencialGroup = require('../gerencial/gerencialBuilder');

function list(req, res) {

    let filter = {};
    
    let dao = new BondDAO();
    dao.list(filter).then( (bonds) => {

        res.json({bonds:bonds});
        

    }).catch( (err) => {

        //Retorna erro 500
        res.status(500).send(err);
    } );

}

function compareDealer(req, res) {

    let filter = {};
    let id = req.params.id;

    let dao = new BondDAO();
    dao.list(filter).then( (bonds) => {

        let gerencial = new GerencialGroup();
        gerencial.buildGroupsOfAssetsByDealer(id, bonds).then(groups=> {
            res.json({bonds:groups});
        }).catch(msg => {
            res.json({"erro":500});
        });
        

    }).catch( (err) => {

        //Retorna erro 500
        res.status(500).send(err);
    } );

}

exports.list = list;
exports.compareDealer = compareDealer;

