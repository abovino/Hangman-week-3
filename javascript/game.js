window.onload = function() {
  var userGuesses;
  var words = ["Helena", "Bismark", "Trenton", "Harrisburg", "Concord", "Albany", "Austin", "Tallahassee"];
  var emptyLetters;
  var lettersGuessed;
  var guessesCount;
  var wins;
  var losses;
  var answer;
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  function createScoreboard() {
    guessesCount = 6;
    //Creates empty letter placeholders for HTML
    for (var i = 0; i < answer.length; i++) {
      emptyLetters.push(' _ ');
    }
    
    console.log(emptyLetters);
  }

  function startGame() {
    lettersGuessed = [];
    emptyLetters = [];
    answer = words[Math.floor(Math.random() * words.length)];
    console.log("The Word is: " + answer);
    createScoreboard();
  }

  //Starts game and calls the createScoreboard function
  startGame();
} /*window.onload = function()*/