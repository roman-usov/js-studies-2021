"use strict";

// const checkIfTenMinuteWalk = function (directions) {
//   const n = directions.filter((character) => character === "n");
//   const s = directions.filter((character) => character === "s");
//   const w = directions.filter((character) => character === "w");
//   const e = directions.filter((character) => character === "e");
//   if (
//     directions.length === 10 &&
//     n.length === s.length &&
//     w.length === e.length
//   )
//     return true;
//   return false;
// };

const checkIfTenMinuteWalk = function (directions) {
  const n = directions.filter((character) => character === "n").length;
  const s = directions.filter((character) => character === "s").length;
  const w = directions.filter((character) => character === "w").length;
  const e = directions.filter((character) => character === "e").length;
  return directions.length === 10 && n === s && w === e;
};

const checkIfTenMinuteWalk = function (directions) {
  function count(val) {
    return directions.filter((char) => char === val).length;
  }
  return (
    directions.length === 10 &&
    count("s") === count("n") &&
    count("e") === count("w")
  );
};

// const result = checkIfTenMinuteWalk([
//   "n",
//   "s",
//   "n",
//   "s",
//   "n",
//   "s",
//   "n",
//   "s",
//   "n",
//   "s",
// ]);
// console.log(result);

module.exports = checkIfTenMinuteWalk;
