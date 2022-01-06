"use strict";

// const inputString = 'testing';

// const getMiddleCharacter = function (str) {
// 	function isEven(num) {
// 		return !(num % 2) ? true : false;
// 	}
// 	let output = '';
// 	if (isEven(str.length)) {
// 		output += str[str.length / 2 - 1] + str[str.length / 2];
// 	} else {
// 		output += str[Math.trunc(str.length / 2)];
// 	}
// 	console.log(output);
// 	return output;
// };

// getMiddleCharacter(inputString);

// function isEven(num) {
// 	return !(num % 2) ? true : false;
// }

// const test = isEven(9);
// console.log(test);

const test2 = "press";

// console.log(test2[test2.length / 2 + 1]);
// console.log(test2.slice((test2.length - 1) / 2, test2.length / 2 + 1));

function getMiddle(str) {
  console.log((str.length - 1) / 2);
  console.log(str.length / 2 + 1);
  console.log(str.slice(str.length / 2 + 1));
  return str.slice((str.length - 1) / 2, str.length / 2 + 1);
}

console.log(getMiddle(test2));
