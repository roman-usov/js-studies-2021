"use strict";

function idEvenNumber(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      continue;
    }
  }
  return evens;
}

function idNumbersEndInFive(arr) {
  let numbersEndInFive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      numbersEndInFive.push(arr[i]);
    } else {
      continue;
    }
  }
  return numbersEndInFive;
}

function mergeArraysUniqueOnly(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  arr1.sort((a, b) => a - b);
  return arr1;
}

function removeElementFromArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      let a = arr1.indexOf(arr2[i]);
      arr1.splice(a, 1);
    } else {
      continue;
    }
  }
  return arr1;
}

function getLastDigit(number) {
  const numberAsString = number.toString();
  const lastDigitFromString = numberAsString.slice(-1);
  const lastDigit = Number(lastDigitFromString);
  return lastDigit;
}

function produceArrayOfLastDigits(arr) {
  let lastDigits = [];
  for (let i = 0; i < arr.length; i++) {
    lastDigits.push(getLastDigit(arr[i]));
  }
  return lastDigits;
}

function getProductOfNumbers(arr) {
  let resultingNumber = 1;
  for (let i = 0; i < arr.length; i++) {
    resultingNumber *= arr[i];
  }
  return resultingNumber;
}

function removeLastElementFromArray(arr) {
  arr.splice(arr.length - 1, 1);
  return arr;
}

function getProductOfNumbersToNine(arr) {
  let resultingParams = {};
  let arrOfNumbers = arr;
  let productOfNumbers = getProductOfNumbers(arrOfNumbers);
  let lastDigitOfProductOfNumbers = getLastDigit(productOfNumbers);
  let removedNumbers = [];
  if (lastDigitOfProductOfNumbers !== 9) {
    while (lastDigitOfProductOfNumbers !== 9) {
      removedNumbers.push(arrOfNumbers[arrOfNumbers.length - 1]);
      arrOfNumbers = removeLastElementFromArray(arrOfNumbers);
      productOfNumbers = getProductOfNumbers(arrOfNumbers);
      lastDigitOfProductOfNumbers = getLastDigit(productOfNumbers);
    }
    resultingParams["resultingArray"] = arrOfNumbers;
    resultingParams["resultingNumber"] = productOfNumbers;
    resultingParams["lastDigit"] = lastDigitOfProductOfNumbers;
    removedNumbers.sort((a, b) => a - b);
    resultingParams["removedNumbers"] = removedNumbers;
  }
  resultingParams["resultingArray"] = arrOfNumbers;
  resultingParams["resultingNumber"] = productOfNumbers;
  resultingParams["lastDigit"] = lastDigitOfProductOfNumbers;
  resultingParams["removedNumbers"] = removedNumbers;

  return resultingParams;
}

const rowOfIntegers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
];

const integersWithTheProductOfNine = function (arrayOfIntegers) {
  let results = {};
  results["inputArray"] = arrayOfIntegers;

  let arrayToManipulate = [];
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    arrayToManipulate.push(arrayOfIntegers[i]);
  }

  const evenNumbers = idEvenNumber(arrayToManipulate);

  let evenNumbersToManipulate = [];
  for (let i = 0; i < evenNumbers.length; i++) {
    evenNumbersToManipulate.push(evenNumbers[i]);
  }

  const numbersEndingInFive = idNumbersEndInFive(arrayToManipulate);

  const mergedNumbersToRemove = mergeArraysUniqueOnly(
    evenNumbersToManipulate,
    numbersEndingInFive
  );

  const remainingNumbers = removeElementFromArray(
    arrayToManipulate,
    mergedNumbersToRemove
  );

  const lastDigitsOfRemainingNumbers =
    produceArrayOfLastDigits(remainingNumbers);

  const uniqueLastDigits = lastDigitsOfRemainingNumbers.filter(function (
    el,
    index
  ) {
    return lastDigitsOfRemainingNumbers.indexOf(el) === index;
  });

  let remainingNumbersToManipulate = [];
  for (let i = 0; i < remainingNumbers.length; i++) {
    remainingNumbersToManipulate.push(remainingNumbers[i]);
  }

  const answer = getProductOfNumbersToNine(remainingNumbersToManipulate);

  for (let i = 0; i < answer.removedNumbers.length; i++) {
    mergedNumbersToRemove.push(answer.removedNumbers[i]);
  }

  mergedNumbersToRemove.sort((a, b) => a - b);

  const howManyToRemove = mergedNumbersToRemove.length;

  results["evenNumbers"] = evenNumbers;
  results["numbersEndingInFive"] = numbersEndingInFive;
  results["mergedNumbersToRemove"] = mergedNumbersToRemove;
  results["howManyToRemove"] = howManyToRemove;
  results["remainingNumbers"] = remainingNumbers;
  results["lastDigitsOfRemainingNumbers"] = lastDigitsOfRemainingNumbers;
  results["uniqueLastDigits"] = uniqueLastDigits;
  results["answer"] = answer;

  return results;
};

let test = integersWithTheProductOfNine(rowOfIntegers);
console.log(test);
