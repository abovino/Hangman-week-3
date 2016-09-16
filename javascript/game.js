window.onload = function() {
  var userGuesses;
  var words = ["Helena", "Bismark", "Trenton", "Harrisburg", "Concord", "Albany", "Austin", "Tallahassee"];
  var emptyLetters;
  var usedLetters;
  var correctLetters;
  var guessCount;
  var wins;
  var losses;
  var answer;
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var temp = [];

  //Assigns variables to document.getElementById
  var switchEmptyLetters = document.getElementById('word');
  var switchUsedLetters = document.getElementById('used-letters');
  var switchGuessCount = document.getElementById('guesses-remaining');
  var switchWins = document.getElementById('wins');
  var switchLosses = document.getElementById('losses');

  //Modifies the DOM to create a scoreboard with the word, guess count, and wins/losses
  function createScoreboard() {
    guessCount = 6;
    //Creates empty letter placeholders for HTML
    for (var i = 0; i < answer.length; i++) {
      emptyLetters.push(' _ ');
    }
    switchEmptyLetters.innerHTML = "The word is: " + correctLetters;
    switchUsedLetters.innerHTML = "Letters guessed: ";
    switchGuessCount.innerHTML = "Guesses remaining: " + guessCount;
    switchWins.innerHTML = "Wins: " + wins;
    switchLosses.innerHTML = "Losses: " + losses;
  console.log(emptyLetters);
  }

  //Starts the game and selects a random word, calls the createScoreboard function
  function startGame() {
    usedLetters = [];
    emptyLetters = [];
    correctLetters = [];
    selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    answer = selectedWord.split('');
    console.log("The Word is: " + answer);
    console.log(answer.length);
    createScoreboard();
  }

  //Starts game and calls the createScoreboard function
  startGame();

  //Checks the letter entered by the user
  function checkLetter(letter) {
    var isCorrect = false;
    for (i = 0; i <= answer.length; i++) {
      if (answer[i] === letter) {
        temp[i] = answer[i];
        console.log(temp);
        correctLetters = temp.join("");
        console.log(correctLetters);
        isCorrect = true;
      } 
    }

    if (!isCorrect) {
      guessCount--;
      switchGuessCount.innerHTML = "Guesses remaining: " + guessCount;
      console.log(guessCount)
    }
  }/*checkLetter()*/

  //Captures users keystrokes
  document.onkeyup = function(event) {

    //Makes users keystrokes uppercase and stores it to keyPressed
    var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();

    if (usedLetters.indexOf(keyPressed) > -1) {
      alert("You already used that letter!");
      return;
    } else {
      console.log(keyPressed);
    }

    if (alphabet.indexOf(keyPressed) !== -1) {
      usedLetters.push(keyPressed);
      switchUsedLetters.innerHTML = "Letters Guessed: " + usedLetters;
      console.log(usedLetters);
    } else {
      return;
    }

    checkLetter(keyPressed);

  }/*document.onkeyup()*/

} /*window.onload = function()*/