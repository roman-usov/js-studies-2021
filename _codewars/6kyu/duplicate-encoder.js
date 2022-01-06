"use strict";

const inputAndExpectedResults = new Map([
  ["din", "((("],
  ["recede", "()()()"],
  ["Success", ")())())"],
  ["(( @", "))(("],
]);

const testStrings = function (input) {
  const results = [...input.keys()].map((str) => encodeDuplicates(str));
  const testResults = results.forEach((result, i) =>
    console.log(
      `success ${
        result === [...input.values()][i]
      }, actual result ${result}, expected result ${[...input.values()][i]}`
    )
  );
};

// const encodeDuplicates = function (str) {
//   const characters = str.toLowerCase().split("");
//   const occurrences = characters.map((character) =>
//     characters.filter((el) => el === character)
//   );
//   return characters
//     .map((character, i) => (occurrences[i].length > 1 ? ")" : "("))
//     .join("");
// };

const encodeDuplicates = function (str) {
  return str
    .toLowerCase()
    .split("")
    .map((character, i, arr) =>
      arr.indexOf(character) === arr.lastIndexOf(character) ? "(" : ")"
    )
    .join("");
};

// const test = encodeDuplicates("recede");
// console.log(test);

testStrings(inputAndExpectedResults);
