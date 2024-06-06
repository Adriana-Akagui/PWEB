//para acessar o arquivo de config voltar 1 nível

var dbConnection = require('../config/dbConnection');

module.exports = function(app){
    app.get('/informacao/professores', function(req, res){

        async function getProfessores(){
            try{
                const pool = await dbConnection(); //exeutando a funcao
                const results = await pool.request().query('SELECT * FROM PROFESSORES');
                //res.send(results.recordsets);
                res.render('informacao/professores',{profs : results.recordset});
            }
            catch(err){
                console.log(err);
            }
            //res.render('informacao/professores');
            }
            getProfessores();
        });
    }