const rgbToHex = require("./rgb-to-hex.js");

const testCases = test.each([
  {
    code1: 255,
    code2: 255,
    code3: 255,
    expectedResult: "FFFFFF",
  },
  {
    code1: 255,
    code2: 255,
    code3: 300,
    expectedResult: "FFFFFF",
  },
  {
    code1: 0,
    code2: 0,
    code3: 0,
    expectedResult: "000000",
  },
  {
    code1: 148,
    code2: 0,
    code3: 211,
    expectedResult: "9400D3",
  },
]);

describe("return hex coe", () => {
  testCases(
    "the expected result for $code1, $code2, $code3 is $expectedResult",
    ({ code1, code2, code3, expectedResult }) => {
      const result = rgbToHex(code1, code2, code3);
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
