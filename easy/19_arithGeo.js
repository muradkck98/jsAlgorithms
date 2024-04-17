/*
Using the js language, have the function ArithGro(arr) take the 
array of numbers stored in arr and return the string "Aritmetic" 
if the sequence follows an arithmetic pattern or return "Geometric"
if it follows a geometric pattern. If the sequence doesn't follow either 
pattern return -1. An arithmetic sequenceis one where the diff between each of the numbers is consistent, 
w here as in a geometric sequence, each term after the first is multipled by some constant or common ratio.

Aritmahmetic ex: [2, 4, 6, 8] and
Geometric ex: [2, 6, 18, 54].

Negative Numbers may be entered as parameters, 0 will not be entered, and no array will contain
all the same elements
*/

const arithGeo = (arr) =>{
    let diff = arr[1] - arr[0]
    let ratio = arr[1] / arr[0]
    let isArithmetic = true
    let isGeometric = true

    for(let i = 2; i<arr.length; i++){
        if((arr[i]-arr[i-1]) !== diff){
            isArithmetic = false
        }
        if((arr[i]/arr[i-1]) !== ratio){
            isGeometric = false
        }
    }

    if(isArithmetic === true){
        return 'Arithmetic'
    } else if(isGeometric === true){
        return 'Geometric'
    } else {
        return '-1'
    }
}

console.log(arithGeo([2, 4, 6, 8]))