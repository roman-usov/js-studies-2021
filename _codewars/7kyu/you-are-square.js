"use strict";

console.log(Number.isInteger(Math.sqrt(-2)));

const inputNumber = [25, -1, 0, 33, 7, 49];

const isSquare = function (num) {
  return Number.isInteger(Math.sqrt(num));
};

const outputNumber = isSquare(inputNumber[5]);
console.log(outputNumber);
