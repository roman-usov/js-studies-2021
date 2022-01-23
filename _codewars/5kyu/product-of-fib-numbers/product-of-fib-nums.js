"use strict";

/*const productFib = function (prod) {
  let fibOfN = 1;
  let fibOfNMinus1 = 1;
  let fibOfNMinus2 = 0;
  const fib = [0, 1, 1];
  while (fibOfN * fibOfNMinus1 <= prod) {
    fibOfNMinus2 = fibOfNMinus1;
    fibOfNMinus1 = fibOfN;
    fibOfN = fibOfNMinus2 + fibOfNMinus1;
    fib.push(fibOfN);
    console.log(fib);
  }
  /!*console.log(fib);
  console.log(fN);
  console.log(fNMinusOne);
  console.log(fNMinusTwo);
  console.log([fNMinusTwo, fNMinusOne, true]);
  console.log([fNMinusOne, fN, false]);*!/
  // if (fibOfNMinus1 * fibOfNMinus2 === prod)
  //   return [fibOfNMinus2, fibOfNMinus1, true];
  // return [fibOfNMinus1, fibOfN, false];

  return fibOfNMinus1 * fibOfNMinus2 === prod
    ? [fibOfNMinus2, fibOfNMinus1, true]
    : [fibOfNMinus1, fibOfN, false];
};*/

/*const productFib = function (prod) {
  let fibOfNMinus1 = 0;
  let fibOfN = 1;
  const fib = [0, 1];
  while (fibOfNMinus1 * fibOfN < prod) {
    fibOfN = fibOfN + fibOfNMinus1;
    fibOfNMinus1 = fibOfN - fibOfNMinus1;
    console.log("fibOfN", fibOfN, "fibOfNMinus1", fibOfNMinus1);
    fib.push(fibOfN);
    console.log(fib);
  }
  console.log([fibOfNMinus1, fibOfN, fibOfNMinus1 * fibOfN === prod]);
  return [fibOfNMinus1, fibOfN, fibOfNMinus1 * fibOfN === prod];
};*/

const productFib = function (prod) {
  function getFibProd(fN, fN1) {
    if (fN * fN1 >= prod) {
      return [fN1, fN, fN * fN1 === prod];
    }
    return getFibProd(fN + fN1, fN);
  }
  return getFibProd(1, 0);
};

productFib(800);

/*
    console.log(
      "fibOfNMinus2:",
      fibOfNMinus2,
      "fibOfNMinus1:",
      fibOfNMinus1,
      "fibOfN:",
      fibOfN
    );
*/

module.exports = productFib;
