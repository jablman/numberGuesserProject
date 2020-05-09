let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/*
function generateTarget() {
    return Math.floor(Math.random() * 10);
}
*/
// Alternative way to write generateTarget()

const generateTarget = () => Math.floor(Math.random() * 10);

/*
function compareGuesses(humanGuess, compGuess, secret) {
    const humanDifference = Math.abs(secret - humanGuess);
    const compDifference = Math.abs(secret - compGuess);
    return humanDifference <= compDifference
}
*/
/*
// Alternative 2 to compareGuesses()
const compareGuesses = (humanGuess, compGuess, secret) => {
    const humanDifference = Math.abs(secret - humanGuess);
    const compDifference = Math.abs(secret - compGuess);
    return humanDifference <= compDifference;
}
*/
// Alternative 3 to compareGuesses() with alert for wrong entry

const getAboluteDistance = (num1, num2) => Math.abs(num2 - num1);

const compareGuesses = (humanGuess, compGuess, secret) => {
    if (humanGuess < 0 || humanGuess > 9) {
        window.alert("Please make sure your guess is between 0 and 9");
    } else {
        return getAboluteDistance(humanGuess,secret)<=getAboluteDistance(compGuess,secret);
    }
}
/*
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}
*/
//Alternative way to write updateScore()
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

/*
function advanceRound() {
    currentRoundNumber++;
}
*/
// Alternative way to write advanceRound()

const advanceRound = () => currentRoundNumber++;