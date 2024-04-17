/*
WordCount
Using the js language, have the function WordCount(str)
take the str string parameter being passed and return the number
of words the string contains
(ie. "Never eat shredded wheat" would return 4).
Words will be seprated by single spaces.
*/

const wordCout = (str) => {
    const cout = str.trim().split(" ").length
    return cout
}

console.log(wordCout(' Never eat shredded wheat'))