"use strict";

const inputValue = 25;
const mixedArray = ["case", 1, "1", "25", 25];

// const checkForPresence = function (x, arr) {
// 	return arr.includes(x); //? true : false;
// };

const checkForPresence = (x, arr) => arr.includes(x);

const answer = checkForPresence(inputValue, mixedArray);
console.log(answer);
