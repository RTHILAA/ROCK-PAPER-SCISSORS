let pChoice = document.querySelector(".p-choice");
let pImg = pChoice.previousElementSibling;

let cChoice = document.querySelector(".c-choice");
let cImg = cChoice.previousElementSibling;

let weapons = document.querySelectorAll(".img");
let result = document.querySelector(".result");
let gameContainer = document.querySelector(".game-container");

let playerScore = 0;
let computerScore = 0;

let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");

function startCountdown(callback) {
  let count = 3;
  result.innerText = count;

  let interval = setInterval(() => {
    count--;
    if (count > 0) {
      result.innerText = count;
    } else {
      clearInterval(interval);
      result.innerText = ""; 
      callback(); 
    }
  }, 1000);
}

function shakeElements(callback) {
  pImg.classList.add('shake');
  cImg.classList.add('shake');

  setTimeout(() => {
    pImg.classList.remove('shake');
    cImg.classList.remove('shake');
    if (callback) callback();
  }, 500);
}

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function Computer() {
  let choices = ["paper", "rock", "scissors"];
  let ele = choices[randomNumber()];
  cImg.src = `images/${ele}.png`;
  cImg.id = ele;
  cChoice.innerHTML = ele.toUpperCase();
}

weapons.forEach((weapon) => {
  weapon.addEventListener("click", () => {
    if (gameContainer.classList.contains('disabled')) return;

    gameContainer.classList.add('disabled');

    let playerChoiceId = weapon.id;
    let playerChoiceSrc = weapon.querySelector("img").src;

    weapon.classList.add('clicked');
    setTimeout(() => weapon.classList.remove('clicked'), 200);

    startCountdown(() => {
      pImg.src = playerChoiceSrc;
      pImg.id = playerChoiceId;
      pChoice.innerHTML = playerChoiceId.toUpperCase();

      Computer();

      shakeElements(() => {
        check(cImg.id, pImg.id);
      });
    });
  });
});

function check(computerChoice, playerChoice) {
  pImg.classList.remove("winner", "loser", "draw");
  cImg.classList.remove("winner", "loser", "draw");
  result.classList.remove('show-result');

  let msg;

  if (computerChoice === playerChoice) {
    msg = "DRAW!";
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    msg = "YOU WIN!";
    playerScore++;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    msg = "YOU LOSE!";
    computerScore++;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    msg = "YOU WIN!";
    playerScore++;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    msg = "YOU LOSE!";
    computerScore++;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    msg = "YOU WIN!";
    playerScore++;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    msg = "YOU LOSE!";
    computerScore++;
  }

  result.innerHTML = msg;
  result.classList.add('show-result');

  playerScoreSpan.textContent = `Player : ${playerScore}`;
  computerScoreSpan.textContent = `Computer : ${computerScore}`;

  if (msg === "YOU WIN!") {
    pImg.classList.add("winner");
    cImg.classList.add("loser");
  } else if (msg === "YOU LOSE!") {
    pImg.classList.add("loser");
    cImg.classList.add("winner");
  } else {
    pImg.classList.add("draw");
    cImg.classList.add("draw");
  }

  gameContainer.classList.remove('disabled');
}
