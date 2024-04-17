/*
Using the js language, have the function palindrome(str) 
take the str parameter being passed and return the str true if yhe parameter is a palindrome, (
the string is the same forward as it is backward) otherwise return the string false.

For ex: "recevar" is also "recacar" backwards.
--Punctation and numbers will not be part of the string.
*/

const isPalindrome = (str) => {
    const arr = [...str.replace(/ /g,"").toLowerCase()]
    const reservedArr = arr.reverse()
    return reservedArr === arr ? true : false

}

console.log(isPalindrome('rEcevar '))