const decodeMorse = require("./decode-morse.js");

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

const testCases = test.each`
  input                             | expectedResult
  ${"...---..."}                    | ${"SOS"}
  ${".... . -.--   .--- ..- -.. ."} | ${"HEY JUDE"}
  ${".... . -.--"}                  | ${"HEY"}
`;

describe("decodeMorse tests", () => {
  testCases(
    "Input $input should decode to $expectedResult",
    ({ input, expectedResult }) => {
      expect(decodeMorse(input)).toStrictEqual(expectedResult);
    }
  );
});
