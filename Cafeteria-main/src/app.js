const express = require('express');
const db = require('./config/database');
const cors= require('cors');
const app = express();
app.use(cors())

const cadastroroutes = require('./routes/guardar_cadastro.js')

app.use(express.json());

app.use(cadastroroutes);

app.get('/produtos', (req, res) => {
    db.all('SELECT * FROM produtos', (erro, resultados) => {
        if (erro) {
            return res.status(500).send('Erro ao buscar produtos');
        }

        res.json(resultados);
    });
});

app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000!');
});

app.get('/', (req, res) => {
    res.send('Backend da cafeteria funcionando!');
});

