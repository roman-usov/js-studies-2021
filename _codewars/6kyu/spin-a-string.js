"use strict";

const inputStr = [
  "Hey fellow warriors",
  "This is a test",
  "This is another test",
];
const testArr = [
  "Hey wollef sroirraw",
  "This is a test",
  "This is rehtona test",
];
const outputArr = [];

const spinString = function (str) {
  return str
    .split(" ")
    .map((el) => {
      if (el.length < 5) return el;
      return el.split("").reverse().join("");
    })
    .join(" ");
};

inputStr.forEach((el) => outputArr.push(spinString(el)));
const testResults = outputArr.map((el, index) => testArr[index] === el);
console.log(testResults);

//console.log(spinString(inputStr[0]));
