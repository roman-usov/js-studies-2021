"use strict";

const inputArr = [1, "a", "b", 0, 15];

function filterList(arr) {
  return arr.filter((el) => typeof el === "number");
}

const outputArr = filterList(inputArr);
console.log(outputArr);
