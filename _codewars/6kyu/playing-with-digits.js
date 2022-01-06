"use strict";

// const nToSuccessivePowersEqualToKN = function (n, p) {
//   const sum = String(n)
//     .split("")
//     .reduce((sum, num, i) => sum + num ** (p + i), 0);
//   if (!(sum % n)) {
//     return sum / n;
//   } else {
//     return -1;
//   }
// };

const nToSuccessivePowersEqualToKN = function (n, p) {
  const sum = String(n)
    .split("")
    .reduce((sum, num, i) => sum + num ** (p + i), 0);
  return !(sum % n) ? sum / n : -1;
};

const result = nToSuccessivePowersEqualToKN(46288, 3);
console.log(result);

console.log(Boolean(2360688 % 46288));

module.exports = nToSuccessivePowersEqualToKN;
