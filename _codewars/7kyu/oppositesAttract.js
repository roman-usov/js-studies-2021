"use strict";

let lily = 582;
let dandelion = 512;

const inLoveOrNot = function (flower1, flower2) {
  const evenOrOdd = function (number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  if (
    Number.isInteger(flower1) &&
    flower1 > 0 &&
    Number.isInteger(flower2) &&
    flower2 > 0
  ) {
    if (
      (evenOrOdd(flower1) && evenOrOdd(flower2)) ||
      (!evenOrOdd(flower1) && !evenOrOdd(flower2))
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    alert(`Please, submit two real flowers! 🌸`);
  }
};

let isInLove = inLoveOrNot(lily, dandelion);
console.log(isInLove);

const lovefunc = (flower1, flower2) => flower1 % 2 != flower2 % 2;

let test = lovefunc(lily, dandelion);
console.log(test);
