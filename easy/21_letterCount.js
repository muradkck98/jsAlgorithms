/*
Letter Count 
have the function LetterCount(str) take the str parameter 
being passed and return the first word with the greatest number of repeated letters.

For ex: "Today, is the greatest day ever!" shoul return greatest because it has 2 e's 
(and 2 t's) and it comes before ever which also has 2 e's.

If there are no words with repeating letters return <b>-1<b>.

words will be saretes
*/

const LetterCount = (str) => {
    // 1 harf dışındaki ve boşluk dışındaki tüm karakterlerin silinmesi
    // 2 stringin küçük harfe dönüştürülmesi
    // stringi array haline getir.
    let arrStr = str.replace(/[^a-zA-Z ]/g,"").toLowerCase().split(' ');
    let wordObjects = []

    for (let i = 0; i < arrStr.length; i++){
        let objWord = {};
        let currWord = arrStr[i].split('');
        currWord.forEach(letter => {
            arrStr[i].split('').forEach(char => {
                char in objWord ? objWord[char] += 1 : objWord[char] = 1
            })
        });
        wordObjects.push(objWord)
    }
    
    let maxFrequencies = []

    wordObjects.forEach((object) => {
        maxFrequencies.push(Math.max(...Object.values(object)))
    })

    let maxValue = Math.max(...maxFrequencies);

    return maxValue < 2 ? -1 :
    (arrStr[maxFrequencies.indexOf(maxValue)]
    ? arrStr[maxFrequencies.indexOf(maxValue)]: -1)

}

console.log(LetterCount("Today, is the greatest day ever!"));