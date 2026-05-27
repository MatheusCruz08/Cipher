var quizModel = require("../models/quizModel");

function salvarRespostas(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var perguntas = req.body.perguntasServer;

    if (idUsuario == undefined || idUsuario == "undefined") {
        res.status(400).send("ID do usuário não foi enviado!");
        return;
    }

    if (perguntas == undefined || perguntas.length == 0) {
        res.status(400).send("Nenhuma pergunta foi respondida!");
        return;
    }

    var totalAcertos = perguntas.filter(function(p) { return p.acertou; }).length;
    var totalRespostas = perguntas.length;

    quizModel.salvarRespostas(idUsuario, perguntas)
        .then(function() {
            return quizModel.atualizarResultado(idUsuario, totalAcertos, totalRespostas);
        })
        .then(function() {
            res.status(200).json({ mensagem: "Respostas salvas com sucesso!" });
        })
        .catch(function(erro) {
            console.log("Erro: " + erro);
            res.status(500).json({
                mensagem: "Erro ao salvar no banco de dados",
                erro: erro.sqlMessage
            });
        });
}

module.exports = {
    salvarRespostas
};

