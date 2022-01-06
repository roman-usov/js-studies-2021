"use strict";

let input = "    3 +       8 = 7  -          x  +5";

/*const solveEquation = function (eq) {
  function addPlusToFirstEl(str) {
    return str
      .split("")
      .map((el, i) => {
        return i === 0 && el !== "-" ? "+" + el : el;
      })
      .join("");
  }
  const cleanEq = eq.replace(/ /g, "");
  const leftPart = addPlusToFirstEl(cleanEq.slice(0, cleanEq.indexOf("=")));
  const rightPart = addPlusToFirstEl(cleanEq.slice(cleanEq.indexOf("=") + 1));
  let allToLeft = leftPart
    .split("")
    .concat(
      rightPart.split("").map((el) => {
        if (el === "-") return "+";
        if (el === "+") return "-";
        return el;
      })
    )
    .join("");
  console.log(allToLeft);
  console.log(allToLeft[allToLeft.indexOf("x") - 1]);
  if (allToLeft[allToLeft.indexOf("x") - 1] === "+") {
    allToLeft = allToLeft
      .split("")
      .map((el) => {
        if (el === "-") return "+";
        if (el === "+") return "-";
        return el;
      })
      .join("");
  }
  allToLeft = allToLeft.replace("-x", "");
  console.log(eval(allToLeft));

  // let rightPart = "";
  // for (let i = 0; i < rightPart.length; i++) {
  //   if (i === 0 && rightPart[i] !== "-") {
  //     rightPart = rightPart + "+" + partAfterEq[i];
  //   } else {
  //     a = a + partAfterEq[i];
  //   }
  //}
  // console.log(leftPart);
  // console.log(rightPart);
  console.log(allToLeft);
  return eval(allToLeft);
};*/

/*const calcEquation = function (input) {
  const equation = input.replace(/ /g, "");
  console.log(equation);
  const evalLeft = eval(
    equation.replace(/(\+x)|(-x)|(x)/g, "").split("=")[0]
      ? equation.replace(/(\+x)|(-x)|(x)/g, "").split("=")[0]
      : "0"
  );
  console.log(evalLeft);
  const evalRight = eval(
    equation.replace(/(\+x)|(-x)|(x)/g, "").split("=")[1]
      ? equation.replace(/(\+x)|(-x)|(x)/g, "").split("=")[1]
      : "0"
  );
  console.log(evalRight);
  const diff = evalLeft - evalRight;
  console.log(diff);
  const minusX = equation[equation.indexOf("x") - 1] === "-";
  console.log(minusX);
  console.log(equation.slice(0, equation.indexOf("=")).includes("x"));
  const result =
    (equation.slice(0, equation.indexOf("=")).includes("x") && !minusX) ||
    (!equation.slice(0, equation.indexOf("=")).includes("x") && minusX)
      ? -diff
      : diff;
  console.log(result);
  return result;
};*/

/*let toOneSide = input.split("=").reduce((str, el, i) => {
  if (i === 0) return str + el;
  let y = "";
  for (let i = 0; i < el.length; i++) {
    console.log(`el[i] = ${el[i]}`);
    if (el[i] === "+") {
      y += "-";
    } else if (el[i] === "-") {
      y += "+";
    } else if (i === 0) {
      y += "-" + el[i];
    } else {
      y += el[i];
    }
    console.log(`y = ${y} after iteration ${i}`);
  }
  return str + y;
}, "");
console.log(toOneSide);

const rawEval =
  toOneSide[toOneSide.indexOf("x") - 1] !== "-"
    ? -eval(toOneSide.replace("x", "0"))
    : eval(toOneSide.replace("x", "0"));
console.log(rawEval);*/

// for (const part of split) {
//   part[0] === "-" ? newSplit.push(part) : newSplit.push("+" + part);
// }
// console.log(newSplit);
// split.reduce((str, el) => {
//   console.log(el);
//   console.log(el[0] === "-" ? str + el : str + "+" + el);
//   return el[0] === "-" ? str + el : str + "+" + el;
// }, "");
// console.log(split);

// const inp = "-3 + 2 + x = 0";
// const inp = "x=3+2";
// const inp = "- x = 3 + 2";
// const inp = "3 + 2 = x";
// const inp = "3 + 2 = -x";
// const inp = "-3 + 2 + x = 0";
//const inp = "-3 + 2 - x = 0";

///// My Solution

