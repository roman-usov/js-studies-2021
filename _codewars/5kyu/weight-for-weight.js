"use strict";

// const calcNumberWeight = (str) =>
//   String(str.split("").reduce((acc, digit) => acc + +digit, 0));

/*const orderWeights = (weights) => {
  const calcNumberWeight = (str) =>
    String(str.split("").reduce((acc, digit) => acc + +digit, 0));
  return weights
    .trim()
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .sort((a, b) => {
      if (calcNumberWeight(a) === calcNumberWeight(b)) {
        return [a, b].sort()[0] === a ? -1 : 1;
      }
      return calcNumberWeight(a) - calcNumberWeight(b);
    })
    .join(" ");
};*/

const orderWeights = (weights) => {
  const calcNumberWeight = (str) =>
    String(str.split("").reduce((acc, digit) => acc + +digit, 0));
  return weights
    .trim()
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .sort((a, b) => {
      if (calcNumberWeight(a) === calcNumberWeight(b))
        return a.localeCompare(b);
      return calcNumberWeight(a) - calcNumberWeight(b);
    })
    .join(" ");
};

//console.log(calcNumberWeight("100"));

console.log(orderWeights("  5  12   45   100   ")); //"100 12 5 45", no equal number weights, extra whitespaces
console.log(orderWeights(""), ""); //empty string

module.exports = orderWeights;
