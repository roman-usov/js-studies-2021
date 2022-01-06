"use strict";

const persistence = function (num) {
  let number = num;
  let counter = 0;
  function multiplyPersistently(n) {
    if (n.toString().length === 1) {
      return counter;
    }
    const digits = n.toString().split("");
    number = digits.map(Number).reduce((product, digit) => {
      return product * digit;
    }, 1);
    counter++;
    multiplyPersistently(number);
  }
  multiplyPersistently(number);
  return counter;
};

/* const persistence = function (num) {
	let counter = 0;
	if (num.toString().length === 1) {
		return counter;
	}
	let number = num;
	while (number.toString().length > 1) {
		const digits = number.toString().split('');
		number = digits.map(Number).reduce((product, digit) => {
			return product * digit;
		}, 1);
		counter++;
	}
	return counter;
}; */

const output = persistence(14);
console.log(output);

// const testNum = 39;

// const digits = testNum.toString().split('');
// console.log(digits);
// let number = digits.reduce((product, digit) => {
// 	return product * Number(digit);
// }, 1);
// console.log(number);

console.log(["3", "4"].map(Number));
