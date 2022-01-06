"use strict";

// const orderString = function (words) {
//   return words
//     .trim()
//     .split(" ")
//     .sort((a, b) => a.replace(/[^0-9]/g, "") - b.replace(/[^0-9]/g, ""))
//     .join(" ");
// };

const orderString = function (words) {
  return words
    .trim()
    .split(" ")
    .sort((a, b) => a.match(/\d/g) - b.match(/[0-9]/g))
    .join(" ");
};

// const output = orderString("");
// console.log(output);
//
// const arr = ["is2", "thi1s", "t4est", "3a"];
// console.log("is2".replace(/[a-z]/gi, ""));

const testVal1 = "is2".match(/\d/g);
const testVal2 = "thi1s".match(/\d/g);
console.log(testVal1);
console.log(testVal2);
console.log(testVal1 - testVal2);

console.log(parseInt("1111", 2));

module.exports = orderString;
