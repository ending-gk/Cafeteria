const express = require('express');
const router = express.Router();
const guardarcadastro= require('../controller/guardar_cadastro');

router.post('/cadastro',guardarcadastro);

module.exports=router;