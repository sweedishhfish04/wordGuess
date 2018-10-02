var winCount = 1;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];

var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];


var randomLetter = Math.floor(Math.random() * alphabet.length);
var objective = alphabet[randomLetter];

console.log(objective);


document.onkeyup = function(event) {
  var userGuess = event.key;

  var realLetter = /[a-z]/gi;
    if (!realLetter.test(userGuess)) {
      alert("please enter a letter");
    }
    else {
      console.log(userGuess);
    }
    
    if (guessesRemaining <= 0) {
      lossCount++;
      document.getElementById("lossCount").innerHTML = lossCount++;
      console.log("Whoops you lost!");
      alert("Whoops you lost!");
      guessesRemaining = 10;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesRemaining").innerHTML = 10;
      randomLetter = Math.floor(Math.random() * alphabet.length);
      objective = alphabet[randomLetter];
      console.log(objective);
    }

    if (objective === userGuess) {
      console.log("You won!");
      alert("You won!");
      document.getElementById("winCount").innerHTML = winCount++;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      randomLetter = Math.floor(Math.random() * alphabet.length);
      objective = alphabet[randomLetter];
      console.log(objective);
      guessesRemaining = 10;
      document.getElementById("guessesRemaining").innerHTML = 10;
    } else {
      console.log("Guess again!");
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
      guessedLetters.push(userGuess);
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}