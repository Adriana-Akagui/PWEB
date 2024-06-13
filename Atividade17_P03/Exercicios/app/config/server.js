var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
 
var app = express();
 
app.set('view engine', 'ejs');
app.set('views', './app/views');
 
// para formato JSON
//app.use(bodyParser.json()); // Para JSON
// para ele entender o formato da URL
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
 
// especificado qual arquivo ele deve executar porque dentro do config tem o server
// ele iria ficar executando o server toda hora
// precisa da extensão,  senao ele pensa que é um subdiretorio
 
consign({ cwd: 'app' }) // para incluir a pasta app
    .include('routes')
    .then('config/dbConnection.js')
    .then('models')
    .into(app);
 
module.exports = app;