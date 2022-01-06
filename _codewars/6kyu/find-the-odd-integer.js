"use strict";

const inputIntegers1 = [2, 1, 2, 1, -1];

const inputIntegers = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]; //[2, 1, 2, 1, -1, -1, -1]

// const findIntegerRepeatingOddNumberOfTimes = function (inputArr) {
// 	function convertArrToMap(arr) {
// 		const output = new Map();
// 		arr.sort((a, b) => a - b);
// 		console.log(arr);
// 		for (let i = 0; i < arr.length;) {
// 			let currentInteger = arr[0];
// 			let count = 0;
// 			for (let j = 0; j < arr.length; j++) {
// 				if (arr[j] === currentInteger) count++;
// 			}
// 			output.set(currentInteger, count);
// 			arr.splice(0, count);
// 		}
// 		console.log(output);
// 		return output;
// 	}
// 	const integers = convertArrToMap(inputArr);
// 	for (const [integer, count] of integers) {
// 		if (count % 2 !== 0) return integer;
// 	}
// };

// const output = findIntegerRepeatingOddNumberOfTimes(inputIntegers);
// console.log(output);

// const counts = {};
// inputIntegers1.forEach((item) => {
// 	counts[item] = (counts[item] || 0) + 1;
// });

// console.log(counts);

// const testObject = {
// 	1: 4,
// };

// console.log((testObject[1] = testObject[1]));

// const findIntegerRepeatingOddNumberOfTimes = function (inputArr) {
// 	const counts = {};
// 	inputArr.forEach((item) => {
// 		counts[item] = (counts[item] || 0) + 1;
// 	});
// 	for (const [integer, count] of Object.entries(counts)) {
// 		console.log(integer, count);
// 		if (count % 2 !== 0) return Number(integer);
// 	}
// };

// console.log(findIntegerRepeatingOddNumberOfTimes(inputIntegers));

function findOdd(arr) {
  console.log(
    arr.find((item, index) => arr.filter((el) => el == item).length % 2)
  );
}

findOdd(inputIntegers);

const t1 = inputIntegers.filter((item) => item === 5);
const t2 = inputIntegers.filter((item) => item === 3);
console.log(t1);
console.log(t2);
console.log(t1.length % 2);
console.log(t2.length % 2);

// console.log(Object.entries(counts));

// const [int, c] = ['1', 2];
// console.log(int);
// console.log(c);

// for (const [integer, count] of Object.entries(counts)) {
// 	console.log(integer, count);
// 	if (count % 2 !== 0) console.log(integer);
// }

/*
1.
{2: 1}
2.
{1: 1}
3.
{2: 2}
4.
{1: 2}
5.
{-1: 1}
*/

// const testObj = {};

// testObj['2'] = 1;
// console.log(testObj);
// console.log(testObj['2']);

// console.log(int);
// console.log(inp);

//

// const findIntegerRepeatingOddNumberOfTimes = function (arrOfIntegers) {
// 	let output;
// 	for (let i = 0; i < arrOfIntegers.length - 1; i++) {
// 		let count = 1;
// 		for (let j = i + 1; j < arrOfIntegers.length; j++) {
// 			console.log(arrOfIntegers[i], arrOfIntegers[j]);
// 			if (arrOfIntegers[i] === arrOfIntegers[j]) count++;
// 			console.log(count);
// 		}
// 		if (count % 2 !== 0) output = arrOfIntegers[i];
// 	}
// 	return output;
// };

// const findIntegerRepeatingOddNumberOfTimes = function (arrOfIntegers) {
// 	let input = arrOfIntegers;
// 	const integers = new Map();
// 	let output;
// 	for (let i = 0; i < input.length; i++) {
// 		let count = 1;
// 		for (let j = arrOfIntegers.length - 1; j > i; j--) {
// 			console.log(arrOfIntegers[i], arrOfIntegers[j]);
// 			if (arrOfIntegers[i] === arrOfIntegers[j]) count++;
// 			console.log(count);
// 		}
// 		if (count % 2 !== 0) {
// 			output = arrOfIntegers[i];
// 			break;
// 		}
// 	}
// 	return output;
// };

// const findIntegerRepeatingOddNumberOfTimes = function (arrOfIntegers) {
// 	//const integers = new Map();
//   let total;
// 	arrOfIntegers.forEach((item, index) => {
// 		let count = 1;
// 		for (let i = arrOfIntegers - 1; i > index; i-- ) {
//       if (item === arrOfIntegers[i]) count++;
//     }
// 		console.log(count);
// 		if (count % 2 !== 0) total = item;
// 	});

// };

// const output = findIntegerRepeatingOddNumberOfTimes(inputIntegers);
// console.log(output);

// let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// let removed = myFish.splice(3, 1);
// console.log(myFish);
