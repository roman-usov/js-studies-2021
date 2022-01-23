const reduceDirections = require("./reduce-directions.js");

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
  {
    input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
    expectedResult: ["WEST"],
  },
  { input: ["NORTH", "SOUTH", "EAST", "WEST"], expectedResult: [] },
  {
    input: ["NORTH", "WEST", "SOUTH", "EAST"],
    expectedResult: ["NORTH", "WEST", "SOUTH", "EAST"],
  },
]);

describe("Reduce Directions tests", () => {
  testCases(
    "the optimal directions for $input are $expectedResult",
    ({ input, expectedResult }) => {
      expect(reduceDirections(input)).toStrictEqual(expectedResult);
    }
  );
});
