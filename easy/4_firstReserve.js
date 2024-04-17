/*
First Reserve
Have the function FirstReserve() take the str
paremeter begin passed and return 
the string in reserved order
*/



const firstReserve = (str) => {
    return str.split("").reverse().join("")
}

console.log(firstReserve("merhaba"))