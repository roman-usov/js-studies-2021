const { selectCalculationForNum, times, seven } = require("./calculate-with-functions.js");
// const { times } = require("./calculate-with-functions.js");
// const divideBy = require("./calculate-with-functions.js");
// const plus = require("./calculate-with-functions.js");
// const minus = require("./calculate-with-functions.js");
// const zero = selectCalculationForNum;
// const one = selectCalculationForNum;
// const two = selectCalculationForNum;
// const three = selectCalculationForNum;
// const four = selectCalculationForNum;
// const five = selectCalculationForNum;
// const six = selectCalculationForNum;
// const seven = selectCalculationForNum;
// const eight = selectCalculationForNum;
// const nine = selectCalculationForNum;

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

const testCases = test.each([{ expectedResult: 35 }, { expectedResult: 3 }]);

describe("calculation tests", () => {
  test("7 * 5", () => {
    const five = selectCalculationForNum(5);
    expect(seven(times(five()))).toStrictEqual(35);
  });
});
