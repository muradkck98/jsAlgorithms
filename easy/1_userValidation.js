/*
Rules

1.The username is between 4 and 25 characters.
2.It must start with latter
3.It can only contain letters, numbers, and the underscore character.
4.It cannot end with an underschore chracter.

If the username is valid then your program should return the string true
*/

const userValidation = (str) => {
    if(
        str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0,1)) && // str.charAt(0) regular expression
        (/^\w+$/).test(str) && 
        (/[a-zA-A0-9]/).test(str.slice(-1)) // str.charAt(str.length-1)
    ){
        return true
    }else{
        return false
    }
}

console.log(userValidation("u__hello_world123"))

