var sql = require('mssql');

var comSQLServer = function () {

    //module.exports = function() {
    const sqlConfig = {
        user: 'BD2213036',
        password: '4658Seta@',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }
    return sql.connect(sqlConfig);

}

module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com bd');
    return comSQLServer
}


