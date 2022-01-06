const evalEq = require("./no-return.js");

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

const testCases = test.each`
  input                                          | expectedResult
  ${"3+5=x-2"}                                   | ${10}
  ${"10.4 + 5 = x + 4.67"}                       | ${10.73}
  ${"    3 +       8 = -7  -          x"}        | ${-18}
  ${"-    434.42   + 44.3 -   90.4 +     x = 0"} | ${480.52}
  ${"3 + 5 -  7 = x"}                            | ${1}
  ${"10-x = 5 +3"}                               | ${2}
`;

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
//   {
//     input: "3+5=x-2",
//     expectedResult: 10,
//   },
//   { input: "10.4 + 5 = x + 4.67", expectedResult: 10.73 },
//   {
//     input: "    3 +       8 = -7  -          x",
//     expectedResult: -18,
//   },
//   {
//     input: "-    434.42   + 44.3 -   90.4 +     x = 0",
//     expectedResult: 480.52,
//   },
//   {
//     input: "3 + 5 -  7 = x",
//     expectedResult: 1,
//   },
//   {
//     input: "10-x = 5 +3",
//     expectedResult: -2,
//   },
// ]);

describe("solve a simple linear equation", () => {
  testCases(
    "the solution for the $input equation is $expectedResult",
    ({ input, expectedResult }) => {
      expect(evalEq(input)).toStrictEqual(expectedResult);
    }
  );
});
