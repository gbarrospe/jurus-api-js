'use strict';

class BondDAO{

   constructor(){
       this.Mongodb = require("../db/db");
       this.DocumentName = "bonds" 
   }

   list(){  

        return new Promise((resolve, reject) => {

            this.Mongodb.onConnect( (db) => {
                db.collection(this.DocumentName).find({}).toArray(function(err, documents) {
                    if (err) reject(err);
                    console.log("Retornando lista de bonds");
                    resolve(documents);
                });
        });

        });       
    }

}

module.exports = BondDAO;