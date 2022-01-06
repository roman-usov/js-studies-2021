const checkIfTenMinuteWalk = require("./ten-minute-walk.js");

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
//   input   | expectedResult
//   ${1234} | ${5}
//   ${0}    | ${0}
//   ${4}    | ${1}
//   ${7}    | ${3}
//   ${9}    | ${2}
//   ${10}   | ${2}
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

const testCases = test.each([
  { input: ["n", "n", "e", "e", "s", "s", "w", "w"], expectedResult: false },
  { input: ["n", "n", "e", "e", "e", "s", "s", "w"], expectedResult: false },
  {
    input: ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
    expectedResult: true,
  },
  {
    input: ["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"],
    expectedResult: false,
  },
  { input: ["w"], expectedResult: false },
  {
    input: ["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"],
    expectedResult: false,
  },
]);

describe("check if a walk will take ten minutes", () => {
  testCases(
    "a walk with the following directions $input is a 10-minute walk: $expectedResult",
    ({ input, expectedResult }) => {
      expect(checkIfTenMinuteWalk(input)).toStrictEqual(expectedResult);
    }
  );
});
