var express = require('express');
var router = express.Router();

//controllers
const bondController = require("../modules/bonds/bonds.controller");

//verbos
router.get('/', (req, res, next) => {
    res.send("Servico running no banco " );
});


router.get('/v1/bonds', bondController.list);

router.get('/v1/bonds/corretora/:id', bondController.compareDealer);


module.exports = router;

