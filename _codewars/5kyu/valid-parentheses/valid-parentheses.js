"use strict";

const A = "()";
const B = ")(()))";
const C = "(";
const D = "(())((()())())";
const E =
  "(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())";
const F = "";
const G = "))((";
const J = ")(())(";
const K = "())";
const L = "())(";

function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    console.log("loop start", "loop count ", `${i}`, "n =", n);
    if (parens[i] == "(") n++;
    console.log("+ ", "loop count ", `${i}`, "n =", n);
    if (parens[i] == ")") n--;
    console.log("- ", "loop count ", `${i}`, "n =", n);
    if (n < 0) return false;
  }
  console.log("returned n ", n);
  return n == 0;
}

/*const validParentheses = function (parens) {
  if (parens[0] === ")" || parens.length > 100) return false;
  if (
    parens.split("").filter((paren) => paren === "(").length !==
    parens.split("").filter((paren) => paren === ")").length
  )
    return false;
  return true;
};*/

// const validParentheses = function (parens) {
//   if (parens === "") return true;
//   if (parens.length === 1 || parens.length > 100) return false;
//   let result = parens;
//   for (let i = 0; result.length > 0; i++) {
//     if (!result.match(/\(\)/g)) break;
//     result = result.replace(/\(\)/g, "");
//   }
//   return result === "";
// };

// console.log("())".replace(/\(\)/g, ""));
// console.log(Boolean(")".match(/\(\)/g)));

// console.log(")(())(".replace(/\(\)/g, ""));
//
// const test1 = "";
//
// console.log(test1 === "");

/*





Remove () pairs
(())((()())())

step 1: ()(())
step 2: ()
step 3:

*/

// const rA = validParentheses(A);
// console.log(rA);
// const rB = validParentheses(B);
// console.log(rB);
// const rC = validParentheses(C);
// console.log(rC);
// const rD = validParentheses(D);
// console.log(rD);
// const rE = validParentheses(E);
// console.log(rE);
// const rF = validParentheses(F);
// console.log(rF);
// const rG = validParentheses(G);
// console.log(rG);
// const rJ = validParentheses(J);
// console.log(rJ);
// const rK = validParentheses(K);
// console.log(rK);
const rL = validParentheses(L);
console.log(rL);

module.exports = validParentheses;
