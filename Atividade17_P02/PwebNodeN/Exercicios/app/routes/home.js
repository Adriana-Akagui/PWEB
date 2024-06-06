module.exports = function(app) {
    app.get('/', function(req,res){
        //res.send("<html><body>Site da Fatec Sorocaba</body></html>");
        res.render("home/index");
    });
}