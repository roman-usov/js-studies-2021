"use strict";

const inputNumber = 56;
const negativeInput = -5;
const zeroInput = 0;

const sumMultiplesOfThreeAndFive = function (number) {
  if (number <= 0) return 0;
  const naturalNumbers = [];
  for (let naturalNum = 1; naturalNum < number; naturalNum++) {
    naturalNumbers.push(naturalNum);
  }
  const divisibleByThree = naturalNumbers.filter((item) => item % 3 === 0);
  const divisibleByFive = naturalNumbers.filter((item) => item % 5 === 0);
  const divisibleByThreeAndFive = [
    ...new Set([...divisibleByThree, ...divisibleByFive]),
  ].sort((a, b) => a - b);
  const sumOfMultiples = divisibleByThreeAndFive.reduce(
    (total, item) => total + item,
    0
  );
  return sumOfMultiples;
};

// const sumMultiplesOfThreeAndFive = function (number) {
// 	if (number <= 0) return 0;
// 	let sumOfMultiples = 0;
// 	for (let naturalNum = 1; naturalNum < number; naturalNum++) {
// 		if (naturalNum % 3 === 0 || naturalNum % 5 === 0)
// 			sumOfMultiples += naturalNum;
// 	}
// 	return sumOfMultiples;
// };

//sumMultiplesOfThreeAndFive(inputNumber);

console.log(sumMultiplesOfThreeAndFive(inputNumber));
