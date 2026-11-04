const express = require('express');
const cors= require('cors');
const app = express();
app.use(cors())

const cadastroroutes = require('./routes/guardar_cadastro.js')

app.use(express.json());

app.use(cadastroroutes);

app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000!');
});

app.get('/', (req, res) => {
    res.send('Backend da cafeteria funcionando!');
});

