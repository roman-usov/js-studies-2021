"use strict";

////// Selection Sort

const selectionArr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
//let count = 0;
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

////// Bubble Sort

const bubbleArr = [3, 1, 5, 4];
//let count = 0;
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      count++;
    }
  }
  return arr;
}

console.log(bubbleSort(bubbleArr));
console.log(count);
