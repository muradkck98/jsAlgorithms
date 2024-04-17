/*

First factorial
USing the js, have the function FirstFactorial(num) 
take the num parameter being passed and return yhe factorial of it (ie.
if num 0 4, return(4 * 3 * 2 * 1)). for the test cases, the range will be 
between 1 and 18.

 */

const firstFactorial = (num) => {
    let factorial = 1

    for(let i=2; i<=num; i++){
        factorial *=i
    }
    return factorial
}

console.log(firstFactorial(8))