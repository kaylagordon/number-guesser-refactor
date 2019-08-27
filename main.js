var minRangeInput = document.getElementById("min-range-input");
var maxRangeInput = document.getElementById("max-range-input");
var minRangeText = document.getElementById("min-range");
var maxRangeText = document.getElementById("max-range");
var updateButton = document.getElementById("update-button");
var challenger1Feedback = document.getElementById("challenger1-feedback");
var challenger2Feedback = document.getElementById("challenger2-feedback");
var player1NameInput = document.getElementById("player1-name-textbox");
var player2NameInput = document.getElementById("player2-name-textbox");
var player1GuessInput = document.getElementById("player1-guess-textbox");
var player2GuessInput = document.getElementById("player2-guess-textbox");
var submitGuessButton = document.getElementById("submit-guess-button");
var challenger1Number = document.getElementById("challenger1-number");
var challenger2Number = document.getElementById("challenger2-number");
var randomNumber = null;
var game1Card = document.querySelector(".game1-card");
var game1Winner = document.querySelector(".game1-winner");
var challenger1Name = document.querySelectorAll(".challenger1-name");
var challenger2Name = document.querySelectorAll(".challenger2-name");
var resetButton = document.getElementById("reset-game-button");
var clearButton = document.getElementById("clear-game-button");
var rightSideContainer = document.querySelector(".right-side");

updateButton.addEventListener("click", clickUpdateButton);

function changeRangeText() {
  minRangeText.innerText = minRangeInput.value;
  maxRangeText.innerText = maxRangeInput.value;
};

function getRandomNumber() {
  var min = minRangeInput.value;
  var max = maxRangeInput.value;
  randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
};

function clickUpdateButton() {
  changeRangeText();
  getRandomNumber();
};

// for phase 2
// submitGuessButton.addEventListener("click", function() {
//   if (player1GuessInput.value.match("^[0-9]*$")) {
//     console.log("YAY1")
//   } else {
//     console.log("BOO1")
//   }
// });
//
// submitGuessButton.addEventListener("click", function() {
//   if (player2GuessInput.value.match("^[0-9]*$")) {
//     console.log("YAY2")
//   } else {
//     console.log("BOO2")
//   }
// });
//
// submitGuessButton.addEventListener("click", function() {
//   if (player1NameInput.value.match("^[0-9a-zA-Z]+$")) {
//     console.log("WOO1");
//   } else {
//     console.log("NOO1");
//   }
// });
//
// submitGuessButton.addEventListener("click", function() {
//   if (player2NameInput.value.match("^[0-9a-zA-Z]+$")) {
//     console.log("WOO2");
//   } else {
//     console.log("NOO2");
//   }
// });

submitGuessButton.addEventListener("click", clickSubmitButton);

function clickSubmitButton() {
  changeCurrentGuess();
  addFeedback(player1GuessInput, challenger1Feedback);
  addFeedback(player2GuessInput, challenger2Feedback);
  inputChallengerName(challenger1Name, player1NameInput);
  inputChallengerName(challenger2Name, player2NameInput);
  addCard(player1GuessInput, player1NameInput.value);
  addCard(player2GuessInput, player2NameInput.value);
};


function changeCurrentGuess() {
  challenger1Number.innerText = player1GuessInput.value;
  challenger2Number.innerText = player2GuessInput.value;
  event.preventDefault();
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

function inputChallengerName(name, nameInput) {
  for (var i = 0; i < name.length; i++) {
  name[i].innerText = nameInput.value;
  }
};

rightSideContainer.addEventListener("click", deleteCard);

function deleteCard(event) {
    if (event.target.classList.contains("close-button")) {
       event.target.closest("section").remove();
    }
}

resetButton.addEventListener("mouseover", function() {
  if (player1NameInput.value != "" || player1GuessInput.value != "" || player2NameInput.value != "" || player2GuessInput.value != "") {
  resetButton.disabled = false;
} else {
  resetButton.disabled = true;
}
});

clearButton.addEventListener("mouseover", function() {
  if (player1NameInput.value != "" || player1GuessInput.value != "" || player2NameInput.value != "" || player2GuessInput.value != "") {
  clearButton.disabled = false;
} else {
  clearButton.disabled = true;
}
});
