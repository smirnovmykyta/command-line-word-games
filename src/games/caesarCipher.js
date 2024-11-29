import {rl, startGameMenu} from "../../index.js";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export function caesarCipher() {
    rl.question('Please enter text to translate(enter "-exit" to end the session or "-back" to return to the menu).\n ',
        (input) => {

            switch (input) {
                case '-back':
                    return startGameMenu();
                case '-exit':
                    console.log("bey bey!")
                    rl.close();
                    break;
                case input:
                    console.log(stringEncryption(input));
                    return caesarCipher();
                default:
                    console.log('Error: An invalid value was entered, please try again.')
                    caesarCipher();
            }
        });
}

function stringEncryption(input) {
    const shiftNumber = getShiftNumber(input);
    // (-?\d+\.?\d*) = Matches numbers, including an optional - sign before the number;
    // ([a-zA-Z]+) = Matches words consisting only of alphabetic characters;
    // (\s+|\W+) = Matches spaces (\s+) or other symbols
    return input.replace(/(-?\d+\.?\d*)|([a-zA-Z]+)|(\s+|\W+)/g, (match,number, word, nonWord) => {
        if (word) {
            return getEncryptWord(word, shiftNumber);
        } else if (nonWord) {
            console.log(nonWord)
            return nonWord;
        } else if (number) {
            return number === shiftNumber ? "" : number;
        }
    });

}

function getShiftNumber(input) {
    //-? = The minus sign (-) is optional.
    // \d+ = One or more digits.
    // $ = Indicates that the number must appear at the end of the string.
    const match = input.match(/-?\d+$/);
    if (match) {
        return match[0];
    } else {
        console.log("There is no number at the end of the string for encryption.");
        return null;
    }
}

function getEncryptWord(word, shift) {
    let encryptWord = "";
    for (let i = 0; i < word.length; i++){
        const charCase = word[i] === word[i].toUpperCase();
        const index =  alphabet.indexOf(word[i].toLowerCase())
        let shiftedIndex = (index + +shift) % alphabet.length;

        if (shiftedIndex < 0) {
            shiftedIndex += alphabet.length;
        }

        encryptWord += charCase ? alphabet[shiftedIndex].toUpperCase() : alphabet[shiftedIndex];
    }


    return encryptWord;
}
