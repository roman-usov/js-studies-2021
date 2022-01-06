"use strict";

function cacheFunction(fn) {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      console.log(`Returned from cache: ${cache[n]}`);
      return cache[n];
    }
    let result = fn(n);
    console.log(`Calculated value: ${result}`);
    cache[n] = result;
    return result;
  };
}

const factorialWithWhile = (n) => {
  if (n < 0) return -1;
  let result = n;
  let counter = n - 1;
  while (counter > 0) {
    result = result * counter;
    counter--;
  }
  return result;
};

const cacheFactorial = cacheFunction(factorialWithWhile);

cacheFactorial(5);
cacheFactorial(5);
cacheFactorial(4);
cacheFactorial(3);
cacheFactorial(7);
cacheFactorial(4);
cacheFactorial(3);
