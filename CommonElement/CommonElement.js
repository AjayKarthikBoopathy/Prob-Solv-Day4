// Write a function to find the common elements between two arrays.

let array1 = ['a', 'd', 'm', 'x'];
let array2 = ['p', 'y', 'x', 'm'];

let commonArray = [];
function findCommonElements2(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!obj[arr1[i]]) {
            let element = arr1[i];
            obj[element] = element;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) {
            commonArray.push(obj[arr2[j]]);
        }
    }
    if (commonArray.length > 0) {
        return commonArray;
    }
    return "No Common Elements"
}

console.log(findCommonElements2(array1, array2))
