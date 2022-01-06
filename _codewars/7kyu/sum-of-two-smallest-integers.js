"use strict";

const inputArray = [19, 5, 42, 2, 77];

// const sumTwoSmallestIntegers = function (numbers) {
// 	let sum = 0;
// 	let min;
// 	for (let i = 0; i < 2; i++) {
// 		min = Math.min(...numbers);
// 		numbers.splice(numbers.indexOf(min), 1);
// 		sum += min;
// 	}
// 	return sum;
// };

const sumTwoSmallestIntegers = function (numbers) {
  const [a, b] = numbers.sort((a, b) => a - b);
  console.log(numbers);
  return a + b;
};

const outputSum = sumTwoSmallestIntegers(inputArray);
console.log(outputSum);
