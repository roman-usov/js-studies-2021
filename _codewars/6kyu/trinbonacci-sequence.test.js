const tribonacci = require("./tribonacci-sequence.js");

// test.each([
//   [[1, 2], [1, 2], []],
//   [[1, 2, 2, 2, 3], [2], [1, 3]],
// ])(
//   "difference between arrays in input $inputA and in input $inputB is $expectedResult",
//   (inputA, inputB, expectedResult) => {
//     expect(returnArrayDiff(inputA, inputB)).toStrictEqual(expectedResult);
//   }
// );

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
//   inputA             | inputB      | expectedResult
//   ${(1, "A")}        | ${(1, "A")} | ${""}
//   ${(1, 2, 2, 2, 3)} | ${(2, 5)}   | ${(1, 3)}
// `;
//
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

const testCases = test.each([
  {
    inputA: [1, 1, 1],
    inputB: 10,
    expectedResult: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105],
  },
  {
    inputA: [0, 0, 1],
    inputB: 10,
    expectedResult: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44],
  },
  {
    inputA: [0, 1, 1],
    inputB: 10,
    expectedResult: [0, 1, 1, 2, 4, 7, 13, 24, 44, 81],
  },
  {
    inputA: [1, 0, 0],
    inputB: 10,
    expectedResult: [1, 0, 0, 1, 1, 2, 4, 7, 13, 24],
  },
  {
    inputA: [0, 0, 0],
    inputB: 10,
    expectedResult: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    inputA: [1, 2, 3],
    inputB: 10,
    expectedResult: [1, 2, 3, 6, 11, 20, 37, 68, 125, 230],
  },
  {
    inputA: [3, 2, 1],
    inputB: 10,
    expectedResult: [3, 2, 1, 6, 9, 16, 31, 56, 103, 190],
  },
  {
    inputA: [1, 1, 1],
    inputB: 1,
    expectedResult: [1],
  },
  {
    inputA: [300, 200, 100],
    inputB: 0,
    expectedResult: [],
  },
  {
    inputA: [0.5, 0.5, 0.5],
    inputB: 30,
    expectedResult: [
      0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5,
      600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5,
      144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5,
      10301680.5,
    ],
  },
  {
    inputA: [1, -1, -2],
    inputB: 10,
    expectedResult: [1, -1, -2, -2, -5, -9, -16, -30, -55, -101],
  },
]);

describe("tribonacci sequence tests", () => {
  testCases(
    "the signature of $inputA and the length of $inputB should give the sequence of $expectedResult",
    ({ inputA, inputB, expectedResult }) => {
      expect(tribonacci(inputA, inputB)).toStrictEqual(expectedResult);
    }
  );
});
