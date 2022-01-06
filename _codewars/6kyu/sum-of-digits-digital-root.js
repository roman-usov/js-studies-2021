"use strict";

const inputInteger = 493193;
console.log(inputInteger.toString().split(""));

// const sumDigitsAndReturnDigitalRoot = function (integer) {
// 	function sumDigitsOfNumber(num) {
// 		const sum = num
// 			.toString()
// 			.split('')
// 			.reduce((total, number) => total + Number(number), 0);
// 		return sum;
// 	}
// 	if (integer.toString().length === 1) return integer;
// 	let summedDigits = sumDigitsOfNumber(integer);
// 	while (summedDigits.toString().length > 1) {
// 		summedDigits = sumDigitsOfNumber(summedDigits);
// 	}
// 	return summedDigits;
// };

const sumDigitsAndReturnDigitalRoot = function (integer) {
  if (integer.toString().length === 1) return integer;
  return sumDigitsAndReturnDigitalRoot(
    integer
      .toString()
      .split("")
      .reduce((total, number) => total + Number(number), 0)
  );
};

console.log(sumDigitsAndReturnDigitalRoot(inputInteger));

const testArr = ["9", "9"];

console.log(eval(testArr.join("+")));

console.log(eval("9 + 1"));
