"use strict";

//option 1

// const countBitsOfOne = function (integer) {
//   return integer
//     .toString(2)
//     .split("")
//     .filter((el) => Number(el) === 1).length;
// };

//option 2

// const countBitsOfOne = function (integer) {
//   return integer.toString(2).replace(/0/g, "").length;
// };

//option 3

const countBitsOfOne = function (integer) {
  const bits = integer.toString(2).match(/1/g);
  return bits == null ? 0 : bits.length;
};

const bits = countBitsOfOne(1234);
console.log(bits);

module.exports = countBitsOfOne;
