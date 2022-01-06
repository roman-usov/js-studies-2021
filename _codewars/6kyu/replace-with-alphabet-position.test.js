const replaceWithAlphabetPosition = require("./replace-with-alphabet-position.js");

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
  input                                    | expectedResult
  ${"The sunset sets at twelve o' clock."} | ${"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"}
  ${"The narwhal bacons at midnight."}     | ${"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"}
  ${";nb5fmm/"}                            | ${"14 2 6 13 13"}
  ${"%m;02dqr"}                            | ${"13 4 17 18"}
  ${"_%]83btz"}                            | ${"2 20 26"}
  ${"n]yl*75c"}                            | ${"14 25 12 3"}
  ${"<tb!)39("}                            | ${"20 2"}
  ${"y|d[q8_d"}                            | ${"25 4 17 4"}
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
//   { inputA: [1, 2], inputB: [1, 2], expectedResult: [] },
//   { inputA: [1, 2, 2, 2, 3], inputB: [2], expectedResult: [1, 3] },
// ]);

describe("tests for replacing letters with their alphabet positions", () => {
  testCases(
    "Input $input corresponds to $expectedResult",
    ({ input, expectedResult }) => {
      expect(replaceWithAlphabetPosition(input)).toStrictEqual(expectedResult);
    }
  );
});
