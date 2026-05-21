var database = require("../database/config");

function buscarTotalRespostas() {
    var instrucaoSql = `
    SELECT 
        p.descricao AS pergunta,
        COUNT(r.idResposta) AS total_votos,
        SUM(IF(r.acertou = 1, 1, 0)) AS total_acertos
    FROM pergunta p
    LEFT JOIN resposta r ON r.fkPergunta = p.idPergunta
    GROUP BY p.idPergunta, p.descricao
    ORDER BY p.idPergunta ASC;
`;
    return database.executar(instrucaoSql);
}

module.exports = { buscarTotalRespostas };