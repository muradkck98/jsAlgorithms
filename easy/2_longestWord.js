/*
longest word
-Using the javascript language, have the function longestword(sen)
take the sen parameter being passed and return the largest word in the string.
-If there are two or more words that are the same length, return the first word from the string with that lenght.
- Ignore punctuation and assume sen will not be empty
*/


const longestWord=(sen)=>{
    const arr = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

    arr.sort((a, b)=> {return b.length - a.length})



    return arr[0]
}

console.log(longestWord("fun&!! time"))