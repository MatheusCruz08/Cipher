var express = require("express");
var router = express.Router();

var medidasController = require("../controllers/medidasController");

// Rota que o front-end vai chamar
router.get("/total-respostas", function (req, res) {
    medidasController.buscarTotalRespostas(req, res);
});

module.exports = router;