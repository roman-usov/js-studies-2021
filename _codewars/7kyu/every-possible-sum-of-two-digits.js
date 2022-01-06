"use strict";

const testNumber = [3541];
const testArraySumCombinations = [3 + 5, 3 + 4, 3 + 1, 5 + 4, 5 + 1, 4 + 1];
const testArraySums = [8, 7, 4, 9, 6, 5];

const inputNumber = [12345];

const giveAllSumsOfTwoDigits = function (num) {
  // const inputArr = num.toString().split('');
  // console.log(inputArr);

  let inputArr = [];
  let outputArr = [];

  num
    .toString() //first convert the input number to a string
    .split("") //then split the resulting string with numbers into an array of substrings
    .forEach((el) => inputArr.push(Number(el))); //finally convert each substring into a number and push it into a new inputArr array

  for (let i = 0; i < inputArr.length - 1; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      outputArr.push(inputArr[i] + inputArr[j]);
    }
  }

  return outputArr;
};

const output = giveAllSumsOfTwoDigits(inputNumber);
console.log(output);
