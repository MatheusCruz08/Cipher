CREATE DATABASE projetoInd;

USE projetoInd;

CREATE TABLE  usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(80),
senha VARCHAR(30),
dtNasc DATE 
);

CREATE TABLE pergunta (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(100)
);

CREATE TABLE resposta (
idResposta INT,
fkUsuario INT,
fkPergunta INT,
CONSTRAINT usuarioFk FOREIGN KEY (fkUsuario)
	REFERENCES usuario(idUsuario),
CONSTRAINT perguntaFk FOREIGN KEY (fkPergunta)
	REFERENCES pergunta(idPergunta)
);
