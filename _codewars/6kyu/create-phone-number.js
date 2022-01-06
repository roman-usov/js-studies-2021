"use strict";

// const createPhoneNumber = function (numbers) {
//   const part1 = `(${numbers.filter((number, i) => i < 3).join("")}) `;
//   const part2 = `${numbers.filter((number, i) => i > 2 && i < 6).join("")}-`;
//   const part3 = `${numbers.filter((number, i) => i > 5).join("")}`;
//   return part1 + part2 + part3;
// };

// const createPhoneNumber = function (numbers) {
//   return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
// };

const createPhoneNumber = function (numbers) {
  numbers = numbers.join("");
  return `(${numbers.substring(0, 3)}) ${numbers.substring(
    3,
    6
  )}-${numbers.substring(6)}`;
};

const result = createPhoneNumber([9, 8, 5, 7, 8, 9, 8, 7, 8, 7]);
console.log(result);

module.exports = createPhoneNumber;
