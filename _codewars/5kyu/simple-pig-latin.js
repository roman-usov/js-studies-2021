"use strict";

/*const pigIt = function (phrase) {
  return phrase
    .split(" ")
    .map((el) =>
      /\w/g.test(el)
        ? el.split("").splice(1).join("") + el.slice(0, 1) + "ay"
        : el
    )
    .join(" ");
};*/

/*const pigIt = function (phrase) {
  return phrase
    .split(" ")
    .map((el) =>
      /\w/g.test(el) ? el.replace(el[0], "") + el.slice(0, 1) + "ay" : el
    )
    .join(" ");
};

const pigIt = function (phrase) {
  return phrase
    .split(" ")
    .map((el) => el.replace(/\w+/g, (w) => w.slice(1) + w.slice(0, 1) + "ay"))
    .join(" ");
};*/

function pigIt(str) {
  return str.replace(/\w+/g, (w) => w.slice(1) + w[0] + "ay");
}

console.log(/\w/g.test(" !"));

console.log(pigIt("Test, My Bits !"));

module.exports = pigIt;
