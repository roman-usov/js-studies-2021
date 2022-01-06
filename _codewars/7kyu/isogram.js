"use strict";

const inputStr = ["Dermatoglyphics", "aba", "moOse", ""];

// const checkIfIsogram = function (str) {
// 	if (str.length === 0) return true;
// 	const strToArray = str.toLowerCase().split('');
// 	for (let i = 0; i < strToArray.length; i++) {
// 		if (strToArray.indexOf(strToArray[i]) !== i) return false;
// 	}
// 	return true;
// };

const checkIfIsogram = function (str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    console.log(str.indexOf(str[i], i + 1));
    if (str.indexOf(str[i], i + 1) > i) return false;
  }
  return true;
};

const output = checkIfIsogram(inputStr[3]);
console.log(output);

// const test = '';
// console.log(test.indexOf(test[0], 1));
