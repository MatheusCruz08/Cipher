var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/total-respostas", function (req, res) {
    dashboardController.buscarTotalRespostas(req, res);
});

module.exports = router;