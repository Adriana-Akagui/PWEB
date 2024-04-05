do {
var play1;
var play2;

do {
play1 = parseInt(prompt("Escolha: 1 para Pedra, 2 para Papel e 3 para Tesoura"));
} while (play1 !== 1 && play1 !== 2 && play1 !== 3);
    
play2 = Math.random();

if (play2 < 0.33) {
    play2 = 1;
} else if (play2 <= 0.66) {
    play2 = 2;
} else {
    play2 = 3;
}

if (play1 === 1) {
        alert("Você escolheu Pedra");
    } else if (play1 === 2) {
        alert("Você escolheu Papel");
    } else {
        alert("Você escolheu Tesoura");
    }

    if (play2 === 1) {
        alert("Computador escolheu Pedra");
    } else if (play2 === 2) {
        alert("Computador escolheu Papel");
    } else {
        alert("Computador escolheu Tesoura");
    }


    if (play1 < play2) {
        if (play1 === 1 && play2 === 2) {
            alert("Você perdeu!!" + "\n" + "Papel cobre a pedra");
        } else if (play1 === 1 && play2 === 3) {
            alert("Você venceu!!" + "\n" + "Pedra quebra tesoura.");
        } else {
            alert("Você perdeu!!" + "\n" + "Tesoura corta papel");
        }
    } else if (play1 > play2) {
        if (play1 === 2 && play2 === 1) {
            alert("Você venceu!!" + "\n" + "Papel cobre a pedra");
        } else if (play1 === 3 && play2 === 1) {
            alert("Você perdeu!!" + "\n" + "Pedra quebra tesoura.");
        } else {
            alert("Você venceu!!" + "\n" + "Tesoura corta papel");
        }
    } else {
        alert("Empate");
    }

    var jogarNovamente = confirm("Deseja jogar novamente?");
} while (jogarNovamente);
