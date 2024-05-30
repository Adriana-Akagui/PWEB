var express = require('express');
var app=express(); //executando o express

app.set('view engine', 'ejs');


    app.get('/', function(req,res){
        //res.send("<html><body>Site da Fatec Sorocaba</body></html>");
        res.render("home/index");
    });

    app.get('/formulario_adicionar_usuario', function(req,res) {
        res.render("admin/adicionar_usuario");
    })

    app.get('/informacao/historia', function(req,res) {
        //res.end("<html><body>Cursos</body></html>");
        res.render("informacao/historia");
    });

    app.get('/cursos', function(req,res) {
        //res.end("<html><body>Cursos</body></html>");
        res.render("informacao/cursos");
    });
    app.get('/professores', function(req,res){
        //res.end("<html><body>Professores</body></html>");
        res.render("informacao/professores");
    });
    app.listen(3000, function() {
        console.log("servidor com express foi carregado");
    });

