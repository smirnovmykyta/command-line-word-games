import {rockPaperScissors} from "./src/games/rockPaperScissors.js";
import * as readline from "readline";


export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function startGameMenu() {
    rl.question(`Что бы вбрать игры введите ее новер указанный в списке (или "exit" для выхода): 
    1) Rock Paper Scissors
    2) Pig Latin Translator
    3) Caesar Cipher\n`, (input) => {
        switch (input.toLowerCase()) {
            case '1':
                rockPaperScissors();
                break;
            case '2':
                // pigLatinTranslator();
                console.log('Translator')
                break;
            case '3':
                // caesarCipher();
                console.log('Cipher')
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
