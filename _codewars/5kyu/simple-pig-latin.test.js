const pigIt = require("./simple-pig-latin.js");

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
  input                  | expectedResult
  ${"Pig latin is cool"} | ${"igPay atinlay siay oolcay"}
  ${"Hello world !"}     | ${"elloHay orldway !"}
  ${"Hello world!"}      | ${"elloHay orldway !"}
  ${" !"}                | ${" !"}
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

describe("pig latin tests", () => {
  testCases(
    "The phrase $input in pig latin is $expectedResult",
    ({ input, expectedResult }) => {
      expect(pigIt(input)).toStrictEqual(expectedResult);
    }
  );
});
