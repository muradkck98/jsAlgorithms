/*
Division Stringified
Using the js. Have the function DivisionStringfied(num1, num2)
take both parameters being passed, divide num1 by num2, take both parameters being passed, divide num1 by num2,
and return the result as a string with properly formatted commas.

If an answer is only 3 digits long,
returnthe number with no commas(ie. 2/ 3 should output "1").

For example:

İf num1 is 123456789 num2 is 10000 the output should be "12,345".
*/

const divisionStringfied = (n1, n2) => {
    return Math.floor(n1/n2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

console.log(divisionStringfied(123456789, 10000));