/*
Simple Sembol

Usin the js language, have the function SimpleSembols(str) take the str parameter 
being passed and determine if it is an acceptable sequence by either returning the string true or false.

The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) 
and for the string to be true each letter must be surrounded by a + symbol.

So the string to the left would be false.

The string will not be empty and will have at least one letter.
*/

const SimpleSembols = (str) => {

        const arr = str.split('')
        let control = []

        arr.forEach(char => {
            if((/[a-zA-Z]/).test(char)){
                if(arr[arr.indexOf(char) - 1] === '+' && arr[arr.indexOf(char) + 1] === '+' ){
                    control.push(1)
                }else{
                    control.push(0)
                }
            }
        });

        if(control.includes(0)){
            return false
        }else{
            return true
        }
}

console.log(SimpleSembols('++d+===+c++==+a+'))