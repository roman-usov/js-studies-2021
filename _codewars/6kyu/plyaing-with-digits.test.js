const nToSuccessivePowersEqualToKN = require("./playing-with-digits.js");

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
  { inputA: 89, inputB: 1, expectedResult: 1 },
  { inputA: 92, inputB: 1, expectedResult: -1 },
  { inputA: 695, inputB: 2, expectedResult: 2 },
  { inputA: 46288, inputB: 3, expectedResult: 51 },
]);

describe("nToSuccessivePowersEqualToKN tests", () => {
  testCases(
    "The sum of digits of $inputA raised to the successive powers of $inputB produces the multiplier of $expectedResult",
    ({ inputA, inputB, expectedResult }) => {
      expect(nToSuccessivePowersEqualToKN(inputA, inputB)).toStrictEqual(
        expectedResult
      );
    }
  );
});
