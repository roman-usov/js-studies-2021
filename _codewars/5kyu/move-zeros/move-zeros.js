"use strict";

const input = [false, "0", 1, 0, 1, 2, 0, 1, 3, "a"];
const input2 = [
  "a",
  "b",
  null,
  "c",
  "d",
  1,
  1,
  3,
  1,
  9,
  {},
  9,
  0,
  0,
  0,
  false,
  0,
  0,
  [],
  0,
  0,
  0,
  0,
  0,
];

const moveZeros = function (arr) {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
};

const result = moveZeros(input2);
console.log(result);
console.log(0 === false);
