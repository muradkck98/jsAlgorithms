/*
AB Check
Using the js language, have the function ABCheck(str)
take the str parameter being passed and return the string true
if the characters a and b are seperated by exactly 3 places
anywhrer in the string at least once

(ie. "lane borrowed" would result in true because there is exactly three
characters between a and b).
Otherwise return the string false
*/

const abCheck = (str) => {
    arr = str.toLowerCase().split('')
    let indexA = arr.indexOf('a');
    let indexB = arr.indexOf('b')
    console.log(indexB - indexA)
    
    return indexB - indexA === 4 ? true : false
    // return str.search("a...b") > -1 ? true : false

}

console.log(abCheck("lane borrowed"));