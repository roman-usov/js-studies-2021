import { smallestDivisor } from "../smallestDivisor.js";

console.log(smallestDivisor);

/* test("smallestDivisor", () => {
  expect(smallestDivisor(1)).toBe(1);
  expect(smallestDivisor(3)).toBe(3);
  expect(smallestDivisor(4)).toBe(2);
  expect(smallestDivisor(8)).toBe(2);
  expect(smallestDivisor(9)).toBe(3);
  expect(smallestDivisor(17)).toBe(17);
  expect(smallestDivisor(15)).toBe(3);
  expect(smallestDivisor(121)).toBe(11);
}); */

const testCases = test.each([
  {
    num: 1,
    expectedResult: 1,
  },
  {
    num: 3,
    expectedResult: 3,
  },
  {
    num: 4,
    expectedResult: 4,
  },
  {
    num: 8,
    expectedResult: 2,
  },
  {
    num: 9,
    expectedResult: 3,
  },
  {
    num: 17,
    expectedResult: 17,
  },
  {
    num: 15,
    expectedResult: 3,
  },
  {
    num: 121,
    expectedResult: 1,
  },
]);

describe("return smallest divisor", () => {
  testCases(
    "the expected result for $num is $expectedResult",
    ({ num, expectedResult }) => {
      const result = smallestDivisor(num);
      console.log(result);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
