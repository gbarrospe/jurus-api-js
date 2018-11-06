var express = require('express');
var router = express.Router();

//controllers
const bondController = require("../controllers/bondController");

//verbos
router.get('/', (req, res, next) => {
    res.send("Servico running no banco " );
});

router.get('/v1/bonds', bondController.list);

module.exports = router;

