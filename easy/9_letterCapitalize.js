/*
letter Capitalize
Using the js language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.

Words will be separated by only one space.
*/

const LetterCapitalize = (str) => {
    const words = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    let result = '';

    for(i= 0; i<words.length; i++){
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
    }
    return result;
}

console.log(LetterCapitalize('??Using ?the js language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.'))