const startBtn = document.getElementById('start-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const defaultValue = ROCK;
const RESULT_DRAW = 'A Draw.';
const RESULT_PLR_WIN = 'You Won.';
const RESULT_CMP_WIN = 'You Lost.';
let playerValChoice;
let computerValChoice;



function getUserInput(){
    const playerChoice = prompt('ROCK, PAPER or SCISSORS', '').toUpperCase();
    return playerChoice;
}


function validateUserInput(){
    let playerChoice = getUserInput();
    if(playerChoice === ROCK ||
       playerChoice === PAPER ||
       playerChoice === SCISSORS
        ){playerValChoice = playerChoice;}else{
           alert('Invalid input!, using default value as ROCK!');
            playerValChoice = defaultValue;
        }
    return playerValChoice;
}

const computerChoice = () => {
    let cChoice = Math.random();
    computerValChoice = cChoice < 0.34 ? ROCK : cChoice < 0.67 ? PAPER : SCISSORS;
    return computerValChoice;
}

function gameLogic(){
    let pChoice = validateUserInput();
    let cChoice = computerChoice();
    let message = `You picked ${pChoice} and Computer picked ${cChoice}, `
    if(pChoice === cChoice){
        alert(message + RESULT_DRAW);
    }else if(
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK 
    ){
        alert(message + RESULT_PLR_WIN);
    }else{
        alert(message + RESULT_CMP_WIN);
    }
} 

startBtn.addEventListener('click', gameLogic);






