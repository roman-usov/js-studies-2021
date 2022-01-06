"use strict";

const test1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const test2 = [1, 2, 3];
const test3 = [-1, -2, -3];
console.log(...test1);

/*const maximumSubarraySum = function (numbers) {
  if (
    numbers == undefined ||
    numbers.every((el) => el < 0) ||
    numbers.length === 0
  )
    return 0;
  const nums = numbers.slice();
  const sums = [];
  for (let i = 0; i < nums.length; i++) {
    console.log("i iteration: ", i);
    console.log("sums in i iteration:", sums);
    sums.push(nums[i]);
    console.log("sums after pushing i ", sums);
    const sumCalculations = nums.slice(i + 1, nums.length);
    console.log("sumCalculations in i iteration:", sumCalculations);
    for (let j = 0; j < sumCalculations.length; j++) {
      console.log("j iteration: ", j);
      console.log("j element to sum", sumCalculations[j]);
      const nextSum = sums.slice(-1)[0] + sumCalculations[j];
      console.log("pushed sum in j", j, "iteration: ", nextSum);
      if (nextSum < sums.slice(-1)[0]) continue;
      sums.push(nextSum);
      console.log("sums after push in j", j, "iteration", sums);
    }
  }
  return Math.max(...sums);
};*/

// const maximumSubarraySum = function (numbers) {
//   if (
//     numbers == undefined ||
//     numbers.every((el) => el < 0) ||
//     numbers.length === 0
//   )
//     return 0;
//   const nums = numbers.slice();
//   const sums = [];
//   for (let i = 0; i < nums.length; i++) {
//     sums.push(nums[i]);
//     const sumItems = nums.slice(i + 1, nums.length);
//     for (let j = 0; j < sumItems.length; j++) {
//       const nextSum = sums.slice(-1)[0] + sumItems[j];
//       sums.push(nextSum);
//     }
//   }
//   return Math.max(...sums);
// };

// #1 Brute Force
/*const maximumSubarraySum = function (numbers) {
  if (
    numbers == undefined ||
    numbers.every((el) => el < 0) ||
    numbers.length === 0
  )
    return 0;
  const nums = numbers.slice();
  const globalSums = [];
  for (let i = 0; i < nums.length; i++) {
    const localSums = [];
    localSums.push(nums[i]);
    const sumItems = nums.slice(i + 1);
    for (let j = 0; j < sumItems.length; j++) {
      const nextSum = localSums.slice(-1)[0] + sumItems[j];
      localSums.push(nextSum);
    }
    globalSums.push(Math.max(...localSums));
  }
  return Math.max(...globalSums);
};*/

/*const maximumSubarraySum = function (numbers) {
  if (
    numbers == undefined ||
    numbers.every((el) => el < 0) ||
    numbers.length === 0
  )
    return 0;
  const nums = numbers.slice();
  let globalMax = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(
      "global sum start",
      globalMax,
      "at iteration i",
      i,
      "num i",
      nums[i]
    );
    let localSums = [];
    localSums.push(nums[i]);
    const sumItems = nums.slice(i + 1);
    for (let j = 0; j < sumItems.length; j++) {
      console.log("local sums start", localSums, "at iteration j", j);
      const nextSum = localSums[localSums.length - 1] + sumItems[j];
      localSums.push(nextSum);
      console.log("next sum ", nextSum, "at iteration j", j);
      console.log("local sum end", localSums, "at iteration j", j);
    }
    const localMax = Math.max(...localSums);
    console.log(
      "i iteration",
      i,
      "current i element",
      nums[i],
      "localMax",
      localMax
    );
    if (localMax > globalMax) globalMax = localMax;
    console.log(
      "global max end",
      globalMax,
      "at iteration i",
      i,
      "num i",
      nums[i]
    );
  }
  return globalMax;
};*/

//#2
/*const maximumSubarraySum = function (numbers) {
  if (
    numbers == undefined ||
    numbers.every((el) => el < 0) ||
    numbers.length === 0
  )
    return 0;
  const nums = numbers.slice();
  let globalMax = 0;
  for (let i = 0; i < nums.length; i++) {
    let localSums = [];
    localSums.push(nums[i]);
    const sumItems = nums.slice(i + 1);
    for (let j = 0; j < sumItems.length; j++) {
      const nextSum = localSums[localSums.length - 1] + sumItems[j];
      localSums.push(nextSum);
    }
    const localMax = Math.max(...localSums);
    if (localMax > globalMax) globalMax = localMax;
  }
  return globalMax;
};*/

/*const maximumSubarraySum = function (numbers) {
  if (numbers == undefined) return 0;
  const nums = numbers.slice();
  let globalMax = 0;
  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    currentMax =
      nums[i] > currentMax + nums[i] ? nums[i] : currentMax + nums[i];
    if (currentMax > globalMax) globalMax = currentMax;
  }
  return globalMax;
};*/

const maximumSubarraySum = function (numbers) {
  if (numbers == undefined) return 0;
  const nums = [...numbers];
  let localMax = 0;
  let globalMax = 0;
  for (let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);
    if (localMax > globalMax) globalMax = localMax;
  }
  return globalMax;
};

/*const maximumSubarraySum = function (numbers) {
  if (numbers == undefined) return 0;
  const nums = [...numbers];
  let globalMax = nums[0];
  let currentMax = nums[0];
  if (nums.every((el) => el < 0)) {
    for (let i = 0; i < nums.length; i++) {
      currentMax =
        nums[i] + currentMax > nums[i] ? nums[i] + currentMax : nums[i];
      if (currentMax > globalMax) globalMax = currentMax;
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      currentMax = nums[i] + currentMax > 0 ? nums[i] + currentMax : 0;
      if (currentMax > globalMax) globalMax = currentMax;
    }
  }
  return globalMax;
};*/

//maximumSubarraySum(...test1);
//maximumSubarraySum(test1);
// console.log(...test1.slice(-1));
console.log(maximumSubarraySum(test3));
// console.log(4 > test2.slice(-1)[0]);

module.exports = maximumSubarraySum;
