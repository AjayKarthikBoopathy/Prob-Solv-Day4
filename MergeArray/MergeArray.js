// Write a function to merge two sorted arrays into a single sorted array.

let array1 = [2,14,26,38];
let array2 = [7,9,18,20,30,40];

let mergedArray = [...array1, ...array2];

console.log(mergedArray.sort(function(a, b){return a-b}));
