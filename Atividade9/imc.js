function calcularimc() {

var peso = prompt("Digite o seu peso:");
var altura = prompt("Digite sua altura:");
var imc = (peso/Math.pow(altura,2)).toFixed(2);

alert("Seu IMC é " + imc);

switch (true) {
    case imc < 18.5:
    alert("Classificação: Magreza");
    break;

    case imc >= 18.5 && imc <= 24.9:
    alert("Classificação: Normal");
    break ;

    case imc >= 25 && imc <= 29.9:
    alert("Classificação: Sobrepeso");
    break;

    case imc >= 30 && imc <= 39.9:
    alert("Classificação: Obesidade");
    break;

    default:
    alert("Classificação: Obesidade Grave");

    }
}