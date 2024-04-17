/*
Array addition I
Using the JS language, have the function ArrayAditionI(arr) take the array of numbers stored in 
arr and return the string true if any combination of numbers in the array can be added up to 
equal the largest number in the array, otherwise return the string false.
For Example: if arr contains [4,6,23,10,1,3] he output should
be "true" because you can add 4+6=10 which is equal to the largest number 10.
 return false because 4 + 6 + 10 + 3 + 1 != 23(24).
 the array will not be empty, will not contain
 all the same elements, and may contain negative numbers.
*/

const ArrayAdition = (arr) =>{
    let maxNum = Math.max(...arr);
    let sum = 0;

    arr.forEach(index => {
        if(index != maxNum){
            sum += index;
        }
    });
    return sum === maxNum ?  true :  false
}


console.log(ArrayAdition([4,6,24,10,1,3]));