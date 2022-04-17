const hash_tag_generator = require("./hashtag-generator.js");

const testCases = test.each([
  {
    input: " Hello, world !",
    expectedResult: "#HelloWorld",
  }, // “ Hello, world !” → “#HelloWorld” - базовый
  {
    input:
      " Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rlHello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rlHello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rlHello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld! Hello wo rld!",
    expectedResult: false,
  },
  {
    input: "",
    expectedResult: false,
  }, // If the input is an empty string it must return false
  {
    input: "  ％ ()$",
    expectedResult: false,
  }, // If the output is an empty string it must return false
  {
    input: "jack's pizza",
    expectedResult: "#JacksPizza",
  }, // “jack’s pizza” → “#JacksPizza”
  {
    input: "end-2-end",
    expectedResult: "#End2End",
  }, // “end-2-end” → “#End2End”
]);

describe("hashtag tests", () => {
  testCases(
    "input $input should be $expectedResult",
    ({ input, expectedResult }) => {
      expect(hash_tag_generator(input)).toStrictEqual(expectedResult);
    }
  );
});
