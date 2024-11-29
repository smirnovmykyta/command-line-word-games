import {rl, startGameMenu} from "../../index.js";

export function pigLatinTranslator() {
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
                    console.log(translateString(input));
                    return pigLatinTranslator();
                default:
                    console.log('Error: An invalid value was entered, please try again.')
                    pigLatinTranslator();
            }
        });
}

function translateString(input) {
    // (\w+) = word (\W+) = nonWord
    return input.replace(/(\w+)|(\W+)/g, (match, word, nonWord) => {
        if (word) {
            return modifyWord(word);
        } else if (nonWord) {
            return nonWord;
        }
    });
}

function modifyWord(word) {
    const separateWord = word.split("");
    if (/^[^aeiouAEIOU\s][aeiouAEIOU]/.test(word)) {
        const item = separateWord[0];
        if (item[0] === item[0].toUpperCase()) {
           separateWord[1] = separateWord[1].toUpperCase();
        }
        return separateWord.splice(1, separateWord.length).join('') + item[0].toLowerCase() + "ay"
    } else if (/^[^aeiouAEIOU\s][^aeiouAEIOU\s]/.test(word)) {
        const item = separateWord[0] + separateWord[1];
        if (item[0] === item[0].toUpperCase()) {
            separateWord[2] = separateWord[2].toUpperCase()
        }
        return separateWord.splice(2, separateWord.length).join('') + item[0].toLowerCase() + item[1] + "ay";
    } else if (/^[aeiouAEIOU\s]/.test(word)) {
        separateWord.push("way")
        return separateWord.join('');
    }

}
