
function maiorNumero() {
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
    var num3 = parseInt(prompt("Digite o terceiro número:"));

    var maior = Math.max(num1, num2, num3);

    alert("O maior número é: " + maior);
}


function ordemCrescente() {
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
    var num3 = parseInt(prompt("Digite o terceiro número:"));

    var numordem = [num1, num2, num3].sort((a, b) => a - b);

    alert("Os números em ordem crescente são: " + numordem);
}


function verificarPalindromo() {
    var palavra = prompt("Digite uma palavra ou frase:");

    palavra = palavra.toUpperCase();

    var inverte = palavra.split('').reverse().join('');

    if (palavra === inverte) {
        alert(palavra + " é um palíndromo.");
    } else {
        alert(palavra + " não é um palíndromo.");
    }
}


function tipoTriangulo() {
    var lado1 = parseInt(prompt("Digite o tamanho do primeiro lado do triângulo:"));
    var lado2 = parseInt(prompt("Digite o tamanho do segundo lado do triângulo:"));
    var lado3 = parseInt(prompt("Digite o tamanho do terceiro lado do triângulo:"));

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado1 === lado3) {
            alert("Os lados formam um triângulo equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            alert("Os lados formam um triângulo isósceles.");
        } else {
            alert("Os lados formam um triângulo escaleno.");
        }
    } else {
        alert("Os lados não formam um triângulo.");
    }
}