CREATE DATABASE IF NOT EXISTS projetoInd;

USE projetoInd;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60),
    email VARCHAR(80),
    senha VARCHAR(30)
);

CREATE TABLE pergunta (
    idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100)
);

CREATE TABLE resposta (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkPergunta INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta)
);

-- Inserir as 12 perguntas
INSERT INTO pergunta (descricao) VALUES
('Em que ano Kendrick Lamar lançou seu álbum good kid, m.A.A.d city?'),
('Qual foi o primeiro álbum de estúdio de Kanye West?'),
('Mac Miller é natural de qual cidade americana?'),
('Qual é o nome real de SZA?'),
('Em que ano Travis Scott lançou o álbum Astroworld?'),
('Quantos Grammy Awards Kendrick Lamar ganhou até 2022?'),
('Qual é o nome da empresa de moda de Kanye West?'),
('Qual mixtape inicial de Mac Miller continha a música K.I.D.S?'),
('Qual é o álbum de estreia de SZA lançado em 2017?'),
('Com qual produtor Travis Scott trabalhou frequentemente em seus primeiros projetos?'),
('Qual álbum de Tyler, the Creator venceu o prêmio de Melhor Álbum de Rap no Grammy de 2020?'),
('Tyler, the Creator foi o líder e cofundador de qual famoso coletivo de hip-hop alternativo?');

select * from resposta;

ALTER TABLE resposta ADD COLUMN acertou BOOLEAN DEFAULT FALSE;

ALTER TABLE pergunta ADD COLUMN artista VARCHAR(60);

UPDATE pergunta SET artista = 'Kendrick Lamar' WHERE idPergunta IN (1, 6);
UPDATE pergunta SET artista = 'Kanye West'     WHERE idPergunta IN (2, 7);
UPDATE pergunta SET artista = 'Mac Miller'     WHERE idPergunta IN (3, 8);
UPDATE pergunta SET artista = 'SZA'            WHERE idPergunta IN (4, 9);
UPDATE pergunta SET artista = 'Travis Scott'   WHERE idPergunta IN (5, 10);
UPDATE pergunta SET artista = 'Tyler, the Creator' WHERE idPergunta IN (11, 12);