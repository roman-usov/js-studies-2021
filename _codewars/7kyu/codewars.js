"use strict";
//School Paperwork
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//const { default: axios } = require("axios");

/* const classmates = 5;
const pages = 5;

const calculateBlankPages = function (classmates, pages) {
  //Option 1
  //   let totalPages;
  //   if (classmates > 0 && pages > 0) {
  //     totalPages = classmates * pages;
  //     return totalPages;
  //   } else {
  //     return 0;
  //   }
  //Option 2
  return classmates > 0 && pages > 0 ? classmates * pages : 0;
};

//Option 3
const calcPages = (n, m) => Math.max(0, n) * Math.max(0, m);

let pagesToCopy = calculateBlankPages(classmates, pages);
console.log(pagesToCopy);

let pagesToCopyForClass = calcPages(classmates, pages);
console.log(pagesToCopyForClass); */

//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.
//Example: h = 0, m = 1, s = 1 => result = 61000

/*
Questions
Does the function need to take in a particular reading of the clock?
Do we need to calculate how much time has passed since midnight? E.g. if it's 2:53:13am, it means that 2 hours 53 minutes and 13 seconds have passed since midnight, and we need to convert the time passed to milliseconds?
 */

/*
Decomposition
Write an empty body of a function that can take in hours, minutes and seconds as arguments, basically, the reading of a clock, the time that has passed after midnight.
Check if the hour value is within the allowed range
Check if the minute value is within the allowed range
Check if the second value is within the allowed range
Process an exception if the passed values are outside the allowed ranges
Convert hours into milliseconds => h*60*60*1000
Convert minutes into milliseconds => m*60*1000
Convert seconds into milliseconds => s*1000
Sum the converted h, m, s
Return the resulting time value in milliseconds
 */
/*
let hours = 0;
let minutes = 1;
let seconds = 1;
let clockReading;
let timeInMilliseconds;

const checkTimeValues = function (h, m, s) {
  if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    return true;
  } else {
    return false;
  }
};

const displayClockReading = function (h, m, s) {
  let hour;
  let minute;
  let second;
  const isTimeValid = checkTimeValues(h, m, s);
  if (isTimeValid) {
    h.toString().length < 2 ? (hour = "0" + h) : (hour = h.toString());
    m.toString().length < 2 ? (minute = "0" + m) : (minute = m.toString());
    s.toString().length < 2 ? (second = "0" + s) : (second = s.toString());
    return `${hour}:${minute}:${second}`;
  } else {
    return `Wrong time values.`;
  }
};

const calculateTimeInMilliseconds = function (h, m, s) {
  // const checkTimeValues = function (h, m, s) {
  //   if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  const isTimeValid = checkTimeValues(h, m, s);
  if (isTimeValid) {
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  } else {
    return `Wrong time values.`;
  }
};

clockReading = displayClockReading(hours, minutes, seconds);
console.log(clockReading);

timeInMilliseconds = calculateTimeInMilliseconds(hours, minutes, seconds);
console.log(timeInMilliseconds);

function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  return setTime - midnight;
}

console.log(
  new Date().setHours(hours, minutes, seconds) - new Date().setHours(0, 0, 0)
);

console.log(Date());
console.log(new Date());
console.log(Date.now());
 */

/*

******* Beginner's Series#3 Sum of Numbers *******

Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

1) Understanding the problem
- need to find all integers between two numbers
- need to sum them
- if the two integers are equal, return any

2) Dividing into sub-problems
2.1. Check if the two integers are equal. If they are, return the first one. If not, proceed.
2.2. Find the smaller of the two. Sum it to a sum variable.
2.3. Add 1 to the sum value and check if it's equal to the bigger one. If not, add the sum + 1 value to the sum variable. Use the while loop to iterate until the sum is equal to the bigger one.
2.4. When the sum is equal to the bigger one, stop the loop, add the bigger one to the sum variable.
2.5. Return the sum variable value

3) Writing pseudo code
function (a,b) {
  sum
  lastInteger
  firstInteger
  nextInteger
  if a === b => return a
  if a < b => firstInteger = a, nextInteger = a, lastInteger = b  else firstInteger = b, nextInteger = b, lastInteger = a

  start loop
  while nextInteger < lastInteger - 1
  nextInteger = nextInteger + 1 //1+1, 2+1
  sum = sum + nextInteger //1+2, 1+2+3
  end loop

  sum = sum + lastInteger
  return sum
}
1, 4
1 + 2 + 3 + 4 = 10


*/

