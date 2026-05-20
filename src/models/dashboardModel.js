var database = require("../database/config");

function buscarTotalRespostas() {
    // Seleciona a descrição abreviada da pergunta e conta quantas respostas ela recebeu
    var instrucaoSql = `
        SELECT 
            p.descricao AS pergunta,
            COUNT(r.idResposta) AS total_votos
        FROM pergunta p
        LEFT JOIN resposta r ON r.fkPergunta = p.idPergunta
        GROUP BY p.idPergunta, p.descricao
        ORDER BY p.idPergunta ASC;
    `;
    
    console.log("Executando a instrução SQL para a dashboard: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalRespostas
};