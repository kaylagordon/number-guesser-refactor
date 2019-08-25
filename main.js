//Changes text to display new range
var minRangeInput = document.getElementById("min-range-input");
var maxRangeInput = document.getElementById("max-range-input");
var minRangeText = document.getElementById("min-range");
var maxRangeText = document.getElementById("max-range");
var updateButton = document.getElementById("update-button");
var challenger1Feedback = document.getElementById("challenger1-feedback");
var challenger2Feedback = document.getElementById("challenger2-feedback");
var randomNumber = null;

updateButton.addEventListener("click", function() {
  minRangeText.innerText = minRangeInput.value;
  maxRangeText.innerText = maxRangeInput.value;
});

//When "submit" is clicked, only alpha-numeric/numeric is accepted
var player1NameInput = document.getElementById("player1-name-textbox");
var player2NameInput = document.getElementById("player2-name-textbox");
var player1GuessInput = document.getElementById("player1-guess-textbox");
var player2GuessInput = document.getElementById("player2-guess-textbox");
var submitGuessButton = document.getElementById("submit-guess-button");
var challenger1Number = document.getElementById("challenger1-number");
var challenger2Number = document.getElementById("challenger2-number");

submitGuessButton.addEventListener("click", function() {
  challenger1Number.innerText = player1GuessInput.value;
  challenger2Number.innerText = player2GuessInput.value;
  event.preventDefault();
});



submitGuessButton.addEventListener("click", function() {
  if (player1GuessInput.value.match("^[0-9]*$")) {
    console.log("YAY1")
  } else {
    console.log("BOO1")
  }
});

submitGuessButton.addEventListener("click", function() {
  if (player2GuessInput.value.match("^[0-9]*$")) {
    console.log("YAY2")
  } else {
    console.log("BOO2")
  }
});

submitGuessButton.addEventListener("click", function() {
  if (player1NameInput.value.match("^[0-9a-zA-Z]+$")) {
    console.log("WOO1");
  } else {
    console.log("NOO1");
  }
});

submitGuessButton.addEventListener("click", function() {
  if (player2NameInput.value.match("^[0-9a-zA-Z]+$")) {
    console.log("WOO2");
  } else {
    console.log("NOO2");
  }
});

submitGuessButton.addEventListener("click", function() {
  if (parseInt(player1GuessInput.value) > randomNumber) {
    challenger1Feedback.innerText = "That's too high";
  } else if (parseInt(player1GuessInput.value) < randomNumber) {
    challenger1Feedback.innerText = "That's too low";
  } else {
    challenger1Feedback.innerText = "BOOM!";
  }
});

submitGuessButton.addEventListener("click", function() {
  if (parseInt(player2GuessInput.value) > randomNumber) {
    challenger2Feedback.innerText = "That's too high";
  } else if (parseInt(player2GuessInput.value) < randomNumber) {
    challenger2Feedback.innerText = "That's too low";
  } else {
    challenger2Feedback.innerText = "BOOM!";
  }
});


updateButton.addEventListener("click", function() {
  var min = minRangeInput.value;
  var max = maxRangeInput.value;
  randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
});


//Treating selectorAll as an array
// var textBox = document.querySelectorAll(".textbox");
// var resetButton = document.getElementById("reset-game-button");
//
// function resetTextBoxes() {
//   for (var i = 0; i < textBox.length; i++) {
//     console.log("Hello");
//   }
// }
//
// resetButton.addEventListener("click", resetTextBoxes);
