/*
Second Great Low

Using the js language, have the function SecondGreatLow(arr) take
the array of numbers stored in arr and return the second lowest
and second greatest numbers, respectively, separated by a space.

For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.

The array will not be empty and will contain at least 2 numbers.

It can get tricky if there's just two numbwes!
*/

const secondGreatLow = (arr) => {
// method 1
    // const sortedArr = arr.slice().sort(function(a, b) {
    //     return a - b;
    // });
    // if(sortedArr.length <= 2){
    //     return sortedArr[0]+'-'+sortedArr[1]
    // }
    
    // let minNum = sortedArr[0]; 
    // let maxNum = sortedArr[sortedArr.length - 1]; 
    
    // var filteredNumber = arr.filter(function(element) {
    //     return element !== minNum && element !== maxNum;
    // });

    // const minValue = Math.min(...filteredNumber)
    // const maxValue = Math.max(...filteredNumber)
    
    // return {minValue, maxValue}
// method 2
    let newArr = []
    arr.forEach((num) => {
        !newArr.includes(num) && newArr.push(num)
    });

    newArr.sort((a,b) => (a-b))

    if (newArr.length === 2){
        return newArr[1] + "-" + newArr[0]
    }else{
        return newArr[1] + "-" + newArr[newArr.length - 1]
    }
}


console.log(secondGreatLow([7, 7, 12, 98, 106]));