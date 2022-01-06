"use strict";

const inputStrings = new Map([
  ["a", 0],
  ["1", 0],
  ["abcde", 0],
  ["aabbcde", 2],
  ["aabBcde", 2],
  ["indivisibility", 1],
  ["Indivisibilities", 2],
  ["aA11", 2],
  ["ABBA", 2],
]);

function testDuplicates(arrOfStr) {
  let count = [];
  arrOfStr.forEach((string) => count.push(returnDuplicateCount(string)));
  count.forEach((el, index) =>
    console.log([...inputStrings.values()][index] === el, count[index])
  );
}

// Option 1 - use Array.Filter() method to get duplicated values (here we just get information about which values are duplicated but not all duplicated values as they are in the input array) and a Set to get and count the number of duplicate occurrences

// const returnDuplicateCount = function (str) {
// 	const splitString = str.toLowerCase().split('');
// 	return new Set(
// 		splitString.filter(
// 			(el, index) => splitString.indexOf(el, index + 1) > index
// 		)
// 	).size;
// };

// Option 2 - use the For loop and the Rest Pattern to capture all duplicated values from the input array in a new array)

// const returnDuplicateCount = function (str) {
// 	const splitString = str.toLowerCase().split('');
// 	const duplicatedCharacters = [];
// 	for (let i = 0; i < splitString.length; i = 0) {
// 		const [curEl, ...others] = splitString;
// 		if (others.includes(curEl) || duplicatedCharacters.includes(curEl))
// 			duplicatedCharacters.push(curEl);
// 		splitString.shift(curEl);
// 	}
// 	return new Set(duplicatedCharacters).size;
// };

const returnDuplicateCount = function (str) {
  return str
    .toLowerCase()
    .split("")
    .filter(
      (el, index, arr) =>
        arr.indexOf(el) !== index && arr.lastIndexOf(el) === index
    ).length;
};

// returnDuplicateCount('aabebcdee');
//console.log(returnDuplicateCount('aabebcdee'));

testDuplicates([...inputStrings.keys()]);

// const test = ['a', 'a', 'b', 'a', 'b', 'c'];

// const arr = [];

// for (const [i, el] of test.entries()) {
// 	if (test.indexOf(el, i + 1) > i) {
// 		arr.push(el);
// 		console.log(i, el, arr);
// 	}
// }
// console.log(arr);
