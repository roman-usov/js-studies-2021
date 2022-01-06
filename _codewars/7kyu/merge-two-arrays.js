"use strict";

const strArr = ["a", "b", "c", "d", "e"];
const numArr = [1, 2, 3, 4, 5, 6, 7];

const mergeArrays = function (arr1, arr2) {
  let mergedArray = [];
  let extraElements = [];
  const lengthDiff = Math.abs(arr1.length - arr2.length);

  function gatherMergedArray() {
    for (let i = 0; i < arr1.length; i++) {
      mergedArray.push(arr1[i]);
      mergedArray.push(arr2[i]);
    }
    if (extraElements.length > 0) {
      extraElements.reverse();
      for (let i = 0; i < extraElements.length; i++) {
        mergedArray.push(extraElements[i]);
      }
    }
  }

  if (arr1.length === arr2.length) {
    gatherMergedArray();
    return mergedArray;
  }
  if (arr2.length > arr1.length) {
    for (let i = 1; i <= lengthDiff; i++) {
      extraElements.push(arr2.pop());
    }
    gatherMergedArray();
    return mergedArray;
  }
  if (arr1.length > arr2.length) {
    for (let i = 1; i <= lengthDiff; i++) {
      extraElements.push(arr1.pop());
    }
    gatherMergedArray();
    return mergedArray;
  }
};

//const result = mergeArrays(strArr, numArr);
//console.log(result);

const mergeArraysRefined = function (arr1, arr2) {
  let mergedArray = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (i < arr1.length) mergedArray.push(arr1[i]);
    if (i < arr2.length) mergedArray.push(arr2[i]);
  }
  return mergedArray;
};

const resultRefined = mergeArraysRefined(strArr, numArr);
console.log(resultRefined);
