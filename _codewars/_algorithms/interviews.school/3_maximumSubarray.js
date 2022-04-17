/*
      Кейс1: сумма currentMaxValue и currentValue больше чем текущий currentMaxValue
      Это означает, что мы продолжаем работать с текущи последовательным подмассивом чисел, исходим из того, что он может дать максимальную сумму.

      Кейс2: currentValue больше суммы currentMaxValue и currentValue
      Это означает, что для текущего последовательного подмассива уже определена максимально возможная сумма, и мы переходим к следующему подмассиву. 
*/

const input = [5, 4, -1, 7, 8];
const input2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const input3 = [-2, 1, -3, 4, -1, 2, 1, -5, 100];
const input4 = [1];
const input5 = [-1];
const input6 = [-2, 1]; //last element is greater than the total max
const input7 = [-1, 1, 100];
const input8 = [1, -1, 100];

function maxSubarray(arr) {
  const firstNumber = arr[0];
  let totalMaxValue = firstNumber;
  let currentMaxValue = firstNumber;
  let counter = 1;

  while (counter < arr.length) {
    console.log("Current counter:", counter);

    const currentValue = arr[counter];
    console.log("Current value:", currentValue);

    const newMaxValue = currentMaxValue + currentValue;
    console.log(
      `current value ${currentValue} + current max value ${currentMaxValue} = new max value ${newMaxValue}`
    );

    if (newMaxValue > currentValue) {
        currentMaxValue = newMaxValue;

    } else if (currentValue >= newMaxValue) {
      currentMaxValue = currentValue;
    }

    console.log("assigned current max:", currentMaxValue);

    if (currentMaxValue > totalMaxValue) {
      totalMaxValue = currentMaxValue;
    }

    console.log("new total max value:", totalMaxValue);
    console.log("new current max value", currentMaxValue);

    counter += 1;
  }

  return totalMaxValue;
}

// console.log(maxSubarray(input));
// console.log(maxSubarray(input2));
// console.log(maxSubarray(input3));
// console.log(maxSubarray(input4));
// console.log(maxSubarray(input5));
// console.log(maxSubarray(input6));
console.log(maxSubarray(input7));
// console.log(maxSubarray(input8));

// больше 0 или меньше самого себя

// [5, 4, -1, 7]
// acc = 0

// 1: 5
// acc 0 > acc + 5

// acc = 5
// acc 5 > acc + 4

// acc = 9
// acc 9 > acc + -1

// acc 9
// acc 9 > acc + 7

// const maximumSubarraySum = function (numbers) {
//   if (
//     numbers == undefined ||
//     numbers.every((el) => el < 0) ||
//     numbers.length === 0
//   )
//     return 0;

//   const nums = numbers.slice();

//   let globalMax = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let localSums = [];

//     localSums.push(nums[i]);

//     const sumItems = nums.slice(i + 1);
//     console.log("sumItems", sumItems);

//     for (let j = 0; j < sumItems.length; j++) {
//       console.log("start iteration j =", j);

//       const currentSumItem = sumItems[j];
//       console.log("currentSumItem", currentSumItem);

//       const lastItemOfLocalSums = localSums[localSums.length - 1];
//       console.log("lastItemOfLocalSums", lastItemOfLocalSums);

//       const nextSum = lastItemOfLocalSums + currentSumItem;
//       console.log("nextSum", nextSum);

//       localSums.push(nextSum);
//       console.log("localSum after iteration", j, localSums);
//     }

//     const localMax = Math.max(...localSums);

//     if (localMax > globalMax) globalMax = localMax;
//     console.log('globalMax', globalMax);
//   }
//   return globalMax;
// };

// console.log(maximumSubarraySum(input));
// console.log(maximumSubarraySum(input2));
// console.log(maximumSubarraySum(input3));
// console.log(maximumSubarraySum(input4));
// console.log(maximumSubarraySum(input5));
// console.log(maximumSubarraySum(input6));

// if (currentValue >= newMaxValue) {
//   currentMaxValue = currentValue;
//   totalSumValues = [...currentSumValues];
//   sumValues = [];
//   sumValues.push(currentValue);
//   console.log("sum values, currentValue >", sumValues);
// } else {
//   currentMaxValue = newMaxValue;
//   sumValues.push(currentValue);
//   console.log("sum values, newMaxValue >", sumValues);
// }

// currentMaxValue = currentValue > newMaxValue ? currentValue : newMaxValue;

function divideConqueror(array) {
  const part_1 = array.slice(0, Math.floor(array.length / 2))
  const part_2 = array.slice(0, Math.floor(array.length / 2))
}