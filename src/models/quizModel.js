var database = require("../database/config");

function salvarRespostas(idUsuario, perguntas) {
    var instrucaoSql = "INSERT INTO resposta (fkUsuario, fkPergunta, acertou) VALUES ";

    for (var i = 0; i < perguntas.length; i++) {
        instrucaoSql += "(" + idUsuario + ", " + perguntas[i].id + ", " + (perguntas[i].acertou ? 1 : 0) + ")";
        if (i < perguntas.length - 1) instrucaoSql += ", ";
    }

    instrucaoSql += ";";
    console.log("SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { salvarRespostas };