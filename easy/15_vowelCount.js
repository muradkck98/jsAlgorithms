/*
Vovel Count 
Using js language, have the function VovelCount(str)
take the str parameter being passed and return the number of 
vowels the string contains
(ie. "All cows eat grass" would retun 5).
Do not count y as a vowel for this challenge.
*/

const vovelCount = (str) => {
    const vowels = "aeoöuüiAEOÖUÜIı"
    let counter = 0;
    for (let i=0; i<str.length; i++) {
        if (vowels.includes(str[i])){
            counter ++
        }
    }
    return counter
}

console.log(vovelCount('All cows eat grass'))