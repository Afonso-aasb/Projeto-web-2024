-- Criação da tabela Cliente
CREATE TABLE Cliente (
    codigo INT AUTO_INCREMENT PRIMARY KEY, -- Chave primária com auto incremento
    nome VARCHAR(100) NOT NULL, -- Nome obrigatório
    email VARCHAR(100) NOT NULL UNIQUE, -- Email único e obrigatório
    senha VARCHAR(100) NOT NULL, -- Senha obrigatória
    telefone VARCHAR(20), -- Telefone opcional
    documento VARCHAR(20) UNIQUE, -- Documento único
    logradouro VARCHAR(255), -- Logradouro
    complemento VARCHAR(255), -- Complemento
    cep VARCHAR(10), -- CEP
    cidade VARCHAR(100), -- Cidade
    uf VARCHAR(2) -- Unidade Federativa (UF)
);

-- Criação da tabela Produto
CREATE TABLE Produto (
    codigo INT AUTO_INCREMENT PRIMARY KEY, -- Chave primária com auto incremento
    nome VARCHAR(100) NOT NULL, -- Nome obrigatório
    descritivo VARCHAR(255), -- Descritivo
    valor DECIMAL(10, 2) NOT NULL, -- Valor obrigatório com precisão decimal
    quantidade INT NOT NULL, -- Quantidade obrigatória
    keywords VARCHAR(255), -- Palavras-chave
    imagem VARCHAR(255) -- URL da imagem
);
