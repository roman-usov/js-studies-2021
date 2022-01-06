"use strict";

const inputStr = "xxoo";

console.log(inputStr.split("x"));

// const xo = function (str) {
// 	const inputArr = [...str.toLowerCase()];
// 	console.log(inputArr);
// 	function filterValue(val, arr) {
// 		return arr.filter((el) => val === el);
// 	}
// 	const mappedStr = new Map([
// 		['x', filterValue('x', inputArr)],
// 		['o', filterValue('o', inputArr)],
// 	]);
// 	console.log(mappedStr);
// 	return mappedStr.get('x').length === mappedStr.get('o').length ? true : false;
// };

const xo = function (str) {
  const x = [...str.toLowerCase()].filter((el) => el === "x");
  const o = [...str.toLowerCase()].filter((el) => el === "o");
  return x.length === o.length ? true : false;
};

const output = xo(inputStr);
console.log(output);

const test = ["a", "b", "c", "a"];
function filterValue(val, arr) {
  return arr.filter((el) => val === el);
}

console.log(filterValue("a", test));
