"use strict";

const numbers = ["5", "0", 9, 3, 2, 1, "9", 6, 7];

// const sumNumbers = function (array) {
// 	let convertedArray = [];
// 	let sumOfNumbers = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		typeof array[i] === 'string'
// 			? convertedArray.push(Number(array[i]))
// 			: convertedArray.push(array[i]);
// 	}
// 	for (let i = 0; i < convertedArray.length; i++) {
// 		sumOfNumbers += convertedArray[i];
// 	}
// 	console.log(convertedArray);
// 	return sumOfNumbers;
// };

// const test = sumNumbers(numbers);
// console.log(test);

// const initialValue = 0;
// const reducer = function (accumulator, item) {
//   return accumulator + item;
// };

// const reducer = (accumulator, item) => {
//   return accumulator + item;
// };

// const total = numbers.reduce(reducer, initialValue);

const newNumbers = [5, 0, 9, 3, 2, 1, 9, 6, 7];

const total = numbers.reduce(
  (accumulator, item) => accumulator + Number(item),
  0
);

console.log(total);

// const numbers = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

// const sumNumbers = function (array) {
// 	const initialValue = 0;
// 	const reducer = function (accumulator, item) {
// 		return accumulator + Number(item);
// 	};
// 	const sumOfNumbers = array.reduce(reducer, initialValue);
// 	return sumOfNumbers;
// };

// const test = sumNumbers(numbers);
// console.log(test);
