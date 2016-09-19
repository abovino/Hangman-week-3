var words = ["Helena", "Bismark", "Trenton", "Harrisburg", "Concord", "Albany", "Austin", "Tallahassee"];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var activeWord;
var lettersOfWord = [];
var matchedLetters = [];
var guessedLetters = [];
var guessesLeft = 0;
var lettersGuessed = [];
var wins = 0;
var losses = 0;

function startGame() {
  activeWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log("activeWord = " + activeWord);
  lettersOfWord = activeWord.split('');
  console.log("lettersOfWord = " + lettersOfWord);

  buildWord();
}

function buildWord() {
  var wordDisplay = "";

  for (var i = 0; i < lettersOfWord.length; i++) {
    if (matchedLetters.indexOf(lettersOfWord[i]) != -1) {
      wordDisplay += lettersOfWord[i];
    } else {
      wordDisplay += " _ ";
    }
  }

  document.querySelector("#word").innerHTML = wordDisplay;
}

startGame();

document.onkeyup = function(event) {

  var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();

  switch (true) {
    case (lettersGuessed.indexOf(keyPressed) > -1):
      alert("You already used that letter!");
      break;
    case (alphabet.indexOf(keyPressed) == -1):
      //do nothing
      break;
    default:
      lettersGuessed.push(keyPressed);
      document.querySelector("#used-letters").innerHTML = lettersGuessed;
      console.log(lettersGuessed);
      break;
  }

  /*if (lettersGuessed.indexOf(keyPressed) > -1) {
      alert("You already used that letter!");
      return;
  } 

  if (alphabet.indexOf(keyPressed) !== -1) {
    lettersGuessed.push(keyPressed);
    document.querySelector("#used-letters").innerHTML = lettersGuessed;
    console.log(lettersGuessed);
  } else {
    return;
  }*/

}