/* 
Time Convert

Using js language, have have the function TimeConvert(num) take the num
parameter being passed and return the number of hours and minutes the parameter
converts to(ie. if num 62 then the output should be 1:3). Separate the number
of hours and minutes with colon.

*/ 

const TimeConvert = (num)=> {
    let hour = Math.floor(num/60);
    let minute = num%60;
    return `${hour}:${minute}`;
}

console.log(TimeConvert(72))