var quizModel = require("../models/quizModel");

function salvarRespostas(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var perguntas = req.body.perguntasServer;

    if (idUsuario == undefined) {
        res.status(400).send("ID do usuário está indefinido!");
    } else if (perguntas == undefined || perguntas.length == 0) {
        res.status(400).send("Lista de perguntas respondidas está vazia!");
    } else {
        // Envia para o modelo tratar a inserção
        quizModel.salvarRespostas(idUsuario, perguntas)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    salvarRespostas
};