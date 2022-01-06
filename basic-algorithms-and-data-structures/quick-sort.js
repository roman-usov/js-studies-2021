"use strict";

////// Quick Sort (Hoare's Algorithm)
//const quickSortArr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
const quickSortArr = [1, 4, 3, 5, 8, 12, 9, 7, 10];
let count = 0;
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivotEl = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (i === pivotIndex) continue;
    if (arr[i] < pivotEl) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), pivotEl, ...quickSort(greater)];
}

const result = quickSort(quickSortArr);

console.log(quickSort(quickSortArr));
console.log(count);