/* const sumOfIntegers = function (a, b) {
  let sum;
  let lastInteger;
  let nextInteger;
  if (typeof a !== "number" || typeof b !== "number") {
    sum = -1;
  } else if (a === b) {
    sum = a;
  } else if (a < b) {
    lastInteger = b;
    nextInteger = a;
    sum = a;
  } else {
    lastInteger = a;
    nextInteger = b;
    sum = b;
  }
  while (nextInteger < lastInteger - 1) {
    nextInteger++;
    sum += nextInteger;
  }
  sum += lastInteger;
  return sum;
}; */

/* const integerSum = sumOfIntegers("brown", -1);
console.log(integerSum); */

/* const sumOfIntegers = function (a, b) {
  let sum;
  let lastInteger;
  let nextInteger;
  const sumIntegers = function (smallerInteger, biggerInteger) {
    let total = smallerInteger;
    let next = smallerInteger;
    while (next < biggerInteger - 1) {
      next++;
      total += next;
    }
    total += biggerInteger;
    return total;
  };
  if (typeof a !== "number" || typeof b !== "number") {
    sum = -1;
  } else if (a === b) {
    sum = a;
  } else if (a < b) {
    lastInteger = b;
    nextInteger = a;
    sum = sumIntegers(nextInteger, lastInteger);
  } else {
    lastInteger = a;
    nextInteger = b;
    sum = sumIntegers(nextInteger, lastInteger);
  }
  return sum;
};

const integerSumV2 = sumOfIntegers(-1, 5);
console.log(integerSumV2);
console.log(-1 + 0 + 1 + 2 + 3 + 4); */

/* const sumOfIntegers = function (a, b) {
  // The formula to sum a series of integers is
  // n * (max + min) / 2, where n is the length of the series.
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  let sum;
  if (typeof a !== "number" || typeof b !== "number") {
    sum = -1;
  } else if (a === b) {
    sum = a;
  } else {
    sum = ((max - min + 1) * (max + min)) / 2;
  }
  return sum;
};

const integerSum = sumOfIntegers(-1, 5);
console.log(integerSum);
 */

/*
******* Beginner's Series#4 Cockroach *******

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

Example:

1.08 --> 30

1) Understand the problem
- the input number can be a real number (integer, fraction...) that is greater than or equal to 0
- the result, however, should be an integer, so we basically need to round our calculation result down to an integer (floor it)
- the input number in km/h should be converted to cm/s

2) Split the problem into sub-problems
2.1. make sure the input value is a number greater than or equal to zero
2.2. convert kilometers into cm
2.3. convert convert the hour value into seconds
2.4. divide the distance in cm by the number of seconds in an hour
2.5. round down the result
2.6. return the result

3) Write pseudo-code

kmHourToCmSec function (km) {
  typeof km == number && km >= 0 ? continue : return error
  1 km = 1,000 m = 100,000 cm
  km => cm = km * 100,000
  1 hour = 60 min = 3,600 sec
  cm/sec = km => cm / 3,600
  rounddown(cm/sec)
  return rounddown(cm/sec)
}

4) Research
Round a number downward to its nearest integer
Math.floor(1.6) => 1

5) Implement the solution in code

*/

/*
const kmHourToCmSec = function (km) {
  if (typeof km == "number" && km >= 0) {
    return Math.floor((km * 100000) / 3600);
  } else {
    return -1;
  }
};

const cockroachSpeed = kmHourToCmSec("notANumber");
console.log(cockroachSpeed);
 */

/*

******* Is there a vowel in there? ***********

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u). If they are, change the array value to a string of that vowel.
Return the resulting array.

*/

