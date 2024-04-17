/*
Verilecek olan tamsayıya kadar olan
değerlerin toplanması(verlen sayı dahil)
*/

const simpleAdding = (num) => {
    let sum = 0;

    for(i = 0; i<= num ; i ++){
        sum += i;
    }
        return sum

}


console.log(simpleAdding(2))