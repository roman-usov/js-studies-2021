"use strict";

// const ALPHABET = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12,
//   m: 13,
//   n: 14,
//   o: 15,
//   p: 16,
//   q: 17,
//   r: 18,
//   s: 19,
//   t: 20,
//   u: 21,
//   v: 22,
//   w: 23,
//   x: 24,
//   y: 25,
//   z: 26,
// };

const replaceWithAlphabetPosition = function (str) {
  return str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((el) => el.charCodeAt(0) - 96)
    .join(" ");
};

// const input = "_%]83btz";
// const output = replaceWithAlphabetPosition(input);
// console.log(output);
//
// const test = "atz";
// console.log(test.toLowerCase().charCodeAt());

module.exports = replaceWithAlphabetPosition;
