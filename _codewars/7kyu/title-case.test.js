const convertToTitleCase = require("./title-case.js");

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
  ${" this is a nice title "}                    | ${"This Is a Nice Title"}
  ${"this  is a LONG title"}                     | ${"This Is a Long Title"}
  ${"and here is another title with an EXAMPLE"} | ${"And Here Is Another Title with an Example"}
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
//   { input: 1234, expectedResult: 5 },
//   { input: 0, expectedResult: 0 },
//   { input: 4, expectedResult: 1 },
//   { input: 7, expectedResult: 3 },
//   { input: 9, expectedResult: 2 },
//   { input: 10, expectedResult: 2 },
// ]);

describe("title case tests", () => {
  testCases(
    "the title of $input is expected to be $expectedResult",
    ({ input, expectedResult }) => {
      expect(convertToTitleCase(input)).toStrictEqual(expectedResult);
    }
  );
});
