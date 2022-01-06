"use strict";

//// Factorial

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const result = factorial(4);

const factorialWithFor = (n) => {
  if (n < 0) return -1;
  let result = n;
  for (let i = 1; i < n; i++) {
    result = i * result;
    console.log(`at i = ${i}, result = ${result}`);
  }
  return result;
};

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

// console.log(factorialWithWhile(4));
// console.log(4 * 3 * 2 * 1);

//// Fibonacci Sequence

// 1, 1, 2, 3, 5, 8, 13, 21

/*
----------------- CALL STACK ------------------------

//fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
//fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
//fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5
-----------------------------------------------------
*/

const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibResult = fibonacci(5);
console.log(fibResult);

// const fib = (n) => {
//   if (n < 3) return 1;
//   let iMinusTwo = 1; //1) 1 //2) 2 //3) 3
//   let iMinusOne = 1; //1) 2 //2) 3 //3) 5
//   for (let i = 3; i <= n; i++) {
//     const current = iMinusTwo + iMinusOne; //1) 2 //2) 3 //3) 5
//     iMinusTwo = iMinusOne;
//     iMinusOne = current;
//   }
//   return current;
// };

console.log(fib(6));

//// Reverse String

const reverseString = function (str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
};
const reversedString = reverseString("cat");
//console.log(reversedString);
