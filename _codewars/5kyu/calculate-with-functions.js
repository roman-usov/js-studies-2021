"use strict";

const calculate = function (num1, op, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return Math.floor(num1 / num2);
      break;
  }
};

function selectCalculationForNum(n) {
  return function (operation) {
    return operation ? operation(n) : n;
  };
}

// const zero = selectCalculationForNum(0);
// const one = selectCalculationForNum(1);
// const two = selectCalculationForNum(2);
// const three = selectCalculationForNum(3);
// const four = selectCalculationForNum(4);
// const five = selectCalculationForNum(5);
// const six = selectCalculationForNum(6);
// const seven = selectCalculationForNum(7);
// const eight = selectCalculationForNum(8);
// const nine = selectCalculationForNum(9);

const five = function (operation) {
  return operation ? operation(5) : 5;
};

const seven = function (operation) {
  return operation ? operation(7) : 7;
};

function times(m) {
  return function (n) {
    return calculate(n, "*", m);
  };
}

function divideBy(m) {
  return function (n) {
    return calculate(n, "/", m);
  };
}

function plus(m) {
  return function (n) {
    return calculate(n, "+", m);
  };
}

function minus(m) {
  return function (n) {
    return calculate(n, "-", m);
  };
}

console.log(seven(times(five())));

// // console.dir(five);
// // console.dir(seven);
// const step1 = five();
// // console.log(step1);
// const step2 = times(step1);
// // console.log("seven: ", seven);
// // console.dir(seven);
// // console.log(step2);
// // console.dir(step2);
// const step3 = seven(step2);
// console.log(step3);
// console.dir(step3);

// const x = 7;
// const func = function (l) {
//   const y = calculate(l, "*", 5);
//   console.log(y);
// };
// func(x);

// console.log(calculate(5, "*", 7));
//
// console.log(five());
// console.log(seven);
// console.log(times(five()));
// console.dir(times(five()));
// console.log(seven(times(five())));

// console.log(five);
// console.log(seven);
// console.log(five());
// console.log(seven());
// console.dir(seven);
//
// console.log(times(five()));
// console.dir(times(five()));
//
// console.log(seven(times(five())));

// function zero(arg) {
//   return arg ? calculate(0, ...arg) : 0;
// }
// function one(arg) {
//   return arg ? calculate(1, ...arg) : 1;
// }
// function two(arg) {
//   return arg ? calculate(2, ...arg) : 2;
// }
// function three(arg) {
//   return arg ? calculate(3, ...arg) : 3;
// }
// function four(arg) {
//   return arg ? calculate(4, ...arg) : 4;
// }
// function five(arg) {
//   return arg ? calculate(5, ...arg) : 5;
// }
// function six(arg) {
//   return arg ? calculate(6, ...arg) : 6;
// }
// function seven(arg) {
//   return arg ? calculate(7, ...arg) : 7;
// }
// function eight(arg) {
//   return arg ? calculate(8, ...arg) : 8;
// }
// function nine(arg) {
//   return arg ? calculate(9, ...arg) : 9;
// }

// function times(num) {
//   return ["*", num];
// }
// function minus(num) {
//   return ["-", num];
// }
// function plus(num) {
//   return ["+", num];
// }
// function dividedBy(num) {
//   return ["/", num];
// }

// function zero(arg) {
//   if (arg) {
//     return Math.floor(eval("0" + arg));
//   } else {
//     return "0";
//   }
// }
//
// const test1 = "*9";
// const string1 = 2 + test1;
// console.log(string1);
// console.log(eval(2 + test1));
//
// console.log(seven(times(five())));
// console.log(seven(minus(five())));
// console.log(seven(plus(five())));
// console.log(seven(divideBy(five())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(divideBy(two())));
// seven(minus(five()));
// seven(plus(five()));
// seven(dividedBy(five()));
// four(plus(nine()));
// eight(minus(three()));
// six(dividedBy(two()));

//console.log(seven(times(five())));

/*
1) The output of five() is the input to times()
2) The output of times() is the input to seven()
*/

// const n = function (digit) {
//   return function (op) {
//     return op ? op(digit) : digit;
//   };
// };
// const zero = n(0);
// const one = n(1);
// const two = n(2);
// const three = n(3);
// const four = n(4);
// const five = n(5);
// const six = n(6);
// const seven = n(7);
// const eight = n(8);
// const nine = n(9);
//
// console.dir(five);
//
// function plus(r) {
//   return function (l) {
//     return l + r;
//   };
// }
// function minus(r) {
//   return function (l) {
//     return l - r;
//   };
// }
// function times(r) {
//   return function (l) {
//     return l * r;
//   };
// }
// function dividedBy(r) {
//   return function (l) {
//     return l / r;
//   };
// }

// console.log(seven(minus(five())));
// console.log(seven(plus(five())));
// console.log(seven(dividedBy(five())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));

module.exports = {
  zero: zero,
  one: one,
  two: two,
  three: three,
  four: four,
  five: five,
  six: six,
  seven: seven,
  eight: eight,
  nine: nine,
  times: times,
  divideBy: divideBy,
  plus: plus,
  minus: minus,
  selectCalculationForNum: selectCalculationForNum,
};

// const result = returnArrayDiff(inputA, inputB);
// console.log(result);
