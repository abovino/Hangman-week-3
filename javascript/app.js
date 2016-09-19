var words = ["Helena", "Bismark", "Trenton", "Harrisburg", "Concord", "Albany", "Austin", "Tallahassee"];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var activeWord;
var lettersOfWord = [];
var matchedLetters = [];
var guessedLetters = [];
var guessesLeft = 6;
var wins = 0;
var losses = 0;

function startGame() {
  activeWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log("activeWord = " + activeWord);
  lettersOfWord = activeWord.split('');
  console.log("lettersOfWord = " + lettersOfWord);
  document.querySelector("#guesses-remaining").innerHTML = "Guesses remaining: " + guessesLeft;
  document.getElementById('used-letters').innerHTML = "Used letters: " + guessedLetters;
  document.getElementById('wins').innerHTML = "Wins: " + wins;
  document.getElementById('losses').innerHTML = "Losses: " + losses;

  buildWord();
}/*startGame()*/

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
}/*buildWord()*/

function updateGame(letter) {
  if (guessesLeft == 0) {
    alert("Game over!");
    return;
  } 

  console.log(letter);

  updateGuesses(letter);
  updateMatchedLetters(letter);
  rebuildWord();
}/*updateGame*/

function updateGuesses(letter) {
  guessedLetters.push(letter);
  if (guessedLetters.indexOf(letter) >= 0 && lettersOfWord.indexOf(letter) == -1){
    guessesLeft--;
    document.querySelector("#guesses-remaining").innerHTML = "Guesses remaining: " + guessesLeft;
  }
  document.querySelector("#used-letters").innerHTML = "Used letters: " + guessedLetters;
}/*updateGuesses()*/

function updateMatchedLetters(letter) {
  for (i = 0; i < lettersOfWord.length; i++) {
    if (letter === lettersOfWord[i] && matchedLetters.indexOf(letter) == -1) {
      matchedLetters.push(letter);
      console.log("Matched Letters: " + matchedLetters);
    }
  }
}

function rebuildWord() {
  var wordView = "";

  for (i = 0; i < lettersOfWord.length; i++) {
    if (matchedLetters.indexOf(lettersOfWord[i]) != -1) {
      wordView += lettersOfWord[i];
    } else {
      wordView += " _ ";
    }
  }

  document.querySelector("#word").innerHTML = " " + wordView + " ";
}

startGame();

document.onkeyup = function(event) {

  var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();

  switch (true) {
    case (guessedLetters.indexOf(keyPressed) > -1):
      alert("You already used that letter!");
      break;
    case (alphabet.indexOf(keyPressed) == -1):
      //If user doesn't enter a letter, do nothing
      break;
    default:
      
      console.log(guessedLetters);
      updateGame(keyPressed);
      break;
  }

}/*document.onkeyup()*/