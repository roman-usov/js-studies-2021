const anagrams2 = require("./anagrams.js");

const testCases = test.each([
  {
    word: "abba",
    words: ["aabb", "abcd", "bbaa", "dada"],
    expectedResult: ["aabb", "bbaa"],
  },
  {
    word: "racer",
    words: ["crazer", "carer", "racar", "caers", "racer"],
    expectedResult: ["carer", "racer"],
  },
  {
    word: "laser",
    words: ["lazing", "lazy", "lacer"],
    expectedResult: [],
  },
]);

describe("return anagrams", () => {
  testCases(
    "the expected result is $expectedResult",
    ({ word, words, expectedResult }) => {
      const result = anagrams2(word, words);
      console.log(result);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});

// test.each`
//   inputA             | inputB | expectedResult
//   ${(1, 2)}          | ${1}   | ${2}
//   ${(1, 2, 2, 2, 3)} | ${2}   | ${(1, 3)}
// `(
//   "difference between arrays in input $inputA and in input $inputB is $expectedResult",
//   ({ inputA, inputB, expectedResult }) => {
//     expect(returnArrayDiff([inputA], [inputB])).toStrictEqual([expectedResult]);
//   }
// );

// const testCases = test.each`
//   input                                          | expectedResult
//   ${"3+5=x-2"}                                   | ${10}
//   ${"10.4 + 5 = x + 4.67"}                       | ${10.73}
//   ${"    3 +       8 = -7  -          x"}        | ${-18}
//   ${"-    434.42   + 44.3 -   90.4 +     x = 0"} | ${480.52}
//   ${"3 + 5 -  7 = x"}                            | ${1}
//   ${"10-x = 5 +3"}                               | ${2}
// `;

// describe("arrayDiff tests", () => {
//   testCases(
//     "difference between arrays in input $inputA and in input $inputB is $expectedResult",
//     ({ inputA, inputB, expectedResult }) => {
//       expect(returnArrayDiff([inputA], [inputB])).toStrictEqual([
//         expectedResult,
//       ]);
//     }
//   );
// });

//const testCases1 = test.each([[[5, 9, 13, -3], 10, [13, -3]]]);
