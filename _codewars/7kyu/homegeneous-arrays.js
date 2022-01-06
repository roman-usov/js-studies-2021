"use strict";

const inputArray = [
  [123, 234, 432],
  [],
  ["", "abc"],
  [""],
  ["", 1],
  ["", "1"],
  [],
];

//star solution

function filterHomogenous(arr) {
  return arr.filter(
    (subArr) =>
      subArr.length > 0 &&
      subArr.every((val) => typeof val === typeof subArr[0])
  );
}

// function filterEmptyArr(arrOfArrays) {
// 	const checkIfHasElements = (arr) => arr.length > 0;
//   let outputArray = arrOfArrays.filter(checkIfHasElements);
//   return outputArray;
// }

// function returnHomogeneousArrs(arrOfArrays) {
// 	function checkIfSameDataType(arr) {
// 		let outputArray = arr.every((el) => typeof arr[0] === typeof el);
// 		return outputArray;
// 	}
// 	function checkIfHasElements(arr) {
// 		return arr.length > 0;
// 	}
// 	let outputArray = arrOfArrays.filter(
// 		checkIfHasElements && checkIfSameDataType
// 	);
// 	return outputArray;
// }

// my back engineered star solution
function returnHomogeneousArrs(arrOfArrays) {
  return arrOfArrays.filter(
    (arr) => arr.length > 0 && arr.every((el) => typeof arr[0] === typeof el)
  );
}

const homo = returnHomogeneousArrs(inputArray);
console.log(homo);

function filterEmptyArr(arrOfArrays) {
  let outputArray = arrOfArrays.filter((arr) => arr.length > 0);
  return outputArray;
}

function checkIfSameDataType(arr) {
  let outputArray = arr.every((el) => typeof arr[0] === typeof el);
  return outputArray;
}

const arrForCheck = [123, 234, 432];
const checkForType = checkIfSameDataType(arrForCheck);
console.log(checkForType);

// function filterEmptyArr(arrOfArrays) {
// 	let outputArray = arrOfArrays.filter(function callback(arr) {
// 		arr.length > 0;
// 	});
// 	return outputArray;
// }

//const checkIfHasElements = (arr) => arr.length > 0;
const testA = filterEmptyArr(inputArray);
console.log(testA);

const refSol = filterHomogenous(inputArray);
console.log(refSol);

//my initial solution
/* const returnHomogeneousArrays = function (arrOfArrays) {
	let output = [];
	function compareElsForType(el1, el2) {
		return typeof el1 === typeof el2 ? true : false;
	}
	function checkIfHomogeneous(arr) {
		let trueFalseArr = [];
		for (let i = 0; i < arr.length - 1; i++) {
			let j = arr.length - 1;
			for (let k = j; k > i; k--) {
				const comparison = compareElsForType(arr[i], arr[k]);
				trueFalseArr.push(comparison);
			}
		}
		return trueFalseArr;
	}
	for (let m = 0; m < arrOfArrays.length; m++) {
		if (arrOfArrays[m].length === 1) {
			output.push(arrOfArrays[m]);
			continue;
		}
		if (arrOfArrays[m].length === 0) {
			continue;
		}
		if (checkIfHomogeneous(arrOfArrays[m]).includes(false)) {
			continue;
		} else {
			output.push(arrOfArrays[m]);
		}
	}
	return output;
}; */

// my refined solution
const returnHomogeneousArrays = function (arrOfArrays) {
  let output = [];
  function checkIfHomogeneous(arr) {
    const allStrings = arr.every((el) => {
      return typeof el === "string";
    });
    const allNumbers = arr.every((el) => {
      return typeof el === "number";
    });
    if ((allStrings && !allNumbers) || (allNumbers && !allStrings)) {
      return true;
    } else {
      return false;
    }
  }
  for (let m = 0; m < arrOfArrays.length; m++) {
    if (arrOfArrays[m].length === 1) {
      output.push(arrOfArrays[m]);
      continue;
    }
    if (arrOfArrays[m].length === 0) {
      continue;
    }
    if (checkIfHomogeneous(arrOfArrays[m])) {
      output.push(arrOfArrays[m]);
    } else {
      continue;
    }
  }
  return output;
};

const outputArray = returnHomogeneousArrays(inputArray);
console.log(outputArray);

function checkTypeOf(arr) {
  let allStrings = arr.every((el) => {
    return typeof el === "string";
  });
  let allNumbers = arr.every((el) => {
    return typeof el === "number";
  });
  if ((allStrings && !allNumbers) || (allNumbers && !allStrings)) {
    return true;
  } else {
    return false;
  }
}

const tArr = ["2", "1"];

const testCheck = checkTypeOf(tArr);
console.log(testCheck);
