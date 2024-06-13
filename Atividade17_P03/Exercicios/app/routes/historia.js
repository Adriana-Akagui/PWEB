module.exports = function(app) {
    app.get('/informacao/historia', function(req,res) {
        //res.end("<html><body>Cursos</body></html>");
        res.render("informacao/historia");
    });
}