var sql = require ('mssql');

module.exports = function() {
const sqlConfig = {
    user: 'BD22130**',
    password: '********',
    database:'BD',
    server: 'APOLO',
    options:{
        encrypt: false,
        trustServerCertificate: true
    }
} 

return sql.connect(sqlConfig);

}