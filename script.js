const buttons = document.querySelectorAll(".move-btn");

const playerChoice =
document.getElementById("playerChoice");

const computerChoice =
document.getElementById("computerChoice");

const playerScoreEl =
document.getElementById("playerScore");

const computerScoreEl =
document.getElementById("computerScore");

const winsEl =
document.getElementById("wins");

const drawsEl =
document.getElementById("draws");

const lossesEl =
document.getElementById("losses");

const resultText =
document.getElementById("resultText");

const subResult =
document.getElementById("subResult");

const resetBtn =
document.getElementById("resetBtn");

const themeToggle =
document.getElementById("themeToggle");

/* ------------------ */
/* DATA */
/* ------------------ */

let playerScore =
Number(localStorage.getItem("playerScore")) || 0;

let computerScore =
Number(localStorage.getItem("computerScore")) || 0;

let wins =
Number(localStorage.getItem("wins")) || 0;

let draws =
Number(localStorage.getItem("draws")) || 0;

let losses =
Number(localStorage.getItem("losses")) || 0;

/* ------------------ */
/* EMOJIS */
/* ------------------ */

const emojis = {

    rock: "🪨",

    paper: "📄",

    scissors: "✂️"

};

/* ------------------ */
/* LOAD DATA */
/* ------------------ */

updateUI();

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeToggle.innerHTML =
    "☀️ Light Mode";

}

/* ------------------ */
/* BUTTON EVENTS */
/* ------------------ */

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const playerMove =
        button.dataset.choice;

        playGame(playerMove);

    });

});

/* ------------------ */
/* GAME */
/* ------------------ */

function playGame(playerMove){

    const choices = [
        "rock",
        "paper",
        "scissors"
    ];

    const computerMove =

    choices[
        Math.floor(
            Math.random() * choices.length
        )
    ];

    playerChoice.innerHTML =
    emojis[playerMove];

    computerChoice.innerHTML =
    "🤔";

    resultText.innerHTML =
    "Thinking...";

    subResult.innerHTML =
    "Computer is choosing";

    playerChoice.style.transform =
    "scale(0.9)";

    computerChoice.style.transform =
    "scale(0.9)";

    setTimeout(() => {

        computerChoice.innerHTML =
        emojis[computerMove];

        playerChoice.style.transform =
        "scale(1)";

        computerChoice.style.transform =
        "scale(1)";

        decideWinner(
            playerMove,
            computerMove
        );

    }, 700);

}

/* ------------------ */
/* WINNER LOGIC */
/* ------------------ */

function decideWinner(player, cpu){

    if(player === cpu){

        draws++;

        resultText.innerHTML =
        "🤝 Draw";

        subResult.innerHTML =
        "Both selected " +
        capitalize(player);

    }

    else if(

        (player === "rock" &&
        cpu === "scissors") ||

        (player === "paper" &&
        cpu === "rock") ||

        (player === "scissors" &&
        cpu === "paper")

    ){

        wins++;

        playerScore++;

        resultText.innerHTML =
        "🎉 You Win";

        subResult.innerHTML =
        capitalize(player) +
        " beats " +
        capitalize(cpu);

    }

    else{

        losses++;

        computerScore++;

        resultText.innerHTML =
        "😔 Computer Wins";

        subResult.innerHTML =
        capitalize(cpu) +
        " beats " +
        capitalize(player);

    }

    saveData();

    updateUI();

}

/* ------------------ */
/* SAVE */
/* ------------------ */

function saveData(){

    localStorage.setItem(
        "playerScore",
        playerScore
    );

    localStorage.setItem(
        "computerScore",
        computerScore
    );

    localStorage.setItem(
        "wins",
        wins
    );

    localStorage.setItem(
        "draws",
        draws
    );

    localStorage.setItem(
        "losses",
        losses
    );

}

/* ------------------ */
/* UPDATE UI */
/* ------------------ */

function updateUI(){

    playerScoreEl.textContent =
    playerScore;

    computerScoreEl.textContent =
    computerScore;

    winsEl.textContent =
    wins;

    drawsEl.textContent =
    draws;

    lossesEl.textContent =
    losses;

}

/* ------------------ */
/* RESET */
/* ------------------ */

resetBtn.addEventListener("click", () => {

    playerScore = 0;

    computerScore = 0;

    wins = 0;

    draws = 0;

    losses = 0;

    playerChoice.innerHTML =
    "❔";

    computerChoice.innerHTML =
    "❔";

    resultText.innerHTML =
    "Choose a Move";

    subResult.innerHTML =
    "First round begins now";

    saveData();

    updateUI();

});

/* ------------------ */
/* DARK MODE */
/* ------------------ */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(
        document.body.classList.contains("dark")
    ){

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeToggle.innerHTML =
        "☀️ Light Mode";

    }

    else{

        localStorage.setItem(
            "theme",
            "light"
        );

        themeToggle.innerHTML =
        "🌙 Dark Mode";

    }

});

/* ------------------ */
/* HELPER */
/* ------------------ */

function capitalize(word){

    return word.charAt(0)
    .toUpperCase()
    + word.slice(1);

}