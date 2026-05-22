var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/total-respostas", function (req, res) {
    dashboardController.buscarTotalRespostas(req, res);
});

router.get("/ranking-usuarios", function (req, res) {
    dashboardController.buscarRankingUsuarios(req, res);
});

router.get("/taxa-acerto", function (req, res) {
    dashboardController.buscarTaxaAcertoPorPergunta(req, res);
});

router.get("/acertos-por-artista", function (req, res) {
    dashboardController.buscarAcertosPorArtista(req, res);
});

module.exports = router;