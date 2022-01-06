"use strict";

// const inputA = [];
// const inputB = [1, 3];

// const returnArrayDiff = function (arr1, arr2) {
//   if (arr1.length === 0 || arr2.length === 0) return arr1;
//   let arrDiff = arr1;
//   for (const el of arr2) {
//     arrDiff = arrDiff.filter((val) => val !== el);
//   }
//   return arrDiff;
// };

const returnArrayDiff = function (arr1, arr2) {
  return arr1.filter((val) => !arr2.includes(val));
};

module.exports = returnArrayDiff;

// const result = returnArrayDiff(inputA, inputB);
// console.log(result);
