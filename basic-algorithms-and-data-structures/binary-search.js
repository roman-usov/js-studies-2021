"use strict";

////// Binary Search

const binaryArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//let count = 0;
function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  while (start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      return middle;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

const binaryRecursive = function (arr, nextArr, item) {
  if (nextArr.length === 0) return -1;
  const middle = Math.floor(nextArr.length / 2);
  if (nextArr[middle] === item) return arr.indexOf(nextArr[middle]);
  const nextArray =
    item < nextArr[middle]
      ? nextArr.slice(0, middle)
      : nextArr.slice(middle + 1);
  return binaryRecursive(arr, nextArray, item);
};

const binaryRecursive2 = function (arr, item, start, end) {
  if (start > end) return -1;
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === item) return middle;
  return item < arr[middle]
    ? binaryRecursive2(arr, item, start, middle - 1)
    : binaryRecursive2(arr, item, middle + 1, end);
};

const result = binaryRecursive2(binaryArr, 6, 0, binaryArr.length);
console.log(result);

/*
item = 0

Iteration 1
middle = 6
arr[middle] = 7
item < arr[middle]
end = middle - 1 = 5

start <= end true

Iteration 2
middle = 2
arr[middle] = 3
item < arr[middle]
end = middle - 1 = 1

start <= end true

Iteration 3
middle = 0
arr[middle] = 1
item < arr[middle]
end = middle - 1;

start <= end false
*/

/*
item = 6

Iteration 1
middle = 6
arr[middle] = 7
item < arr[middle] true
end = middle - 1 = 5

start <= end true

Iteration 2
middle = 2
arr[middle] = 3
item < arr[middle] false
start = middle + 1 = 3

start <= end true

Iteration 3
middle = 4
arr[middle] = 5
item < arr[middle] false
start = middle + 1 = 5;

start <= end true
middle = 5
arr[middle] = 6
*/

// console.log(binarySearch(binaryArr, 6, 0, binaryArr.length));
// console.log(`count =`, count);
