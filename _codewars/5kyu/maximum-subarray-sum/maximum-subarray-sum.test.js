const maximumSubarraySum = require("./maximum-subarray-sum.js");

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

const testCases = test.each([
  { input: [-1, -2], expectedResult: 0 },
  { input: [1, 2, 2, 2, 3], expectedResult: 10 },
  { input: undefined, expectedResult: 0 },
  { input: [], expectedResult: 0 },
  { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expectedResult: 6 },
]);

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

describe("maximumSubarraySum tests", () => {
  testCases(
    "input $input produces the maximum subarray sum of $expectedResult",
    ({ input, expectedResult }) => {
      expect(maximumSubarraySum(input)).toStrictEqual(expectedResult);
    }
  );
});
