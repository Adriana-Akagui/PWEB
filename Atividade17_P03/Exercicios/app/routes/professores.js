//para acessar o arquivo de config voltar 1 nível

//var dbConnection = require('../config/dbConnection');

module.exports = function(app){
    app.get('/informacao/professores', function(req, res){

        async function getProfessores(){
            try{
                var connection = app.config.dbConnection;

                const pool = await connection();

                var professoresModel = app.models.professormodel; //variável que recupera função exportar
                //const pool = await dbConnection(); //exeutando a funcao

                //const results = await pool.request().query('SELECT * FROM PROFESSORES');
                professoresModel.getProfessor(pool, function(error, results){
                    res.render('informacao/professores',{profs : results.recordset});
                })
                //res.send(results.recordsets);
               
            }
            catch(err){
                console.log(err);
            }
            //res.render('informacao/professores');
            }
            getProfessores();
        });
    }