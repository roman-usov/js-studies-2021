const createPhoneNumber = require("./create-phone-number.js");

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
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], expectedResult: "(123) 456-7890" },
  { input: [9, 8, 5, 7, 8, 9, 8, 7, 8, 7], expectedResult: "(985) 789-8787" },
]);

describe("createPhoneNumber tests", () => {
  testCases(
    "input $input produces a phone number of $expectedResult",
    ({ input, expectedResult }) => {
      expect(createPhoneNumber(input)).toStrictEqual(expectedResult);
    }
  );
});
