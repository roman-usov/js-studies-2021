"use strict";

const inputString = "RqaEzty";

const mumbleString = function (str) {
  const strToArray = str.split("");
  let blockArray = [];

  function createBlock(char, number) {
    let block = "";
    for (let i = 1; i <= number; i++) {
      block += char;
    }
    return capitalizeString(block);
  }

  function capitalizeString(str) {
    const lowerCasedStr = str.toLowerCase();
    return str[0].toUpperCase() + lowerCasedStr.slice(1);
  }

  strToArray.forEach((el, index) => {
    const charInBlock = index + 1;
    blockArray.push(createBlock(el, charInBlock));
  });

  return blockArray.join("-");
};

const mumbled = mumbleString(inputString);
console.log(mumbled);

/* let testStr = 'aBC';

function capitalizeString(str) {
	const lowerCasedStr = str.toLowerCase();
	// const firstLetterInUpperCase = str[0].toUpperCase();
	// const remainingStr = lowerCasedStr.splice(1);
	return str[0].toUpperCase() + lowerCasedStr.slice(1);
}

function createBlock(char, number) {
	let block = '';
	for (let i = 1; i <= number; i++) {
		block += char;
	}
	return capitalizeString(block);
}

console.log(capitalizeString(testStr));

const testChar = 'c';
const numOfTimes = 5;

console.log(createBlock(testChar, numOfTimes)); */
