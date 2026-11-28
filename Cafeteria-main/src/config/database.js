const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(
    path.join(__dirname, '..', 'cafeteria_banco.db'),
    (erro) => {
        if (erro) {
            console.error('Erro ao conectar:', erro.message);
        } else {
            console.log('Banco SQLite conectado!');
        }
    }
);

module.exports = db;