"use strict";

const inputString = "How can mirrors be real if our eyes aren't real";

function capitalizeString(str) {
  const capitalized = [];
  function firstCharToUpperCase(str) {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join("");
  }
  str.split(" ").forEach((el) => capitalized.push(firstCharToUpperCase(el)));
  return capitalized.join(" ");
}

const outputString = capitalizeString(inputString);
console.log(outputString);

// function firstCharToUpperCase(str) {
// 	return str[0].toUpperCase() + str.slice(1);
// }

function firstCharToUpperCase(str) {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join("");
}

const str = "eyes";
const testOutput = firstCharToUpperCase(str);
console.log(testOutput);

String.prototype.toJadenCase = function () {
  const capitalized = [];
  function firstCharToUpperCase(str) {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join("");
  }
  this.split(" ").forEach((el) => capitalized.push(firstCharToUpperCase(el)));
  return capitalized.join(" ");
};

console.log(inputString.toJadenCase());
