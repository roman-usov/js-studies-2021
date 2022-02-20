const first_non_repeating_letter = require("./firstNonRepeatChar.js");

const testCases = test.each([
  { input: "", expectedResult: "" }, // Вход "", выход "" | Проверяем вход на пустую строку. Возвращаем пустую строку.
  { input: "aas", expectedResult: "s" }, // Вход: Все буквы одинаковые, в нижнем регистре, выход ""
  { input: "FFFF", expectedResult: "" }, // Вход: Все буквы одинаковые, в верхнем регистре, выход ""
  { input: "FfFf", expectedResult: "" }, // Вход: Все буквы одинаковые, в разных регистрах, выход ""
  { input: "fFs", expectedResult: "s" }, // Вход: Все буквы уникальные ("fFs"), в разных регистрах, выход "s"
  { input: "123f", expectedResult: "1" }, // Вход: первый символ - уникальное число, выход "1"
  { input: " f1", expectedResult: " " }, // Вход: первый символ - пробел, выход " "
  { input: '!@#$%^&*"()№;%:?*,.[]{}|/', expectedResult: "!" }, // Вход: набор уникальных символов, выход "!"
  { input: "ff⛧sggfa1", expectedResult: "⛧" }, // Вход: набор уникальных символов, выход "⛧"
]);

describe("first unique character tests", () => {
  testCases(
    "input $input should be $expectedResult",
    ({ input, expectedResult }) => {
      expect(first_non_repeating_letter(input)).toStrictEqual(expectedResult);
    }
  );
});
