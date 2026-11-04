const mysql = require('mysql2/promise');
async function conectar(){
    const conexao = await mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database:'sistema_cadastro'
})
return conexao;
}

module.exports=conectar;