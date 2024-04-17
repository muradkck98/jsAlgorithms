// const swapCase = (str) => {
//     const arr =str.split('')
//     let newLetters = ''
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == arr[i].toUpperCase()){
//             newLetters += arr[i].toLowerCase();
//         } else {
//             newLetters += arr[i].toUpperCase()
//         }
//     }
//     return newLetters
// }

//////    solution 2

const swapCase =(str) => {
    let newArr = []

    str.split().forEach(element => {
        if((/[^a-zA-Z/]/).test(element)){
            newArr.push(element)
        }else if((/[a-z]/).test(element)){
            newArr.push(element.toUpperCase())
        }else if((/[A-Z]/).test(element)){
            newArr.push(element.toLowerCase())
        }
    });
}
return newArr.join('')

console.log(swapCase('Hello Word'))