/*const evalEq = (input) =>
  input.slice(0, input.indexOf("=")).includes("x")
    ? input.replace(/ /g, "").split("=")[0].includes("-x")
      ? -(
          eval(input.replace(/ /g, "").split("=")[1].replace("x", "0")) -
          eval(input.replace(/ /g, "").split("=")[0].replace("x", "0"))
        )
      : eval(input.replace(/ /g, "").split("=")[1].replace("x", "0")) -
        eval(input.replace(/ /g, "").split("=")[0].replace("x", "0"))
    : input.replace(/ /g, "").split("=")[1].includes("-x")
    ? -(
        eval(input.replace(/ /g, "").split("=")[0].replace("x", "0")) -
        eval(input.replace(/ /g, "").split("=")[1].replace("x", "0"))
      )
    : eval(input.replace(/ /g, "").split("=")[0].replace("x", "0")) -
      eval(input.replace(/ /g, "").split("=")[1].replace("x", "0"));*/

const evalEq = (input) =>
  input
    .replace(/\s/g, "")
    .split("=")
    .sort((l, r) => (r.includes("x") ? 1 : -1))
    .reduce((l, r) => eval(r) - eval(l.replace("x", "0"))) *
  (/-\s*x/.test(input) ? -1 : 1);

// const evalEq = (input) => {
//   const parts = input.replace(/\s/g, "").split("=");
//   console.log(`parts => ${parts}`);
//   const sortedParts = parts.sort((l, r) => (r.includes("x") ? 1 : -1));
//   console.log(`sorted parts => ${sortedParts}`);
//   const evaluation = sortedParts.reduce(
//     (l, r) => eval(r) - eval(l.replace("x", "0"))
//   );
//   console.log(`evaluation => ${evaluation}`);
//   console.log(`result => ${evaluation * (/-\s*x/.test(input) ? -1 : 1)}`);
//   return evaluation * (/-\s*x/.test(input) ? -1 : 1);
// };

////// Best Solution 1
/*

const solve = (expr) =>
  expr
    .replace(/\s/g, "")
    .split("=") // Remove whitespace; Separate sides
    .sort((l, r) => (r.includes("x") ? 1 : -1)) // Put side with 'x' on left - then last step is always subtraction
    .map((e) => eval(e.replace("x", "0"))) // Eval both sides, using 0 in place of 'x'
    .reduce((l, r) => r - l) * // Subtract left from right
  (/-\s*x/.test(expr) ? -1 : 1); // Reverse sign if 'x' was 'negative'

const solveReversed = (expr) => {
  const cleanedAndSplit = expr.replace(/\s/g, "").split("=");
  console.log(`cleaned and split expression => ${cleanedAndSplit}`);
  const sortedByX = cleanedAndSplit.sort((l, r) => (r.includes("x") ? 1 : -1));
  console.log(`sorted by x => ${sortedByX}`);
  const evalSides = sortedByX.map((e) => eval(e.replace("x", "0")));
  console.log(`evaluated sides => ${evalSides}`);
  const calcDiff = evalSides.reduce((l, r) => r - l);
  console.log(`calcDiff => ${calcDiff}`);
  const minus = /-\s*x/g.test(expr) ? -1 : 1;
  console.log(`minus => ${minus}`);
  console.log(calcDiff * minus);
  return calcDiff * minus;
};
*/

console.log(`3+5=x-2 => ${evalEq("3+5=x-2")}`); //10
// console.log(
//   `    3 +       8 = -7  -          x => ${solveReversed(
//     "    3 +       8 = -7  -          x"
//   )}`
// ); //-18
// console.log(`10.4 + 5 = x + 4.67 => ${solveReversed("10.4 + 5 = x + 4.67")}`); //10.73
// console.log(
//   `-    434.42   + 44.3 -   90.4 +     x = 0 => ${solveReversed(
//     "-    434.42   + 44.3 -   90.4 +     x = 0"
//   )}`
// ); //480.52
// console.log(`3 + 5 -  7 = x => ${solveReversed("3 + 5 -  7 = x")}`); //1
// console.log(`10-x = 5 +3 => ${solveReversed("10-x = 5 +3")}`); //2
// console.log(`x = 3 + 2 => ${solveReversed("x = 3 + 2")}`); //5
// console.log(`- x = 3 + 2 => ${solveReversed("- x = 3 + 2")}`); //-5
// console.log(`3 + 2 = x => ${solveReversed("3 + 2 = x")}`); //5
// console.log(`3 + 2 = -x => ${solveReversed("3 + 2 = -x")}`); //-5
// console.log(`-3 + 2 + x = 0 => ${solveReversed("-3 + 2 + x = 0")}`); //1
// console.log(`-3 + 2 - x = 0 => ${solveReversed("-3 + 2 - x = 0")}`); //-1

//const solveEquation2 = (eq) => eq[eq.indexOf("x") - 1] === "+" ? ;

//
// console.log(evalLeft);
// console.log(evalRight);
// console.log(diff);
// console.log(minusX);
// console.log(result);

module.exports = evalEq;
