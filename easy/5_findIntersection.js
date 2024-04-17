/*
["1,3,4,7,13", "1,2,4,13,15"]

Have the function FındIntersection(strArr) read the array of strings stored in strArr
which will contain 2 elements: the first element will represent a list of comma-separeted numbers
sorted in ascending order,
and the second element will also be a list of comma-separated numbers sorted in ascending order.
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr
in stored order. If there is no intersection, return the string false.
*/

const findIntersection = (arr)=>{
    let intersect = []
    const set1 = arr[0].replace(/\s/g, "").split(",")
    const set2 = arr[1].replace(/\s/g, "").split(",")
    set2.forEach(element => {
        if(set1.includes(element)){
            intersect.push(element)
        }
    });

    if(intersect.length != 0){
        return intersect.toString()
    }else{
        return false
    }
    
}

console.log(findIntersection(["1,3,4,7,13", "1,2,4,13,15"]))