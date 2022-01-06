"use strict";

const inputAndOutput = new Map([
  [[], "no one likes this"],
  [["Peter"], "Peter likes this"],
  [["Jacob", "Alex"], "Jacob and Alex like this"],
  [["Max", "John", "Mark"], "Max, John and Mark like this"],
  [["Alex", "Jacob", "Mark", "Max"], "Alex, Jacob and 2 others like this"],
]);

console.log(inputAndOutput);
console.log([...inputAndOutput.keys()]);

const outputArrOfStrings = [];

// const likes = function (arr) {
// 	switch (arr.length) {
// 		case 0:
// 			return `no one likes this`;
// 			break;
// 		case 1:
// 			return `${arr[0]} likes this`;
// 			break;
// 		case 2:
// 			return `${arr[0]} and ${arr[1]} like this`;
// 			break;
// 		case 3:
// 			return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
// 			break;
// 		default:
// 			const [name1, name2, ...others] = arr;
// 			return `${name1}, ${name2} and ${others.length} others like this`;
// 	}
// };

// const likes = function (arr) {
// 	if (arr.length === 0) return `no one likes this`;
// 	if (arr.length === 1) return `${arr[0]} likes this`;
// 	if (arr.length === 2 || arr.length === 3) {
// 		const names = arr.join(', ');
// 		return `${names.slice(0, names.lastIndexOf(','))} and ${names.slice(
// 			names.lastIndexOf(',') + 2 - names.length
// 		)} like this`;
// 	}
// 	if (arr.length > 3) {
// 		const [name1, name2, ...others] = arr;
// 		return `${name1}, ${name2} and ${others.length} others like this`;
// 	}
// };

const likes = function (arr) {
  if (arr.length === 0) return `no one likes this`;
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2 || arr.length === 3) {
    const names = arr.join(", ");
    return `${names.replace(/\,(?=[^,]*$)/, " and")} like this`;
  }
  if (arr.length > 3) {
    const [name1, name2, ...others] = arr;
    return `${name1}, ${name2} and ${others.length} others like this`;
  }
};

console.log(likes(["Max", "John", "Mark"]));

const inputKeys = [...inputAndOutput.keys()];

inputKeys.forEach((el) => outputArrOfStrings.push(likes(el)));

const testResults = outputArrOfStrings.map(
  (el, index) => [...inputAndOutput.values()][index] === el
);
console.log(testResults);