/*
const checkForVowels = function (arr) {
  //store key-value pairs against which to check in a vowels object
  const vowels = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };
  for (let i = 0; i < arr.length; i++) {
    //check if the value from the array has a corresponding key in the vowels object
    if (vowels.hasOwnProperty(arr[i])) {
      //identify the index value (position) of teh arr element being checked
      const indexOfArrElement = arr.indexOf(arr[i]);
      //identify the element to be replaced by its index and assign the corresponding value from the vowels object
      arr[indexOfArrElement] = vowels[arr[i]];
    }
  }
  return arr;
};

console.log(checkForVowels([97, 101, 3, 117]));
*/

/////// Sort and Star ///////

/* const figureArray = [
  99,
  95,
  94,
  92,
  88,
  87,
  86,
  85,
  84,
  79,
  76,
  72,
  71,
  69,
  66,
  65,
  64,
  61,
  60,
  59,
  58,
  57,
  54,
  50,
  49,
  46,
  44,
  42,
  40,
  39,
  37,
  36,
  32,
  31,
  29,
  28,
  26,
  24,
  22,
  21,
  19,
  18,
  15,
  14,
  13,
  12,
  10,
  5,
  3,
  2,
]; */

//2,50,7,7,5,8,7
//2,7,50,7,5,8,7
//2,7,7,50,5,8,7
//2,7,7,5,50,8,7
//2,7,7,5,8,50,7
//2,7,7,5,8,7,50

/* const sortFigureArray = function (arrWithNumbers) {
  let counter = 0;
  while (counter < arrWithNumbers.length) {
    for (i = 0; i < arrWithNumbers.length; i++) {
      let a = arrWithNumbers[i];
      let b = arrWithNumbers[i + 1];
      if (a < b) {
        arrWithNumbers[i] = a;
        arrWithNumbers[i + 1] = b;
      }
      if (b < a) {
        arrWithNumbers[i] = b;
        arrWithNumbers[i + 1] = a;
      } else {
        continue;
      }
    }
    counter += 1;
    //console.log(counter);
  }

  return arrWithNumbers;
};

const sortedArray = sortFigureArray(figureArray);
console.log(sortedArray); */

//const wordSortTestArray = ["test", "mango", "Test"];

//console.log(wordSortTestArray[0].length);

/* const sortWordArray = function (inputArray) {
  //function to test, which of the two words should be sorted up
  const identifyWhichWordGoesFirst = function (string1, string2) {
    let a = 0;
    let b = 0;
    while (a < string1.length && b < string2.length) {
      let m = string1[a];
      let n = string2[b];
      if (m < n) {
        return string1;
      } else if (n < m) {
        return string2;
      } else {
        a++;
        b++;
      }
    }
  };
  let counter = 0;
  while (counter < inputArray.length - 1) {
    for (let i = 0; i < inputArray.length - 1; i++) {
      let word1 = inputArray[i];
      let word2 = inputArray[i + 1];
      let wordToSortUp = identifyWhichWordGoesFirst(word1, word2);
      //console.log(wordToSortUp);
      if (wordToSortUp === word1) {
        inputArray[i] = word1;
        inputArray[i + 1] = word2;
        //console.log("word1", inputArray);
      } else if (wordToSortUp === word2) {
        inputArray[i] = word2;
        inputArray[i + 1] = word1;
        //console.log("word2", inputArray);
      }
    }
    counter = counter + 1;
    //console.log(counter);
  }
  return inputArray;
};

const testWordSort = sortWordArray(wordSortTestArray);
console.log(testWordSort); */

