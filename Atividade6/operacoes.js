var num1;
var num2;

num1 = prompt("Digite um número:");
num2 = prompt("Digite mais um número:");

var soma = (parseFloat(num1) + parseFloat(num2));
var sub = (parseFloat(num1) - parseFloat(num2));
var multi = (parseFloat(num1) * parseFloat(num2));
var div = (parseFloat(num1) / parseFloat(num2));
var resto = (parseFloat(num1) % parseFloat(num2));

alert("Soma = " + soma + "\n" + "Substração = " + sub + "\n" + "Multiplicação = " + multi + "\n" + "Divisão = " + div.toFixed(2) + "\n" + "Resto = " + resto);