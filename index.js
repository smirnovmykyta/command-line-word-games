import {rockPaperScissors} from "./src/games/rockPaperScissors.js";
import * as readline from "readline";
import {pigLatinTranslator} from "./src/games/pigLatinTranslator.js";
import {caesarCipher} from "./src/games/caesarCipher.js";


export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function startGameMenu() {
    rl.question(`To select a game, enter its number indicated in the list (or "exit" to exit): 
    1) Rock Paper Scissors
    2) Pig Latin Translator
    3) Caesar Cipher\n`, (input) => {
        switch (input.toLowerCase()) {
            case '1':
                rockPaperScissors();
                break;
            case '2':
                pigLatinTranslator();
                break;
            case '3':
                caesarCipher();
                break;
            case 'exit':
                console.log("bey bey!")
                rl.close();
                break;
            default:
                console.log('Error: An invalid value was entered, please try again.')
                startGameMenu();
        }
    });
}

startGameMenu();
