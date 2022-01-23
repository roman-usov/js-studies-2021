"use strict";

const numbers = "1123666666444";

function luckyNumber(str) {
  const sortedArr = [...str].sort();

  const uniqueArr = [...new Set(sortedArr)];

  const arraysOfNumbers = uniqueArr.map((uniqueEl) => {
    return sortedArr.filter((el) => el === uniqueEl);
  });

  return arraysOfNumbers.reduce((result, el) => {
    if (+el[0] !== el.length) return result;

    return Math.max(result, el.length);
  }, 0);
}

console.log(luckyNumber(numbers));
