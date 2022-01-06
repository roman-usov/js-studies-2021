const calculateRecommendedPortion = require("./dogs-study.js");
const calculateAndAddRecommendedPortion = require("./dogs-study.js");
const checkIfEatingTooMuch = require("./dogs-study.js");
const provideOwnersOfOvereatersAndUndernourished = require("./dogs-study.js");

//
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
//   input                                          | expectedResult
//   ${" this is a nice title "}                    | ${"This Is a Nice Title"}
//   ${"this  is a LONG title"}                     | ${"This Is a Long Title"}
//   ${"and here is another title with an EXAMPLE"} | ${"And Here Is Another Title with an Example"}
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

const recommendedFoodTestCases = test.each([
  { input: 22, expectedResult: 284 },
  { input: 8, expectedResult: 133 },
  { input: 13, expectedResult: 191 },
  { input: 32, expectedResult: 376 },
]);

const inputDogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
const expectedDogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Alice", "Bob"],
    recommended: 284.4297646615672,
  },
  {
    weight: 8,
    curFood: 200,
    owners: ["Matilda"],
    recommended: 133.19119688030474,
  },
  {
    weight: 13,
    curFood: 275,
    owners: ["Sarah", "John"],
    recommended: 191.69710117664528,
  },
  {
    weight: 32,
    curFood: 340,
    owners: ["Michael"],
    recommended: 376.72159403366413,
  },
];

const eatingTooMuchTestCases = test.each([
  { input: "Sarah", expectedResult: true },
  { input: "Alice", expectedResult: false },
]);

const expectedOvereatersAndUndernourished = {
  ownersEatTooMuch: ["Matilda", "Sarah", "John"],
  ownersEatTooLittle: ["Alice", "Bob", "Michael"],
};

describe("dogs study tests", () => {
  recommendedFoodTestCases(
    "recommended food portion for a dog of $input kg should be $expectedResult",
    ({ input, expectedResult }) => {
      expect(
        calculateRecommendedPortion.calculateRecommendedPortion(input)
      ).toStrictEqual(expectedResult);
    }
  );
  const outputDogs =
    calculateAndAddRecommendedPortion.calculateAndAddRecommendedPortion(
      inputDogs
    );
  test("adds recommended portions to each dog object in the array", () => {
    expect(outputDogs).toMatchObject(expectedDogs);
  });
  eatingTooMuchTestCases(
    "$input's dog eats too much: $expectedResult",
    ({ input, expectedResult }) => {
      expect(checkIfEatingTooMuch.checkIfEatingTooMuch(input)).toStrictEqual(
        expectedResult
      );
    }
  );
  const outputOvereatersAndUndernourished =
    provideOwnersOfOvereatersAndUndernourished.provideOwnersOfOvereatersAndUndernourished(
      inputDogs
    );
  test("provides owners of dogs that eat too much and too little", () => {
    expect(outputOvereatersAndUndernourished).toMatchObject(
      expectedOvereatersAndUndernourished
    );
  });
});
