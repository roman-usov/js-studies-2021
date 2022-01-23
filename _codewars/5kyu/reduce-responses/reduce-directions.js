"use strict";

// const reduceDirections = function (directions) {
//   const directionsString = directions.join();
//   if (directionsString === "") {
//     return [];
//   } else if (
//     !directionsString.match(/NORTH,SOUTH|SOUTH,NORTH|EAST,WEST|WEST,EAST/g)
//   ) {
//     return directions;
//   }
//   return reduceDirections(
//     directionsString
//       .replace(/NORTH,SOUTH|SOUTH,NORTH|EAST,WEST|WEST,EAST/g, "")
//       .replace(/(^[,]+)|([,]+$)/g, "")
//       .replace(/,{2,}/g, ",")
//       .split(",")
//   );
// };

//Option 2 - forbiddenDirections as strings
// const reduceDirections = function (directions) {
//   const forbiddenDirections = [
//     "NORTHSOUTH",
//     "SOUTHNORTH",
//     "EASTWEST",
//     "WESTEAST",
//   ];
//   const input = directions.slice();
//   const reducedDirections = [];
//   if (input.every((el, i) => !forbiddenDirections.includes(el + input[i + 1])))
//     return directions;
//   for (let i = 0; input.length > 0; i = 0) {
//     const pair = input[i] + input[i + 1];
//     if (forbiddenDirections.includes(pair)) {
//       input.splice(i, 2);
//     } else {
//       reducedDirections.push(...input.splice(0, 1));
//     }
//   }
//   //console.log(reducedDirections);
//   return reduceDirections(reducedDirections);
// };

//Options 3 - forbiddenDirections as subarrays
const reduceDirections = function (directions) {
  const forbiddenDirections = [
    ["NORTH", "SOUTH"],
    ["SOUTH", "NORTH"],
    ["EAST", "WEST"],
    ["WEST", "EAST"],
  ];
  const input = directions.slice();
  const reducedDirections = [];

  function arrayContains(source, elToCheck) {
    for (const sourceEl of source) {
      if (
        sourceEl.length === elToCheck.length &&
        elToCheck.every((el, i) => el === sourceEl[i])
      )
        return true;
    }
    return false;
  }

  if (
    input.every(
      (_, i) => !arrayContains(forbiddenDirections, input.slice(i, i + 2))
    )
  )
    return directions;

  for (let i = 0; input.length > 0; i = 0) {
    if (arrayContains(forbiddenDirections, input.slice(i, i + 2))) {
      input.splice(i, 2);
    } else {
      reducedDirections.push(...input.splice(0, 1));
    }
  }

  return reduceDirections(reducedDirections);
};

function dirReduc(directions) {
  const opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return directions.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

/*
Logic

--- Loop 1
dirs = []
dir = "NORTH"
dirs.length = 0
dirs[dirs.length - 1] = undefined
dirs.push(dir) -> dirs = ["NORTH"]

--- Loop 2
dirs = ["NORTH"]
dir = "SOUTH"
dirs.length = 1
dirs[dirs.length - 1] = "NORTH"
dirs.pop() -> dirs = []

--- Loop 3
dirs = []
dir = "SOUTH"
dirs.length = 0
dirs[dirs.length - 1] = undefined
dirs.push(dir) -> dirs = ["SOUTH"]

--- Loop 4
dirs = ["SOUTH"]
dir = "EAST"
dirs.length = 1
dirs[dirs.length - 1] = "SOUTH"
dirs.push(dir) -> dirs = ["SOUTH", "EAST"]

--- Loop 5
dirs = ["SOUTH", "EAST"]
dir = "WEST"
dirs.length = 2
dirs[dirs.length - 1] = "EAST"
dirs.pop() -> dirs = ["SOUTH"]

--- Loop 6
dirs = ["SOUTH"]
dir = "NORTH"
dirs.length = 1
dirs[dirs.length - 1] = "SOUTH"
dirs.pop() -> dirs = []

--- Loop 7
dirs = []
dir = "WEST"
dirs.length = 0
dirs[dirs.length - 1] = undefined
dirs.push(dir) -> dirs = ["WEST"]

return ["WEST"]
 */

const input = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
const input1 = ["NORTH", "SOUTH", "EAST", "WEST"];
const input2 = ["NORTH", "WEST", "SOUTH", "EAST"];

//console.log(input2.slice(0, 2));

// const forbiddenDirections = [
//   ["NORTH", "SOUTH"],
//   ["SOUTH", "NORTH"],
//   ["EAST", "WEST"],
//   ["WEST", "EAST"],
// ];
//
// const positive = ["NORTH", "SOUTH"];
// const positiveIncludes = forbiddenDirections.includes(positive);
// console.log(positiveIncludes);
// const negative = ["SOUTH", "SOUTH"];
// const negativeIncludes = forbiddenDirections.includes(negative);
// console.log(negativeIncludes);
//
// // const test = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
// // test.splice(0, 1);
// // console.log(test);

const output = reduceDirections(input);
console.log(output);

// const forbiddenDirections = [
//   ["NORTH", "SOUTH"],
//   ["SOUTH", "NORTH"],
//   ["EAST", "WEST"],
//   ["WEST", "EAST"],
// ];

// const inp1 = ["NORTH", "SOUTH"];
// const inp2 = ["SOUTH", "EAST"];
// const inp3 = ["WEST"];
// const inp4 = [];
//
// console.log(arrayContains(forbiddenDirections, inp1));
// console.log(arrayContains(forbiddenDirections, inp2));
// console.log(arrayContains(forbiddenDirections, inp3));
// console.log(arrayContains(forbiddenDirections, inp4));

//console.log("WEST".match(/NORTH,SOUTH|SOUTH,NORTH|EAST,WEST|WEST,EAST/g));

module.exports = reduceDirections;

// const result = returnArrayDiff(inputA, inputB);
// console.log(result);
