var dashboardModel = require("../models/dashboardModel");

function buscarTotalRespostas(req, res) {
    console.log(`Recuperando os dados de respostas do quiz para o gráfico`);

    dashboardModel.buscarTotalRespostas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as medidas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarRankingUsuarios(req, res) {
    dashboardModel.buscarRankingUsuarios()
        .then(function (resultado) {
            resultado.length > 0
                ? res.status(200).json(resultado)
                : res.status(204).send("Nenhum resultado!");
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarTaxaAcertoPorPergunta(req, res) {
    dashboardModel.buscarTaxaAcertoPorPergunta()
        .then(function (resultado) {
            resultado.length > 0
                ? res.status(200).json(resultado)
                : res.status(204).send("Nenhum resultado!");
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarAcertosPorArtista(req, res) {
    dashboardModel.buscarAcertosPorArtista()
        .then(function (resultado) {
            resultado.length > 0
                ? res.status(200).json(resultado)
                : res.status(204).send("Nenhum resultado!");
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarTotalRespostas,
    buscarRankingUsuarios,
    buscarTaxaAcertoPorPergunta,
    buscarAcertosPorArtista
};