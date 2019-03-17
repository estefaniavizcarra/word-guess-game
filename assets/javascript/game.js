var abc = ["a", "b", "c", "d","e",	"f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 8;
var guesses = 8;
var intentos = [];
var letrarandom;

// para seleccionar letra random de abc
var nuevaletra = function() {
    letrarandom = abc[Math.floor(Math.random() * abc.length)];
};
// poner en el id guesses los intentos que ya se hicieron
var intentado = function() {
    document.getElementById("guesses").innerHTML = "tries: " + intentos.join(",");
};
// poner los intentos que quedan en el id left
var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};
// hacer que inicie nuevo juego
var nuevojuego = function() {
	guessedLetters = [];
    left = 8;
    nuevaletra();
    guessesLeft();
    intentado();
}
// funcion para saber si ganas o pierdes
document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    intentos.push(userGuess);
    intentado();
    guessesLeft();
    if (left > 0) {
        if (userGuess == letrarandom) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            nuevojuego();
        }
    } else if (left == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        nuevojuego();
    }
};