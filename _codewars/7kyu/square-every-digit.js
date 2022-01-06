"use strict";

const test = "234524";

console.log(test ** 2);

const inputNumber = 9119;

// const squareDigits = function (num) {
// 	let calcResults = [];
// 	const numAsStr = num.toString();
// 	for (let i = 0; i < numAsStr.length; i++) {
// 		calcResults.push((Number(numAsStr[i]) ** 2).toString());
// 	}
// 	return Number(calcResults.join(''));
// };

const squareDigits = function (num) {
  let calcResults = [];
  const numAsStr = num.toString();
  for (let i = 0; i < numAsStr.length; i++) {
    calcResults.push(numAsStr[i] ** 2);
  }
  return Number(calcResults.join(""));
};

const outputNumber = squareDigits(test);
console.log(outputNumber);
