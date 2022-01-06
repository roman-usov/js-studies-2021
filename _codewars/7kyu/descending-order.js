"use strict";

const inputNumber = 145263;

const sortNumberDesc = function (num) {
  return parseInt(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
};

const output = sortNumberDesc(inputNumber);
console.log(output);
