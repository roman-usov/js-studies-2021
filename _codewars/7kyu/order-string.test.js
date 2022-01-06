const orderString = require("./order-string.js");

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
//   input                                 | expectedResult
//   ${"is2 Thi1s T4est 3a"}               | ${"Thi1s is2 3a T4est"}
//   ${"4of Fo1r pe6ople g3ood th5e the2"} | ${"Fo1r the2 g3ood 4of th5e pe6ople"}
// `(
//   "difference between arrays in input $inputA and in input $inputB is $expectedResult",
//   ({ inputA, inputB, expectedResult }) => {
//     expect(returnArrayDiff([inputA], [inputB])).toStrictEqual([expectedResult]);
//   }
// );

const testCases = test.each`
  input                                 | expectedResult
  ${"is2 Thi1s T4est 3a"}               | ${"Thi1s is2 3a T4est"}
  ${"4of Fo1r pe6ople g3ood th5e the2"} | ${"Fo1r the2 g3ood 4of th5e pe6ople"}
  ${""}                                 | ${""}
`;
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

// const testCases = test.each([
//   { inputA: [1, 2], inputB: [1, 2], expectedResult: [] },
//   { inputA: [1, 2, 2, 2, 3], inputB: [2], expectedResult: [1, 3] },
// ]);

describe("orderString tests", () => {
  testCases(
    "input $input should be ordered as $expectedResult",
    ({ input, expectedResult }) => {
      expect(orderString(input)).toStrictEqual(expectedResult);
    }
  );
});
