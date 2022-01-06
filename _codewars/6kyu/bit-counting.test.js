const countBitsOfOne = require("./bit-counting.js");

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
  { input: 1234, expectedResult: 5 },
  { input: 0, expectedResult: 0 },
  { input: 4, expectedResult: 1 },
  { input: 7, expectedResult: 3 },
  { input: 9, expectedResult: 2 },
  { input: 10, expectedResult: 2 },
]);

describe("bit counting tests", () => {
  testCases(
    "number of bits equalling to 1 in input $input is $expectedResult",
    ({ input, expectedResult }) => {
      expect(countBitsOfOne(input)).toStrictEqual(expectedResult);
    }
  );
});
