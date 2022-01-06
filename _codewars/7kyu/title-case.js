"use strict";

const convertToTitleCase = function (title) {
  const exceptions = [
    "a",
    "an",
    "the",
    "but",
    "or",
    "and",
    "on",
    "in",
    "with",
    "at",
  ];

  const capitalize = function (word) {
    return word.replace(word.slice(0, 1), word.slice(0, 1).toUpperCase());
  };

  const capitalCaseTitle = title
    .toLowerCase()
    .trim()
    .replace(/\s\s+/g, " ")
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(capitalCaseTitle);
};

const input = "this is a nice title";
const result = convertToTitleCase(input);
console.log(result);

module.exports = convertToTitleCase;
