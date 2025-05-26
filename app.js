let pChoice = document.querySelector(".p-choice");
let pImg = pChoice.previousElementSibling;

let cChoice = document.querySelector(".c-choice");
let cImg = cChoice.previousElementSibling;

let weapons = document.querySelectorAll(".img");
let result = document.querySelector(".result");

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function Computer() {
  let choices = ["paper", "rock", "scissors"];
  let ele = choices[randomNumber()];
  cImg.src = `images/${ele}.png`;
  cImg.id = ele;
  cChoice.innerHTML = ele;
}

weapons.forEach((weapon) => {
  weapon.addEventListener("click", () => {
    let item = weapon.childNodes[1];
    pImg.src = item.src;
    pImg.id = weapon.id;
    pChoice.innerHTML = weapon.id;

    Computer();
    check(cImg.id, pImg.id);
  });
});

function check(a, b) {
  let msg;
  if (a == b) {
    msg = "DRAW";
  }
  if (a == "rock" && b == "paper") {
    msg = "You Win!";
  } else if (a == "rock" && b == "scissors") {
    msg = "You Lose!";
  }

  if (a == "paper" && b == "scissors") {
    msg = "You Win!";
  } else if (a == "paper" && b == "rock") {
    msg = "You Lose!";
  }

  if (a == "scissors" && b == "rock") {
    msg = "You Win!";
  } else if (a == "scissors" && b == "paper") {
    msg = "You Lose!";
  }

  result.innerHTML = msg;
  document.body.style.pointerEvents = "none";

  setInterval(() => {
    result.innerHTML += ".";
  }, 700);
  setTimeout(() => {
    location.reload();
  }, 2200);
}
