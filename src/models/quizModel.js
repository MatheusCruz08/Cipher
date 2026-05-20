var database = require("../database/config");

function salvarRespostas(idUsuario, perguntas) {
    // Montando múltiplos inserts dinâmicos em uma única transação/instrução sql
    var instrucaoSql = "INSERT INTO resposta (fkUsuario, fkPergunta) VALUES ";
    
    for (var i = 0; i < perguntas.length; i++) {
        instrucaoSql += `(${idUsuario}, ${perguntas[i].fkPergunta})`;
        
        // Se não for o último elemento da lista, adiciona uma vírgula para continuar o INSERT
        if (i < perguntas.length - 1) {
            instrucaoSql += ", ";
        }
    }
    instrucaoSql += ";";

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarRespostas
};