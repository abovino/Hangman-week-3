window.onload = function() {
  var userGuesses;
  var words = ["Helena", "Bismark", "Trenton", "Harrisburg", "Concord", "Albany", "Austin", "Tallahassee"];
  var emptyLetters;
  var usedLetters;
  var guessesCount;
  var wins;
  var losses;
  var answer;
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //Assigns variables to document.getElementById
  var switchEmptyLetters = document.getElementById('word');
  var switchUsedLetters = document.getElementById('used-letters');
  var switchGuessesCount = document.getElementById('guesses-remaining');
  var switchWins = document.getElementById('wins');
  var switchLosses = document.getElementById('losses');

  //Modifies the DOM to create a scoreboard with the word, guess count, and wins/losses
  function createScoreboard() {
    guessesCount = 6;
    //Creates empty letter placeholders for HTML
    for (var i = 0; i < answer.length; i++) {
      emptyLetters.push(' _ ');
      switchEmptyLetters.innerHTML = "The word is: " + emptyLetters.join('');
      switchUsedLetters.innerHTML = "Letters guessed: ";
      switchGuessesCount.innerHTML = "Guesses remaining: " + guessesCount;
      switchWins.innerHTML = "Wins: " + wins;
      switchLosses.innerHTML = "Losses: " + losses;
    }
    console.log(emptyLetters);
  }

  //Starts the game and selects a random word, calls the createScoreboard function
  function startGame() {
    usedLetters = [];
    emptyLetters = [];
    selectedWord = words[Math.floor(Math.random() * words.length)];
    answer = selectedWord.split('');
    console.log("The Word is: " + answer);
    createScoreboard();
  }

  //Starts game and calls the createScoreboard function
  startGame();

  //Checks if keyPressed is in word
 /* function guessChecker(keyPressed) {
    for (i = 0; i < answer.length; i++) {
      if (keyPressed === answer[i]) {
        console.log("TRUE IT'S A MATCH");
      } else {
        console.log("FALSE THAT LETTER IS INCORREC");
      }
    }
  }*/

  //Captures users keystrokes
  document.onkeyup = function(event) {

    //Makes users keystrokes uppercase and stores it to keyPressed
    var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();

    //Checks if a letter was entered by the user
    for (i = 0; i < alphabet.length; i++) {
      //If user enters a letter the game captures the input, else nothing happens
      if (keyPressed === alphabet[i]) {
        //Checks if keyPressed has already been pushed to usedLetters and alerts user if true
        if (usedLetters.indexOf(keyPressed) > -1) {
          alert("You already used that letter!");
        } else {
          console.log(alphabet[i]);
          usedLetters.push(keyPressed);
          console.log(usedLetters);
          //Subtracts 1 from guessesCount and updates the DOM
          guessesCount--; //THIS SHOULD BE MOVED TO IF keyPressed IS NOT A CORRECT LETTER
          switchGuessesCount.innerHTML = "Guesses remaining: " + guessesCount;
          switchUsedLetters.innerHTML = "Letters Guessed: " + usedLetters;

          /*guessChecker(keyPressed);*/

          if (answer.indexOf(keyPressed) >= 0) {
            console.log("TRUEEEEEEEE");
          } else {
            console.log("FALSEEEEEEEE");
          }
        }
        
      }

    }

  }/*document.onkeyup()*/



} /*window.onload = function()*/