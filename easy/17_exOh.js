/*
Ex Oh

Using the js language, have the function ExOh(str) take the str parameter being passed and return
the string true if there is an equal number of x's and o's, otherwise return the string false.

Only these two lwtters will be entered in the string, punctuation or numbers.
For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
*/

const exOh = (str) => {
    let x = 0;
    let o = 0;

    [...str].forEach((i)=>{
        i === "x" ? x = x + 1 : o = o + 1
    })

    return x === o ? true: false
}

console.log(exOh('xooxxxxoooxo'))