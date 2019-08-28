var challenger1Feedback = document.getElementById("challenger1-feedback");
var challenger1Name = document.querySelectorAll(".challenger1-name");
var challenger1Number = document.getElementById("challenger1-number");
var challenger2Feedback = document.getElementById("challenger2-feedback");
var challenger2Name = document.querySelectorAll(".challenger2-name");
var challenger2Number = document.getElementById("challenger2-number");
var clearButton = document.getElementById("clear-game-button");
var game1Card = document.querySelector(".game1-card");
var game1Winner = document.querySelector(".game1-winner");
var guess1Error = document.querySelector(".guess1-error");
var guess2Error =document.querySelector(".guess2-error");
var maxError = document.querySelector(".max-error");
var maxRangeInput = document.getElementById("max-range-input");
var maxRangeText = document.getElementById("max-range");
var minError = document.querySelector(".min-error");
var minRangeInput = document.getElementById("min-range-input");
var minRangeText = document.getElementById("min-range");
var name1Error = document.querySelector(".name1-error");
var name2Error = document.querySelector(".name2-error");
var playerBox = document.querySelector(".player-box");
var player1GuessInput = document.getElementById("player1-guess-textbox");
var player1NameInput = document.getElementById("player1-name-textbox");
var player2GuessInput = document.getElementById("player2-guess-textbox");
var player2NameInput = document.getElementById("player2-name-textbox");
var randomNumber = null;
var rightSideContainer = document.querySelector(".right-side");
var resetButton = document.getElementById("reset-game-button");
var submitGuessButton = document.getElementById("submit-guess-button");
var updateButton = document.getElementById("update-button");

document.addEventListener("DOMContentLoaded", getDefaultRandomNumber);

clearButton.addEventListener("click", function() {
  window.location.reload();
});
rightSideContainer.addEventListener("click", deleteCard);
rightSideContainer.addEventListener("click", disableAllButtons);
submitGuessButton.addEventListener("click", clickSubmitButton);
updateButton.addEventListener("click", clickUpdateButton);

function addCard(guessInput, winner) {
  var player1 = player1NameInput.value;
  var player2 = player2NameInput.value
  if (parseInt(guessInput.value) === randomNumber) {
    rightSideContainer.innerHTML += `<section class="card">
      <div class="card-header">
        <p class="challenger1-name">${player1}</p>
        <p> VS </p>
        <p class="challenger2-name">${player2}</p>
      </div>
      <div class="card-main">
        <div class="card-line"></div>
        <p class="winner-name game1-winner">${winner}</p>
        <p class="card-winner-label">WINNER</p>
        <div class="card-line"></div>
      </div>
      <div class="card-footer">
        <p><span id="number-of-guesses">1675</span> GUESSES</p>
        <button class="close-button">X</button>
      </div>
    </section>`;
  }
};

function addFeedback(guessInput, feedback) {
  if (parseInt(guessInput.value) > randomNumber) {
    feedback.innerText = "That's too high";
  } else if (parseInt(guessInput.value) < randomNumber) {
    feedback.innerText = "That's too low";
  } else {
    feedback.innerText = "BOOM!";
  }
};

function changeRangeText() {
  minRangeText.innerText = minRangeInput.value;
  maxRangeText.innerText = maxRangeInput.value;
};

function changeCurrentGuess() {
  challenger1Number.innerText = player1GuessInput.value;
  challenger2Number.innerText = player2GuessInput.value;
  event.preventDefault();
};

function checkGuess(playerGuessInput) {
  console.log("checkGuess ran")
  if (parseInt(playerGuessInput.value) > parseInt(maxRangeInput.value) || parseInt(playerGuessInput.value) < parseInt(minRangeInput.value)) {
    return false;
  } else {
    console.log(checkGuess)
    return true;
  }
};

function checkGuessNumber(playerGuessInput) {
  if (parseInt(playerGuessInput.value)) {
    return true;
  } else {
    return false;
  }
};

function checkMinRange() {
  if (parseInt(minRangeInput.value) > (parseInt(maxRangeInput.value)) {
    
  }
}

function clickSubmitButton() {
  event.preventDefault();
  var isValidGuess1 = checkGuess(player1GuessInput);
  var isValidGuess2 = checkGuess(player2GuessInput);
  var isGuess1Number = checkGuessNumber(player1GuessInput);
  var isGuess2Number = checkGuessNumber(player2GuessInput);

  if (isValidGuess1 === false || isGuess1Number === false) {
    guess1Error.style.display = "block";
    console.log("guess1");
    return;
  }

  guess1Error.style.display = "none";

  if (isValidGuess2 === false || isGuess2Number === false) {
    guess2Error.style.display = "block";
    console.log("guess2");
    return;
  }

  guess2Error.style.display = "none";

  changeCurrentGuess();
  addFeedback(player1GuessInput, challenger1Feedback);
  addFeedback(player2GuessInput, challenger2Feedback);
  inputChallengerName(challenger1Name, player1NameInput);
  inputChallengerName(challenger2Name, player2NameInput);
  addCard(player1GuessInput, player1NameInput.value);
  addCard(player2GuessInput, player2NameInput.value);
};

function clickUpdateButton() {
  changeRangeText();
  getRandomNumber();
};


function disableAllButtons() {
  disableButton(resetButton);
  disableButton(clearButton);
};

function disableButton(button) {
  if (player1NameInput.value.length > 0 || player1GuessInput.value.length > 0 || player2NameInput.value.length > 0 || player2GuessInput.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

function deleteCard(event) {
    if (event.target.classList.contains("close-button")) {
       event.target.closest("section").remove();
    }
};

function getDefaultRandomNumber() {
  randomNumber = Math.floor(Math.random() * (+100 - +1)) + +1;
};

function getRandomNumber() {
  var min = minRangeInput.value;
  var max = maxRangeInput.value;
  randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
};

function inputChallengerName(name, nameInput) {
  for (var i = 0; i < name.length; i++) {
  name[i].innerText = nameInput.value;
  }
};
