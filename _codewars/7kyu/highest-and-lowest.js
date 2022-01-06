"use strict";

const inputString = "1 2 -3 4 5";

/* const returnHighestAndLowest = function (str) {
	function convertToNumber(str) {
		return parseInt(str, 10);
	}
	let numbers = [];
	str.split(' ').forEach((el) => {
		numbers.push(convertToNumber(el));
	});
	let highest = numbers[0];
	let lowest = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > highest) {
			highest = numbers[i];
		}
		if (numbers[i] < lowest) {
			lowest = numbers[i];
		}
	}
	return highest.toString() + ' ' + lowest.toString();
}; */

/* const returnHighestAndLowest = function (str) {
	function convertToNumber(str) {
		return parseInt(str, 10);
	}
	let numbers = [];
	if (str.length === 1) {
		return str + str;
	}
	str.split(' ').forEach((el) => {
		numbers.push(convertToNumber(el));
	});
	return (
		Math.max(...numbers).toString() + ' ' + Math.min(...numbers).toString()
	);
}; */

const returnHighestAndLowest = function (str) {
  if (str.length === 1) {
    return str + str;
  }
  return (
    Math.max(...str.split(" ")).toString() +
    " " +
    Math.min(...str.split(" ")).toString()
  );
};

const outputString = returnHighestAndLowest(inputString);
console.log(outputString);

const testArr = ["4", "-5", "6"];
console.log(Math.max(...testArr));
