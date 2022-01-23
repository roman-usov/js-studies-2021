const noop = () => {};
const errMessage = (err) => `${err.message}`;
const sum = (a, b) => a + b;
const sumWithIndex = (a, b, i) => a + b + i;
const sumWithArrLength = (a, b, _, arr) => a + b + arr.length;

Array.prototype.betterReduce = function (callback, initialValue) {
  // default parameter reacts to undefined!!!

  const arrLength = this.length;

  let startingValue = initialValue;
  let startingIndex = 0;

  if (initialValue === undefined) {
    if (this.length === 0) {
      throw new TypeError("Array is empty and no initial value provided");
    }
    startingValue = this[0];
    startingIndex = 1;
  }

  let result = startingValue;

  for (let i = startingIndex; i < arrLength; i += 1) {
    const currentValue = this[i];

    result = callback(result, currentValue, i, this);
  }
  return result;
};

try {
  errMessage([].betterReduce(noop));
} catch (err) {
  console.assert(
    err.message === "Array is empty and no initial value provided",
    "Should throw an error"
  );
}

console.assert(
  [1].betterReduce(noop) === 1,
  "If an array has one element equalling 1 and no Initial Value has been provided, the result should be 1"
);

console.assert(
  [].betterReduce(noop, 0) === 0,
  "If an array is empty and an Initial Value of 0 has been provided, the result should be 0"
);

console.assert(
  [].betterReduce(noop, 1) === 1,
  "If an array is empty and an Initial Value of 1 has been provided, the result should be 1"
);

console.assert(
  [1].betterReduce(sum, 2) === 3,
  "If an array is not empty and an Initial Value of 2 has been provided, the result should be 3"
);

console.assert(
  [1, 2].betterReduce(sum, 3) === 6,
  "If an array is not empty and an Initial Value of 3 has been provided, the result should be 6"
);

console.assert(
  [2, 3, 4].betterReduce(sum) === 9,
  "If an array is not empty and no Initial Value has been provided, the result should be 9"
);

console.assert(
  [1, 2].betterReduce(sumWithIndex, 3) === 7,
  "If an array is not empty and an Initial Value of 3 has been provided, and the current index is passed to the callback, the result should be 7"
);

console.assert(
  [2, 3, 4].betterReduce(sumWithIndex) === 12,
  "If an array is not empty and no Initial Value has been provided, and the current index is passed to the callback, the result should be 12"
);

console.assert(
  [1, 2].betterReduce(sumWithArrLength, 3) === 10,
  "If an array is not empty and an Initial Value of 3 has been provided, and the array is passed to the callback, the result should be 10"
);

console.assert(
  [2, 3, 4].betterReduce(sumWithArrLength) === 15,
  "If an array is not empty and no Initial Value has been provided, and the array is passed to the callback, the result should be 15"
);

function sumWithAddBeginingOfArr(previous, current, i, arr) {
  arr.unshift(4);

  previous = previous + current;

  return previous;
}

console.assert(
  [1, 2].betterReduce(sumWithAddBeginingOfArr, 0) ===
    [1, 2].reduce(sumWithAddBeginingOfArr, 0),
  "Result should be 2"
);

function sumWithRemoveBeginingOfArr(previous, current, i, arr) {
  console.log(previous, current, i, arr.toString());
  arr.shift();
  console.log(JSON.stringify(arr));
  previous = previous + current;
  console.log(previous);
  return previous;
}

// console.assert(
//   [1, 2].betterReduce(sumWithRemoveBeginingOfArr, 0) ===
//     [1, 2].reduce(sumWithRemoveBeginingOfArr, 0),
//   "Result should be 1"
// );

console.log("sumWithRemoveBeginingOfArr");
[1, 2].betterReduce(sumWithRemoveBeginingOfArr, 0);

console.log("reduce");
[1, 2].reduce(sumWithRemoveBeginingOfArr, 0);

// function sumWithRemoveEndOfArr(previous, current, i, arr) {
//   arr.pop();
//
//   previous = previous + current;
//
//   return previous;
// }
//
// console.assert(
//   [1, 2].betterReduce(sumWithRemoveEndOfArr, 0) ===
//     [1, 2].reduce(sumWithRemoveEndOfArr, 0),
//   "Result should be 1"
// );
//
// function sumWithRemoveMiddleOfArr(previous, current, i, arr) {
//   arr.splice(1, 1);
//
//   previous = previous + current;
//
//   return previous;
// }
//
// console.assert(
//   [1, 2, 3].betterReduce(sumWithRemoveMiddleOfArr, 0) ===
//     [1, 2, 3].reduce(sumWithRemoveMiddleOfArr, 0),
//   "Result should be 4"
// );
//
// function sumWithAddEndOfArr(previous, current, i, arr) {
//   arr.push(4);
//   arr.push(5);
//
//   previous = previous + current;
//
//   return previous;
// }
//
// console.assert(
//   [1, 2, 3].betterReduce(sumWithAddEndOfArr, 0) ===
//     [1, 2, 3].reduce(sumWithAddEndOfArr, 0),
//   "Result should be 6"
// );
//
// function sumWithAddMiddleOfArr(previous, current, i, arr) {
//   arr.splice(1, 0, 5);
//   previous = previous + current;
//   return previous;
// }
//
// console.assert(
//   [1, 2, 3].betterReduce(sumWithAddMiddleOfArr, 0) ===
//     [1, 2, 3].reduce(sumWithAddMiddleOfArr, 0),
//   "Result should be 11"
// );

// console.log(
//   [2, 3, 4].reduce((prev, cur, i, arr) => {
//     console.log(prev, cur, i);
//     return prev + cur + i;
//   })
// );

// console.assert(
//   [1, 2].betterReduce(sumWithArrLength, 3) === 7,
//   "If an array is not empty and an Initial Value of 3 has been provided, and the current index is passed to the callback, the result should be 7"
// );

// Zero evaluates to false
// console.log(0 == false);
