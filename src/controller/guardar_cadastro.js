const conectar = require('../config/database');
const bcrypt = require('bcrypt')
const guardarcadastro = async (req, res) => {
    try {
        const dadoscadastro = req.body;
        const senhaHash = await bcrypt.hash(dadoscadastro.senha,10);
        const conexao = await conectar();
        const sql = 'INSERT INTO clientes (nome, email, telefone, senha) VALUES (?, ?, ?, ?)';
        const valores = [
            dadoscadastro.nome,
            dadoscadastro.email,
            dadoscadastro.telefone,
            senhaHash
        ];
        await conexao.execute(sql,valores);

        await conexao.end();
        

        res.status(200).json({
            mensagem: 'Conexão com MySQL realizada!'
        });

    } catch (erro) {
        console.error(erro.message);

        res.status(500).json({
            mensagem: 'Erro ao conectar ao banco de dados.'
        });
    }
};
module.exports = guardarcadastro;