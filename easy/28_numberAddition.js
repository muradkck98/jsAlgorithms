const numberAddition = (str) => {
    const arr = str.split('')
    return arr
}

/*
Number Addition
Using the JS, have the funcction NumberSearch(str) take the str parameter, search 
for all the number in the string, add then together, then return that final number.

For Example: if str is "88HEllo 3Worls!" the output should be 91.

8 + 8 + 3 = 19
88 + 3 = 91

You wil have to differentiate between single digit numbers and multiple digit numbers 
like in the example above.

So
"55HEllo" = 55
and

"5Hello 5" = 10

should return two different answers.
Each string will contain at least one letter or symbol
*/