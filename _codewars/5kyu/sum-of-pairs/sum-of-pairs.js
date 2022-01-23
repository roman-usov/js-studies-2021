"use strict";
/*

2 - 3
8 - 4

i < currentResult[1] ? currentResult = [3, 4] : currentResult = currentResult;
currentResult = [1, 5];
{
  5: true
}

*/

//const numbers = [11, 3, 4, 7, 5, 4, 3, 5, 7];
const numbers = [11, 7, 4, 3, 5, 4, 7, 5];
const sum = 10;

// const sumOfPairs = function (arr, sum) {
//   //A map that will be caching numbers that have already been checked.
//   const cache = new Map();
//
//   //A map that will be storing the indexes of the numbers, whose sum is equal to the given sum.
//   //The map will be updated if a pair of numbers that are closer to the start of the array has been found.
//   const pairIndexes = new Map();
//
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`iteration ${i}`);
//     let j = i;
//     //Exclude a number greater than or equal to the given sum or a numbers that has already been cached.
//     if (arr[i] > sum || cache.has(arr[i])) {
//       console.log(`${arr[i]} is not a valid number or is already in cache`);
//       continue;
//     }
//
//     //Determine a match that's needed for the current number to get the given sum
//     const neededMatch = sum - arr[i];
//     console.log(`neededMatch: ${neededMatch}`);
//     let foundMatchIndex;
//
//     //Find the index of the first number matching the neededMatch after the current index
//
//     if (
//       i === arr.length - 1 &&
//       pairIndexes.size === 0 &&
//       arr.includes(neededMatch)
//     ) {
//       i = arr.indexOf(neededMatch);
//       foundMatchIndex = arr.indexOf(arr.length - 1);
//     } else {
//       foundMatchIndex = arr.findIndex(
//         (el, index) => el === neededMatch && index > i
//       );
//     }
//
//
//     //const foundMatch = arr.find((el, index) => el === neededMatch && index > i);
//     //console.log(`foundMatch: ${foundMatch}`);
//
//     //Cache the current number
//     foundMatchIndex !== -1 ? cache.set(arr[i], true) : cache.set(arr[i], false);
//     console.log(`current cache: `, cache);
//     console.log(`foundMatchIndex: ${foundMatchIndex}`);
//
//     if (pairIndexes.size === 0 && foundMatchIndex !== -1) {
//       pairIndexes.set("index1", i);
//       pairIndexes.set("index2", foundMatchIndex);
//     } else if (
//       foundMatchIndex !== -1 &&
//       foundMatchIndex < pairIndexes.get("index2")
//     ) {
//       pairIndexes.set("index1", i);
//       pairIndexes.set("index2", foundMatchIndex);
//     }
//     console.log(`pairIndexes after iteration ${i}`, pairIndexes);
//   }
//   console.log(`pair:`, [
//     arr[pairIndexes.get("index1")],
//     arr[pairIndexes.get("index2")],
//   ]);
//
//   return pairIndexes.size !== 0
//     ? [arr[pairIndexes.get("index1")], arr[pairIndexes.get("index2")]]
//     : undefined;
// };

