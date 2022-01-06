const sumOfPairs = require("./sum-of-pairs.js");

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

const testCases1 = test.each([[[5, 9, 13, -3], 10, [13, -3]]]);

const testCases = test.each([
  {
    numbers: [11, 3, 7, 5],
    sum: 10,
    expectedResult: [3, 7],
  },
  {
    numbers: [4, 3, 2, 3, 4],
    sum: 6,
    expectedResult: [4, 2],
  },
  {
    numbers: [0, 0, -2, 3],
    sum: 2,
    expectedResult: undefined,
  },
  {
    numbers: [10, 5, 2, 3, 7, 5],
    sum: 10,
    expectedResult: [3, 7],
  },
  {
    numbers: [1, 4, 8, 7, 3, 15],
    sum: 8,
    expectedResult: [1, 7],
  },
  {
    numbers: [1, -2, 3, 0, -6, 1],
    sum: -6,
    expectedResult: [0, -6],
  },
  {
    numbers: [1, -2, 3, -6, 1],
    sum: -6,
    expectedResult: undefined,
  },
  {
    numbers: [20, -13, 40],
    sum: -7,
    expectedResult: undefined,
  },
  {
    numbers: [1, 2, 3, 4, 1, 0],
    sum: 2,
    expectedResult: [1, 1],
  },
  {
    numbers: [10, 5, 2, 3, 7, 5],
    sum: 10,
    expectedResult: [3, 7],
  },
  {
    numbers: [4, -2, 3, 3, 4],
    sum: 8,
    expectedResult: [4, 4],
  },
  {
    numbers: [0, 2, 0],
    sum: 0,
    expectedResult: [0, 0],
  },
  {
    numbers: [5, 9, 13, -3],
    sum: 10,
    expectedResult: [13, -3],
  },
]);

describe("find a pair of integers that provide a given sum", () => {
  testCases(
    "the expected result is $expectedResult",
    ({ numbers, sum, expectedResult }) => {
      const result = sumOfPairs(numbers, sum);
      console.log(result);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
