"use strict";

////// Linear Search

const linearArr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
// let count = 0;
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === item) return i;
  }
  return null;
}

console.log(linearSearch(linearArr, 7));
console.log(`count =`, count);
