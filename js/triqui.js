var statusI = false;
var turn = 0;
var full = 0;
let game = new Array();
window.onload = function() {
    var start = document.getElementById("start");
    start.addEventListener("click", startGame);
}

function startGame() {
    statusI = true;
    start.value = "Iniciado";
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    if (player1.value == "" || player2.value == "") {
        alert("Los nombres de los jugadores son requeridos");
    } else {
        game[0] = document.getElementById("g0")
        game[1] = document.getElementById("g1")
        game[2] = document.getElementById("g2")
        game[3] = document.getElementById("g3")
        game[4] = document.getElementById("g4")
        game[5] = document.getElementById("g5")
        game[6] = document.getElementById("g6")
        game[7] = document.getElementById("g7")
        game[8] = document.getElementById("g8")
        for (var i = 0; i < 9; i++) {
            game[i].className = "buttonStart";
            game[i].value = "I";
        }
        turn = 1;
        document.getElementById("turnPlayer").innerHTML = "Turno de " + player1.value
    }
}

function place(button) {
    if (statusI == true) {
        if (turn == 1 && button.value == "I") {
            turn = 2;
            document.getElementById("turnPlayer").innerHTML = "Turno de " + player2.value
            button.value = "X";
            button.className = "buttonPlayer1";
        } else {
            if (turn == 2 && button.value == "I") {
                turn = 1;
                document.getElementById("turnPlayer").innerHTML = "Turno de " + player1.value
                button.value = "O";
                button.className = "buttonPlayer2";
            }
        }
    }
    validate();
}

function validate() {
    full = 0;
    if (
        (game[0].value == "X" && game[1].value == "X" && game[2].value == "X") ||
        (game[3].value == "X" && game[4].value == "X" && game[5].value == "X") ||
        (game[6].value == "X" && game[7].value == "X" && game[8].value == "X") ||
        (game[0].value == "X" && game[3].value == "X" && game[6].value == "X") ||
        (game[1].value == "X" && game[4].value == "X" && game[7].value == "X") ||
        (game[2].value == "X" && game[5].value == "X" && game[8].value == "X") ||
        (game[0].value == "X" && game[4].value == "X" && game[8].value == "X") ||
        (game[2].value == "X" && game[4].value == "X" && game[6].value == "X")
    ) {
        alert("Jugador " + player1.value + " ha ganado.");
        statusI = false;
    }
    if (
        (game[0].value == "O" && game[1].value == "O" && game[2].value == "O") ||
        (game[3].value == "O" && game[4].value == "O" && game[5].value == "O") ||
        (game[6].value == "O" && game[7].value == "O" && game[8].value == "O") ||
        (game[0].value == "O" && game[3].value == "O" && game[6].value == "O") ||
        (game[1].value == "O" && game[4].value == "O" && game[7].value == "O") ||
        (game[2].value == "O" && game[5].value == "O" && game[8].value == "O") ||
        (game[0].value == "O" && game[4].value == "O" && game[8].value == "O") ||
        (game[2].value == "O" && game[4].value == "O" && game[6].value == "O")
    ) {
        alert("Jugador " + player2.value + " ha ganado.");
        statusI = false;
    }
    game.forEach(element => {
        if (element.value == "I") {
            full++;
        }
    });
    if (full == 0) {
        alert("Tablero lleno, se declara empate.");
        statusI = false;
    }
    if (statusI == false) {
        start.value = "Restart";
    }
}