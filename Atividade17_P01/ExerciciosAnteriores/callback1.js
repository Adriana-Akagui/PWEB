const { callbackify } = require('util');

const prompt = require('prompt-sync')();
// não esquecer de instalar 
// npm install prompt-sync
function saudacao(nome) {
    console.log(' Oi ' + nome);
}

function entradaNome(callback) {
    var nome = prompt('Digite seu nome:');
    callback(nome); // chamando a função callback (saudação)
}

entradaNome(saudacao);
//obter o nome do usuário através de uma caixa de diálogo e, em seguida, chamar a função de retorno (callback) forencida como parametro, passando o nome como argumento.
