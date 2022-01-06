const orderWeights = require("./weight-for-weight.js");

const testCases = test.each([
  {
    weights: "56 65 74 100 99 68 86 180 90",
    expectedResult: "100 180 90 56 65 74 68 86 99",
  },
  {
    weights: "103 123 4444 99 2000",
    expectedResult: "2000 103 123 4444 99",
  },
  {
    weights: "2000 10003 1234000 44444444 9999 11 11 22 123",
    expectedResult: "11 11 2000 10003 22 123 1234000 44444444 9999",
  },
]);

describe("return weights sorted by number weight", () => {
  testCases(
    "the expected result for $weights is $expectedResult",
    ({ weights, expectedResult }) => {
      const result = orderWeights(weights);
      console.log(result);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});

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
//   input                                          | expectedResult
//   ${"3+5=x-2"}                                   | ${10}
//   ${"10.4 + 5 = x + 4.67"}                       | ${10.73}
//   ${"    3 +       8 = -7  -          x"}        | ${-18}
//   ${"-    434.42   + 44.3 -   90.4 +     x = 0"} | ${480.52}
//   ${"3 + 5 -  7 = x"}                            | ${1}
//   ${"10-x = 5 +3"}                               | ${2}
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

//const testCases1 = test.each([[[5, 9, 13, -3], 10, [13, -3]]]);
