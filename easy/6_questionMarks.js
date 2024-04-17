/*
have the function QuestionMarks(str) take the string parameter, which will contain single digit numbers, letters, and quest,on marks,
and check if there are exactly 3 question mark between every pair of two numbers that add up to 10. If so, then yoır program should 
return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in string, then
your program should return falseas well.

For example: if str is "arrb6???4xxb15???eee5" then your program should return true becaause there are exactly 3 question marks between 
6 and 3, and 3 question marks between 5 and 5 at the end of the string.

*/

const questionMarks = (str) => {
    if(str.length < 5){
        return false
    }

    const newStr = str.replace((/[^\d?]/g),'')

    const arr = newStr.split("")

    let sums = []
    let sum = 0
    let iterator = 0

    arr.forEach((item) =>{
        if(item != '?'){
            sum = parseInt(item) + parseInt(arr[iterator + 4])
            sums.push(sum)
        }
        iterator++
    })
    if(sums.includes(10)){
        return true
    }
    return false

}

console.log(questionMarks("arrb6???4xxb15???eee5"))