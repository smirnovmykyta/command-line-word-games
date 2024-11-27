import {rl, startGameMenu} from "../../index.js";

const rpc = ["rock", "paper", "scissors"];

export function rockPaperScissors() {
    const ourChoice = rpc[Math.floor(Math.random() * 3)];

    rl.question(`Please make a choice by writing rock, paper or scissors(enter "exit" to end the session or "back" to return to the menu).\n`,
        (input) => {
            switch (input.toLowerCase()) {
                case 'rock':
                    console.log(rock(ourChoice));
                    return rockPaperScissors();
                case 'paper':
                    console.log(paper(ourChoice));
                    return rockPaperScissors();
                case 'scissors':
                    console.log(scissors(ourChoice));
                    return rockPaperScissors();
                case 'back':
                    return startGameMenu();
                case 'exit':
                    console.log("bey bey!")
                    rl.close();
                    break;
                default:
                    console.log('Error: An invalid value was entered, please try again.')
                    rockPaperScissors();
            }
        });
}

function rock(ourChoice) {
    switch (ourChoice) {
        case 'rock':
            return 'computer chose a rock\n result: draw'
        case 'paper':
            return 'computer chose a paper\n result: computer victory'
        case 'scissors':
            return 'computer chose a scissors\n result: your victory'
        case 'default':
            return 'error'
    }
}

function paper(ourChoice) {
    switch (ourChoice) {
        case 'rock':
            return 'computer chose a rock\n result: your victory'
        case 'paper':
            return 'computer chose a paper\n result: draw'
        case 'scissors':
            return 'computer chose a scissors\n result: computer victory'
        case 'default':
            return 'error'
    }
}

function scissors(ourChoice) {
    switch (ourChoice) {
        case 'rock':
            return 'computer chose a rock\n result: computer victory'
        case 'paper':
            return 'computer chose a paper\n result: your victory'
        case 'scissors':
            return 'computer chose a scissors\n result: draw'
        case 'default':
            return 'error'
    }
}
