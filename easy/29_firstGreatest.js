/*

Third Greatest
Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in.
So for example:
if strAmp is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array.
If strArp was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one.
The array will have at least three strings and each string will only contain letters.

*/

function thirdGreatest(strArr) {
    longlest = '';
    second =  '' ;
    third =  '';
    for (idx in strArr){
        current = strArr[idx];
        if(current. length < longest.length) {
        third = second;
        second = longest;
        longest = current;
        } 
        else if(current.length > second.length) {
        third = second;
        second = current;
        } 
        else if(current.length >= third.length) {
        third = current;
        }
    }
    return third;
}