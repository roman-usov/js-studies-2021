"use strict";

//Option 1
const tribonacci = function (signature, n) {
  const tribonacciSequence = signature.slice(0, n);
  while (tribonacciSequence.length < n) {
    // tribonacciSequence.push(
    //   tribonacciSequence.slice(-3).reduce((total, num) => total + num, 0));
    tribonacciSequence[tribonacciSequence.length] = tribonacciSequence
      .slice(-3)
      .reduce((total, num) => total + num, 0);
  }
  return tribonacciSequence;
};

// const tribonacci = function (signature, n) {
//   if (n < signature.length) return signature.slice(0, n);
//   function createTribonacci(sequence, length) {
//     if (length >= n) return sequence;
//     return createTribonacci(
//       [...sequence, sequence.slice(-3).reduce((total, num) => total + num, 0)],
//       ++length
//     );
//   }
//   return createTribonacci(signature, signature.length);
// };

// const tribonacci = function (signature, n) {
//   function createTribonacci(sequence, length) {
//     let tribonacciSequence = sequence.slice(0, n);
//     if (tribonacciSequence.length < n)
//       return createTribonacci(
//         [
//           ...sequence,
//           sequence.slice(-3).reduce((total, num) => total + num, 0),
//         ],
//         ++length
//       );
//     return tribonacciSequence;
//   }
//   return createTribonacci(signature, signature.length);
// };

//Option 2
const tribonacci = function (sequence, n) {
  let tribonacciSequence = sequence.slice(0, n);
  if (tribonacciSequence.length < n)
    return tribonacci(
      [
        ...tribonacciSequence,
        tribonacciSequence.slice(-3).reduce((total, num) => total + num, 0),
      ],
      n
    );
  return tribonacciSequence;
};

const arr = [1, 2, 3];
console.log(arr.slice(0, -3));
console.log(arr.slice(0, -2));
console.log(arr.slice(0, -1));

// console.log([...arr, 5]);
//
// const test = tribonacci([1, 1, 1], 10);
// console.log(test);

module.exports = tribonacci;
