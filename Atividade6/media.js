var nome;
var nota1;
var nota2;
var nota3;
var media;

    nome = prompt("Digite o nome do aluno?");
    nota1 = prompt("Digite a nota 1?");
    nota2 = prompt("Digite a nota 2?");
    nota3 = prompt("Digite a nota 3?");

media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3);

alert("Média de " + nome + " é = " + media.toFixed(2));