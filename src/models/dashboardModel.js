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
function buscarRankingUsuarios() {
    var instrucaoSql = `
        SELECT 
            u.nome AS usuario,
            SUM(IF(r.acertou = 1, 1, 0)) AS total_acertos,
            COUNT(r.idResposta) AS total_respondidas
        FROM usuario u
        JOIN resposta r ON r.fkUsuario = u.idUsuario
        GROUP BY u.idUsuario, u.nome
        ORDER BY total_acertos DESC;
    `;
    return database.executar(instrucaoSql);
}

function buscarTaxaAcertoPorPergunta() {
    var instrucaoSql = `
        SELECT 
            p.descricao AS pergunta,
            COUNT(r.idResposta) AS total_votos,
            ROUND(SUM(IF(r.acertou = 1, 1, 0)) / COUNT(r.idResposta) * 100, 1) AS taxa_acerto
        FROM pergunta p
        LEFT JOIN resposta r ON r.fkPergunta = p.idPergunta
        GROUP BY p.idPergunta, p.descricao
        ORDER BY p.idPergunta ASC;
    `;
    return database.executar(instrucaoSql);
}

function buscarAcertosPorArtista() {
    var instrucaoSql = `
        SELECT 
            p.artista,
            SUM(IF(r.acertou = 1, 1, 0)) AS total_acertos,
            SUM(IF(r.acertou = 0, 1, 0)) AS total_erros
        FROM pergunta p
        LEFT JOIN resposta r ON r.fkPergunta = p.idPergunta
        GROUP BY p.artista
        ORDER BY total_acertos DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalRespostas,
    buscarRankingUsuarios,
    buscarTaxaAcertoPorPergunta,
    buscarAcertosPorArtista
};
