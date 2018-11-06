let BondDAO = require('../dao/bondDAO');

function list(req, res) {

    let filter = {};
    
    let dao = new BondDAO();
    dao.list(filter).then( (bonds) => {

        //Upload documento no FileServer S3
        console.log(bonds.data);
        res.json({bonds:bonds});

    }).catch( (err) => {

        //Retorna erro 500
        res.status(500).send(err);
    } );

}

exports.list = list;

