const db = require('../config/database');
const bcrypt = require('bcrypt');

const guardarcadastro = async (req, res) => {
    try {
        const dadoscadastro = req.body;
        const senhaHash = await bcrypt.hash(dadoscadastro.senha, 10);

        const sql = 'INSERT INTO clientes (nome, email, telefone, senha) VALUES (?, ?, ?, ?)';

        const valores = [
            dadoscadastro.nome,
            dadoscadastro.email,
            dadoscadastro.telefone,
            senhaHash
        ];

        db.run(sql, valores, function (erro) {
            if (erro) {
                console.error(erro.message);

                return res.status(500).json({
                    mensagem: 'Erro ao cadastrar cliente.'
                });
            }

            res.status(200).json({
                mensagem: 'Cadastro realizado com sucesso!',
                id: this.lastID
            });
        });

    } catch (erro) {
        console.error(erro.message);

        res.status(500).json({
            mensagem: 'Erro ao cadastrar cliente.'
        });
    }
};

module.exports = guardarcadastro;