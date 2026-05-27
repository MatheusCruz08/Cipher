CREATE DATABASE IF NOT EXISTS projetoInd;

USE projetoInd;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60),
    email VARCHAR(80),
    senha VARCHAR(30),
    dtNasc DATE
);

CREATE TABLE pergunta (
    idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100),
    artista VARCHAR(60)
);

CREATE TABLE resposta (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    acertou BOOLEAN DEFAULT FALSE,
    fkUsuario INT,
    fkPergunta INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta)
);

CREATE TABLE resultadoQuiz (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario   INT UNIQUE,
    totalAcertos INT DEFAULT 0,
    totalRespostas INT DEFAULT 0,
    dtUltimoQuiz DATETIME,
    CONSTRAINT fkResultadoUsuario FOREIGN KEY (fkUsuario)
        REFERENCES usuario(idUsuario)
);

INSERT INTO pergunta (descricao) VALUES
('Em que ano Kendrick Lamar lançou seu álbum good kid, m.A.A.d city?','Kendrick Lamar'),
('Qual foi o primeiro álbum de estúdio de Kanye West?','Kanye West'),
('Mac Miller é natural de qual cidade americana?','Mac Miller'),
('Qual é o nome real de SZA?','SZA'),
('Em que ano Travis Scott lançou o álbum Astroworld?','Travis Scott'),
('Quantos Grammy Awards Kendrick Lamar ganhou até 2022?','Kendrick Lamar'),
('Qual é o nome da empresa de moda de Kanye West?','Kanye West'),
('Qual mixtape inicial de Mac Miller continha a música K.I.D.S?','Mac Miller'),
('Qual é o álbum de estreia de SZA lançado em 2017?','SZA'),
('Com qual produtor Travis Scott trabalhou frequentemente em seus primeiros projetos?','Travis Scott'),
('Qual álbum de Tyler, the Creator venceu o prêmio de Melhor Álbum de Rap no Grammy de 2020?','Tyler, the Creator'),
('Tyler, the Creator foi o líder e cofundador de qual famoso coletivo de hip-hop alternativo?','Tyler, the Creator');

select * from resposta;

