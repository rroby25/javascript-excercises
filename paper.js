function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3);
    return computerInput;
};

function getHumanChoice() {
    let humanChoice = window.prompt("paper, rock, scissors", "paper").toLowerCase()
    return humanChoice;
};
function transformComputer(computerInput) {
    let computerChoice = answer_bank[computerInput];
    return computerChoice;
}
let humanScore = 0;
let computerScore = 0;

answer_bank = {
    0: 'rock',
    1: 'paper',
    2: 'scissors',
    'scissors': 2,
    'paper': 1,
    'rock': 0
};


function playRound(humanChoice, computerInput){
    humanChoice = getHumanChoice();
    computerInput = getComputerChoice();
    let bb = transformComputer(computerInput);
    console.log("Human: ", humanChoice, "Computer: ", bb)
    humanChoice = answer_bank[humanChoice];
    if (humanChoice === computerInput) {
    } else if ((humanChoice === 2 && computerInput === 1) 
        || (humanChoice === 1 && computerInput === 0)
        || (humanChoice === 0 && computerInput === 2)){
        humanScore++;
    } else {
        computerScore++;

        (humanChoice, computerInput)
    };
};
function playGame() {
    for (let i=0; i < 5; i++) {
        playRound();
    }
}

playGame()
console.log("Human: ",humanScore, "Computer: ", computerScore);


