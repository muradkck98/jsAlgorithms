/*
MeanMode

Have the function MeanMode(arr) take the array of numbers, stored in arr and
return 1 if the mode equals the mean, 0 if they don't equal each other
(ie.[5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).

The array will not be empty, will only contain positive integers, and will not contain more than one mode.

mode is the number which repeated most in the arr

*/

const meanMode = (arr) => {
    let totalArr = 0
    let mode = {}
    for (let i=0;i<arr.length;i++){
        totalArr = totalArr + arr[i]

        if(mode[arr[i]]){
            mode[arr[i]]++
        }
        else{
            mode[arr[i]]=1
        }
    }
    const mean = totalArr/arr.length
    maxKey = (Object.values(mode).reduce(function(a,b) {return mode[a] > mode[b] ? a: b}))

    return mean === parseFloat(maxKey) ? 1 : 0
}

console.log(meanMode([5, 3, 3, 3, 1]));