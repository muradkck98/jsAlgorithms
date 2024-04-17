
/*
Additive Persistence
Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit.
For example:
if num is 2718 then your program should return 2
because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
*/

const additivePersistence = (num) => {
    // Eger verilen parametre bir rakamsa direk olarak 0 dön if (num < 10) return 0
    // Verilen parametrenin rakamlaranin toplamina hesapla
    let sumofDigits = sum(num)
    let additivePersistence = 1
    while(sumofDigits > 9){
        console.log(sumofDigits);
        additivePersistence++
        sumofDigits = sum(sumofDigits)
    }
    return additivePersistence;
}
 const sum = (n) => {
    let sum = 0
    const arr = n.toString().split('');
    for (let i = 0; i < arr. length;i++){ sum += parseInt(arr[i])
    }
    return sum
}

console.log(additivePersistence(2718));