// const sumOfPairs = function (arr, sum) {
//   //A map that will be caching numbers that have already been checked.
//   const cache = new Map();
//
//   //A map that will be storing the indexes of the numbers, whose sum is equal to the given sum.
//   //The map will be updated if a pair of numbers that are closer to the start of the array has been found.
//   const pairIndexes = new Map();
//
//   for (let i = 0; i < arr.length; i++) {
//     //console.log(`============= iteration ${i}`);
//
//     //Introduce j to handle back-search cases.
//     let j = i;
//     //console.log(`current number`, arr[j]);
//
//     //Introduce foundMatchIndex that will hold the index of the found match for the current number.
//     let foundMatchIndex;
//
//     //Exclude a number that has already been cached.
//     if (cache.has(arr[j])) {
//       //console.log(`${arr[j]} is already in cache`);
//       continue;
//     }
//
//     //Determine a match that's needed for the current number to get the given sum.
//     const neededMatch = sum - arr[j];
//     //console.log(`neededMatch: ${neededMatch}`);
//
//     //Find the index of the first number matching the neededMatch after the current index
//
//     if (cache.has(neededMatch)) {
//       //Look back to find a match there, if there's, no need for the forward search.
//       j = arr.indexOf(neededMatch);
//       //console.log(`j when neededMatch found in cache`, j);
//       foundMatchIndex = i;
//       //console.log(`foundMatchIndex when neededMatch found in cache`, j);
//     } else {
//       //If no match in the cache, proceed to forward search
//       foundMatchIndex = arr.findIndex(
//         (el, index) => el === neededMatch && index > j
//       );
//     }
//
//     //Cache the current number
//     foundMatchIndex !== -1 ? cache.set(arr[j], true) : cache.set(arr[j], false);
//     //console.log(`current cache: `, cache);
//     //console.log(`foundMatchIndex: ${foundMatchIndex}`);
//
//     if (pairIndexes.size === 0 && foundMatchIndex !== -1) {
//       pairIndexes.set("index1", j);
//       pairIndexes.set("index2", foundMatchIndex);
//     } else if (
//       foundMatchIndex !== -1 &&
//       foundMatchIndex < pairIndexes.get("index2")
//     ) {
//       pairIndexes.set("index1", j);
//       pairIndexes.set("index2", foundMatchIndex);
//     }
//     //console.log(`pairIndexes after iteration ${i}`, pairIndexes);
//   }
//   // console.log(`pair:`, [
//   //   arr[pairIndexes.get("index1")],
//   //   arr[pairIndexes.get("index2")],
//   // ]);
//
//   return pairIndexes.size !== 0
//     ? [arr[pairIndexes.get("index1")], arr[pairIndexes.get("index2")]]
//     : undefined;
// };

/*const sumOfPairs = function (arr, sum) {
  //A map that will be caching numbers that have already been checked.
  const cache = new Map();

  //A map that will be storing the indexes of the numbers, whose sum is equal to the given sum.
  //The map will be updated if a pair of numbers that are closer to the start of the array has been found.
  const pairIndexes = new Map();

  for (let i = 0; i < arr.length; i++) {
    //Introduce j to handle back-search cases.
    let j = i;

    //Introduce foundMatchIndex that will hold the index of the found match for the current number.
    let foundMatchIndex;

    //Exclude a number that has already been cached.
    if (cache.has(arr[j])) {
      continue;
    }

    //Determine a match that's needed for the current number to get the given sum.
    const neededMatch = sum - arr[j];

    //Look at the cache to find a match there, if there's, no need for the forward search, as the pair will be closer to the start.
    if (cache.has(neededMatch)) {
      j = arr.indexOf(neededMatch);
      foundMatchIndex = i;
      //If no match in the cache, proceed to forward search
    } else {
      foundMatchIndex = arr.findIndex(
        (el, index) => el === neededMatch && index > j
      );
    }

    //Cache the current number
    foundMatchIndex !== -1 ? cache.set(arr[j], true) : cache.set(arr[j], false);

    //Update the pairIndexes map if a better pair has been found
    if (
      (pairIndexes.size === 0 && foundMatchIndex !== -1) ||
      (foundMatchIndex !== -1 && foundMatchIndex < pairIndexes.get("index2"))
    ) {
      pairIndexes.set("index1", j);
      pairIndexes.set("index2", foundMatchIndex);
    }
  }

  return pairIndexes.size !== 0
    ? [arr[pairIndexes.get("index1")], arr[pairIndexes.get("index2")]]
    : undefined;
};*/

const sumOfPairs = function (arr, sum) {
  const cache = new Set();
  for (const num of arr) {
    const neededMatch = sum - num;
    if (cache.has(neededMatch)) return [neededMatch, num];
    cache.add(num);
  }
  return undefined;
};

// const sumOfPairs = function (numbers, sum) {
//   const checked = new Set();
//   for (const number of numbers) {
//     if (checked.has(sum - number)) return [sum - number, number];
//     checked.add(number);
//   }
//   return undefined;
// };

// console.log(sumOfPairs(numbers, sum));
// console.log(sumOfPairs([11, 3, 7, 5], 10));
// console.log(sumOfPairs([4, 3, 2, 3, 4], 6));
// console.log(sumOfPairs([0, 0, -2, 3], 2));
console.log(sumOfPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(sumOfPairs([0, 2, 0], 0));
//console.log(sumOfPairs([5, 9, 13, -3], 10));
// console.log(sumOfPairs([1, -2, 3, -6, 1], -6));
//console.log(sumOfPairs([1, -2, 3, 0, -6, 1], -6));

module.exports = sumOfPairs;
