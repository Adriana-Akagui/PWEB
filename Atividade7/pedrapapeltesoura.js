var play1;
var play2;

play1 = parseInt(prompt("Escolha: 1 para Pedra, 2 para Papel e 3 para Tesoura"));

play2 = Math.random();

if (play2 < 0.33) {
    play2 = 1;
} else if (play2 <= 0.66) {
    play2 = 2;
} else {
    play2 = 3;
}

alert(play1);
alert(play2);

if (play1 === play2) {
    alert("Empate");
} else {
    if ((play1 === 1 && play2 === 2) || (play1 === 2 && play2 === 1)) {
        alert("Papel cobre a pedra");
    } else if ((play1 === 1 && play2 === 3) || (play1 === 3 && play2 === 1)) {
        alert("Pedra quebra tesoura.");
    } else ((play1 === 2 && play2 === 3) || (play1 === 3 && play2 === 2));{
        alert("Tesoura corta papel");
    }
}
    