/* const sortWordArray = function (inputArray) {
  //function to test, which of the two words should be sorted up
  const identifyWhichWordGoesFirst = function (string1, string2) {
    let a = 0;
    let b = 0;
    while (a < string1.length && b < string2.length) {
      let m = string1.charCodeAt(a);
      let n = string2.charCodeAt(b);
      if (m < n) {
        return string1;
      } else if (n < m) {
        return string2;
      } else {
        a++;
        b++;
      }
    }
  };

  //function that takes in a string and returns the string with asterisks between its letters
  const insertAsterisks = function (str) {
    let newString = "";
    for (let i = 0; i < str.length - 1; i++) {
      newString = newString + str[i] + "***";
    }
    newString = newString + str[str.length - 1];
    return newString;
  };

  // a while loop that sorts the input array using the identifyWhichWordGoesFirst function
  let counter = 0;
  while (counter < inputArray.length - 1) {
    for (let i = 0; i < inputArray.length - 1; i++) {
      let word1 = inputArray[i];
      let word2 = inputArray[i + 1];
      let wordToSortUp = identifyWhichWordGoesFirst(word1, word2);
      //console.log(wordToSortUp);
      if (wordToSortUp === word1) {
        inputArray[i] = word1;
        inputArray[i + 1] = word2;
        //console.log("word1", inputArray);
      } else if (wordToSortUp === word2) {
        inputArray[i] = word2;
        inputArray[i + 1] = word1;
        //console.log("word2", inputArray);
      }
    }
    counter = counter + 1;
    //console.log(counter);
  }
  let stringToReturn = insertAsterisks(inputArray[0]);
  return stringToReturn;
};

const testWordSort = sortWordArray(wordSortTestArray);
console.log(testWordSort); */

/* const insertAsterisks = function (str) {
  let newString = "";
  for (let i = 0; i < str.length - 1; i++) {
    newString = newString + str[i] + "***";
  }
  newString = newString + str[str.length - 1];
  return newString;
};

let stringWithAsterisks = insertAsterisks("train");
console.log(stringWithAsterisks); */
/*
const sortWordArray = function (inputArray) {
  inputArray.sort();
  const insertAsterisks = function (str) {
    let newString = "";
    for (let i = 0; i < str.length - 1; i++) {
      newString += str[i] + "***";
    }
    newString += str[str.length - 1];
    return newString;
  };
  let stringToReturn = insertAsterisks(inputArray[0]);
  return stringToReturn;
};

const testWordSort = sortWordArray(wordSortTestArray);
console.log(testWordSort);

const numberListToSort = [40, 100, 1, 5, 5, 25, 10];
numberListToSort.sort((a, b) => b - a);
console.log(numberListToSort);

const numberListToSort1 = ["40", "100", "1", "5", "5", "25", "10"];
numberListToSort1.sort((a, b) => a - b);
console.log(numberListToSort1);

const wordSortArray = ["test", "car", "apple", "rest"];
wordSortArray.sort();
console.log(wordSortArray);
wordSortArray.reverse();
console.log(wordSortArray);

Array.prototype.swap = function (x, y) {
  let a = this[x];
  this[x] = this[y];
  this[y] = a;
  return this;
};

let myArray = [1, 2, 4, 6];
/* let a = myArray[0];
myArray[0] = myArray[1];
myArray[1] = a; */

/* myArray.swap(0, 1);
console.log(myArray);

let myString = "treasure";
let splitArray = myString.split("");
console.log(splitArray);

let myArray1 = [1, 2, 4, 6];
let myNewArray = myArray1.splice(0, 1, 25);
console.log(myArray1);
let myNewArray1 = myArray1.splice(-1, 1, 56);
console.log(myArray1);

let arrayWithJoin = ["My", "studies", "are", "great"];
let myMotto = arrayWithJoin.join(" ");
console.log(myMotto); */

////// Will there be enough space ///////

/* let maxCapacity = 60;
let currentlyOn = 21;
let currentlyWaiting = 40;

const calcHowManyCanBoard = function (cap, on, wait) {
  let availableSeats = cap - on;
  if (cap === on) {
    return wait;
  } else if (availableSeats >= wait) {
    return 0;
  } else if (availableSeats < wait) {
    return wait - availableSeats;
  }
};

let availableSeats = calcHowManyCanBoard(
  maxCapacity,
  currentlyOn,
  currentlyWaiting
);
console.log(availableSeats); */

////////// Transportation on Vacation ////////
