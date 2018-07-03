// Declare Variables
var wins = 0;
var losses = 0;
var crystalNum = [];
var targetNumber = 0;
var userGuess = 0;
var crystalValue = 0;
var counter = 0;

// UI Functions
// ==============================================================================

function showLosses() {
  $("#losses").text(losses);
}

function showWins() {
  $("#wins").text(wins);
}

// RESET - Sets inital state of the game
function reset() {
  counter = 0;
  userGuess = 0;
  targetNumber = Math.floor(Math.random() * 102 + 19);
  $("#numberToguess").text(targetNumber);
  for (var i = 0; i < 4; i++) {
    crystalNum[i] = Math.floor(Math.random() * 12 + 1);
    $("#crystalNum").attr = crystalNum[i];
  }
  $("#userGuess").text(userGuess);
  showLosses();
  showWins();
}

// before the game starts, call reset to initalize the game
reset();

// Evaluates which crystal is clicked to assign the value to crystalValue
$("#crystal1").on("click", function() {
  crystalValue = crystalNum[0];
  checkscore(crystalValue);
});

$("#crystal2").on("click", function() {
  crystalValue = crystalNum[1];
  checkscore(crystalValue);
});

$("#crystal3").on("click", function() {
  crystalValue = crystalNum[2];
  checkscore(crystalValue);
});

$("#crystal4").on("click", function() {
  crystalValue = crystalNum[3];
  checkscore(crystalValue);
});

// Checkscore is a function that adds the value of the crystal clicked and checks against targetNumber
function checkscore() {
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#userGuess").text(counter);
  if (counter === targetNumber) {
    wins++;
    $("#displaymsg").css("color", "blue");
    $("#displaymsg").text("You won!");
    showWins();
    reset();
  } else if (counter >= targetNumber) {
    losses++;
    $("#displaymsg").css("color", "red");
    $("#displaymsg").text("You lost!");
    showLosses();
    reset();
  }
}
