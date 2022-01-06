"use strict";
const myArray = [1, 2, 3];

function multiplyBy2(num) {
  return num * 2;
}

function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

let result = copyArrayAndManipulate(myArray, multiplyBy2);
console.log(result);

function copyArrayAndApplyMathOperations(arr, operation, operand) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    switch (operation) {
      case "plus":
        output.push(arr[i] + operand);
        break;
      case "minus":
        output.push(arr[i] - operand);
        break;
      case "divideBy":
        output.push(arr[i] / operand);
        break;
      case "multiply":
        output.push(arr[i] * operand);
        break;
    }
  }
  return output;
}

const result2 = copyArrayAndApplyMathOperations(myArray, "plus", 4);
console.log(result2);
