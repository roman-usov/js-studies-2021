"use strict";

// const concatArr = function (prevValue, currValue) {
//   console.log(`prevValue: ${prevValue}`);
//   console.log(`currValue: ${currValue}`);
//   return prevValue.concat(currValue);
//};

/*const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((previousValue, currentValue) => previousValue.concat(currentValue));*/

// const arr = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

const arr = [1, 2, 3];
// const reducedArrAcc = arr.reduceRight((acc, val) => {
//   console.log(`acc: ${acc}`);
//   console.log(`val: ${val}`);
//   console.log(`acc - val: ${acc - val}`);
//   return acc - val;
// }, 0);
const reducedArrVal = arr.reduceRight((acc, val) => {
  console.log(`val: ${val}`);
  console.log(`acc: ${acc}`);
  console.log(`val - acc: ${val - acc}`);
  return val - acc;
}, 0);

// console.log(reducedArrAcc);
console.log(reducedArrVal);
