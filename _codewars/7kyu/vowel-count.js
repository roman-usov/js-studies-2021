"use strict";

const inputString = "trash can sail see";
const expectedVowelCount = 5;

const stringIntoArray = inputString.split("");
console.log(stringIntoArray);
console.log(inputString);

// const countVowels = function (str) {
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	let counter = 0;
// 	for (let i = 0; i < vowels.length; i++) {
// 		for (let j = 0; j < str.length; j++) {
// 			if (vowels[i] === str[j]) {
// 				counter += 1;
// 			} else {
// 				continue;
// 			}
// 		}
// 	}
// 	return counter;
// };

const countVowels = function (str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  vowels.forEach((el) => {
    for (let j = 0; j < str.length; j++) {
      if (el === str[j]) {
        counter += 1;
      } else {
        continue;
      }
    }
  });
  return counter;
};

const outputVowelCount = countVowels(inputString);
console.log(outputVowelCount);

const countVowelsNext = function (str) {
  const vowels = "aeiou";
  // const strToArray = str.split('');
  // console.log(strToArray);
  // const arrWithVowelsOnly = strToArray.filter((el) => vowels.includes(el));
  // console.log(arrWithVowelsOnly);
  // console.log(arrWithVowelsOnly.length);
  return str.split("").filter((el) => vowels.includes(el)).length;
};

countVowelsNext(inputString);
