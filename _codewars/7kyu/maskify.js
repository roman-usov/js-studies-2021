"use strict";

const inputStr = "4556364607935616";

// function maskify(str) {
// 	const charsToLeaveUnmasked = 4;
// 	if (str.length <= charsToLeaveUnmasked) return str;
// 	const charsToMask = str.length - charsToLeaveUnmasked;
// 	let maskedStr = '';
// 	let maskedChars = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		maskedChars < charsToMask ? (maskedStr += '#') : (maskedStr += str[i]);
// 		maskedChars++;
// 	}
// 	return maskedStr;
// }

// function maskify(str) {
// 	const charsToLeaveUnmasked = 4;
// 	if (str.length <= charsToLeaveUnmasked) return str;
// 	const charsToReplace = str.length - charsToLeaveUnmasked;
// 	let maskedPart = '';
// 	for (let i = 0; i < charsToReplace; i++) {
// 		maskedPart += '#';
// 	}
// 	return maskedPart + str.slice(charsToReplace);
// }

function maskify(str) {
  if (str.length <= 4) return str;
  return str.slice(0, -4).replace(/./gi, "#") + str.slice(-4);
}

const maskedStr = maskify(inputStr);
console.log(maskedStr);
