const productFib = require("./product-of-fib-nums.js");

const testCases = test.each([
  {
    number: 714,
    expectedResult: [21, 34, true],
  },
  {
    number: 800,
    expectedResult: [34, 55, false],
  },
  {
    number: 4895,
    expectedResult: [55, 89, true],
  },
  {
    number: 5895,
    expectedResult: [89, 144, false],
  },
  {
    number: 74049690,
    expectedResult: [6765, 10946, true],
  },
  {
    number: 84049690,
    expectedResult: [10946, 17711, false],
  },
  {
    number: 193864606,
    expectedResult: [10946, 17711, true],
  },
  {
    number: 447577,
    expectedResult: [610, 987, false],
  },
  {
    number: 602070,
    expectedResult: [610, 987, true],
  },
]);

describe("return an array of Fibonacci numbers whose product is equal to the given integer", () => {
  testCases(
    "the expected result for $number is $expectedResult",
    ({ number, expectedResult }) => {
      const result = productFib(number);
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
