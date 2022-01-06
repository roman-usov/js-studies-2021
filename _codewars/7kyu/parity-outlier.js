"use strict";

const inputArrays = new Map([
  [[2, 4, 0, 100, 4, 11, 2602, 36], 11],
  [[160, 3, 1719, 19, 11, 13, -21], 160],
  [
    [
      115402934, -94731620, -62146586, 121981084, 97494278, 90214954, 2147938,
      -185427916, -155266176, -106410740, 197983082, -140069598, -10805693,
      142549922, -102256436, 168683456, -40326958, -103654152, 5734482,
      -43015760, -28282484, 129478984, 150939106, 131458626, -157159028,
      -130694384, -15613774, 180567380, -164834436, -110973402, 122927984,
      165629782, -150466060, -128482198, 82889302, 97629942, -89350354,
      -162263654,
    ],
    -10805693,
  ],
]);

// console.log(inputArrays);
// console.log([...inputArrays.keys()][0]);

/*const findParityOutlier = function (arr) {
  function isOddArr(inputArr) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < inputArr.length; i++) {
      if (oddCount > 1 || evenCount > 1) break;
      if (inputArr[i] % 2 !== 0) {
        oddCount++;
      } else {
        evenCount++;
      }
    }
    return oddCount > 1 ? true : false;
  }
  const odd = isOddArr(arr);
  if (odd) {
    return arr.filter((el) => el % 2 === 0)[0];
  } else {
    return arr.filter((el) => el % 2 !== 0)[0];
  }
};*/

const findParityOutlier = function (arr) {
  const odd = arr.filter((integer) => integer % 2 !== 0);
  const even = arr.filter((integer) => integer % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
};

// const testFiltering = [2, 4, 0, 100, 4, 11, 2602, 36].filter(
//   (integer) => integer % 2 > 0
// );
// console.log(testFiltering);

// function oddOrEvenArr(arr) {
//   let oddCount = 0;
//   let evenCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (oddCount >= 2 || evenCount >= 2) break;
//     if (arr[i] % 2 > 0) {
//       oddCount++;
//     } else {
//       evenCount++;
//     }
//   }
//   return oddCount >= 2 ? "oddArray" : "evenArray";
// }

// const result = findParityOutlier([
//   115402934, -94731620, -62146586, 121981084, 97494278, 90214954, 2147938,
//   -185427916, -155266176, -106410740, 197983082, -140069598, -10805693,
//   142549922, -102256436, 168683456, -40326958, -103654152, 5734482, -43015760,
//   -28282484, 129478984, 150939106, 131458626, -157159028, -130694384, -15613774,
//   180567380, -164834436, -110973402, 122927984, 165629782, -150466060,
//   -128482198, 82889302, 97629942, -89350354, -162263654,
// ]);
//
// console.log(result);
//
// console.log(-21 % 2);

const testOutlier = function (inputData) {
  const outlierResults = [...inputData.keys()].map((arr) =>
    findParityOutlier(arr)
  );
  outlierResults.forEach((outlier, i) => {
    console.log(
      outlier === [...inputArrays.values()][i],
      [...inputArrays.values()][i],
      outlier
    );
  });
};

testOutlier(inputArrays);

console.log("test");
