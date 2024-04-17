/*
Using the js, have the function LetterChanges(str) take the str parameter being passed
and modify it using the following algorithm.

1 - Replace every letter in the string with the letter following 
it in the alphabet (ie: c becomes d, z becomes a).

2 - Then capitalize every vowel in this new string (a, e, i, o, u) and finaly 
return this modified string
*/

console.log("A".charCodeAt()) //65
console.log(String.fromCharCode(65)) //  A
console.log(String.fromCharCode("A".charCodeAt() + 1)) // B


const letterChange = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=>{
        if(char === "z"){
            return a
        }else{
            return String.fromCharCode(char.charCodeAt()+1);
        }
    })

    let vowelCapitalized = newStr.replace(/a|e|i|o|u/gi, char=> 
    char.toUpperCase()) 
    return vowelCapitalized;
}

console.log(letterChange("AAaefde"))

