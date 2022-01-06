"use strict";

const inputStr =
  "No offense but,\nYour writing is among the worst I've ever read";

/* const disemvowelString = function (str) {
	const strConvertedToArr = str.split(' ');
	let disemvowelledArr = [];

	function removeVowels(str) {
		const vowels = 'aeiouAEIOU';
		let outputStr = '';
		for (let i = 0; i < str.length; i++) {
			if (vowels.includes(str[i])) {
				continue;
			} else {
				outputStr += str[i];
			}
		}
		return outputStr;
	}

	strConvertedToArr.forEach((el) => disemvowelledArr.push(removeVowels(el)));
	return disemvowelledArr.join(' ');
}; */

const disemvowelString = function (str) {
  return str.replace(/[aeiou]/gi, "");
};

const disemvowelled = disemvowelString(inputStr);
console.log(disemvowelled);

function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  let outputStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      continue;
    } else {
      outputStr += str[i];
    }
  }
  return outputStr;
}

const testStr = "greedy Bastard I'm";

const removedVowels = removeVowels(testStr);
console.log(removedVowels);
