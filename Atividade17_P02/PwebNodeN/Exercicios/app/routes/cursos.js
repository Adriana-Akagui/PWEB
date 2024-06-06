module.exports = function(app) {
    app.get('/informacao/cursos', function(req,res) {
        //res.end("<html><body>Cursos</body></html>");
        res.render("informacao/cursos");
    });
}