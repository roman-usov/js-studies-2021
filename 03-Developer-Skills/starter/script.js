// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
/*
const classmates = 5;
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
console.log(pagesToCopyForClass);
*/
/*
//PROBLEM 1
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, -1, -5, 0, 'error', 10, 23, 16, 18, 11, 8, 3];

//1) Understanding the problem
// - what is temperature amplitude: difference between highest and lowest temp
// - how to compute the max and min temperatures
// - what's a sensor error and what to do when one occurs

//2) Breaking up into sub-problems
// - How to ignore errors?
// - How to find max temp in an array?
// - How to find min temp in an array?
// - Subtract min from max (amplitude) and return it

const calculateTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue; //here we abort the current iteration and proceed to the next one if the type of the temps[i] value is not a number
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

//const amplitude = calculateTempAmplitude(temperatures);
//console.log(amplitude);

//PROBLEM 2
// We now need this function to work with 2 arrays.

//Understanding the problem
// - With 2 arrays, do we need to implement the same functionality twice? No, just merge two arrays

//2) Breaking up into sub-problems
// - How to merge two arrays?

const calculateTempAmplitudeFromTwoSets = function (set1, set2) {
  let mergedSet = set1.concat(set2);
  let max = mergedSet[0];
  let min = mergedSet[0];
  for (let i = 0; i < mergedSet.length; i++) {
    const currentValue = mergedSet[i];
    if (typeof currentValue !== 'number') continue; //here we abort the current iteration and proceed to the next one if the type of the temps[i] value is not a number
    if (currentValue > max) max = currentValue;
    if (currentValue < min) min = currentValue;
  }
  return max - min;
};

const amplitude = calculateTempAmplitudeFromTwoSets(
  temperatures1,
  temperatures2
);
console.log(amplitude);
 */

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // 3) Fix the bug
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // 2) Find the bug
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1) Identify the bug
console.log(measureKelvin()); */
/*
const temperatures1 = [3, 5, 1];
const temperatures2 = [9, 4, 5];

const calculateTempAmplitudeFromTwoSetsBug = function (set1, set2) {
  let mergedSet = set1.concat(set2);
  console.log(mergedSet);
  let max = 0;
  let min = 0;
  for (let i = 0; i < mergedSet.length; i++) {
    const currentValue = mergedSet[i];
    if (typeof currentValue !== 'number') continue; //here we abort the current iteration and proceed to the next one if the type of the temps[i] value is not a number
    if (currentValue > max) max = currentValue;
    if (currentValue < min) min = currentValue;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calculateTempAmplitudeFromTwoSetsBug(
  temperatures1,
  temperatures2
);
//1) Identify the bug
console.log(amplitudeBug);
 */
/*

********* Developer Skills, Coding Challenge 1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

1) Understanding the Problem

1.1. The array contains forecasted highs for the next few days
1.2. The number of items in an array is the number of days for which we have the forecast
1.3. We assume that the array has temperatures as numbers and is not empty; no additional validation needed
1.4. We want to populate the values from the array into the  console.log message one by one: the first value of the array is for the next day, the second - for the day after  tomorrow, and so on
1.5. We need to keep in mind that the value an position 0 will correspond to the forecast for tomorrow (in 1 days), and so on
1.6. We need to dynamically populate the console.log message based on the number of elements in the provided array
1.7. Template literals may be a good option to populate the give template with the values from the  provided array

2) Breaking into sub-problems

2.1. create arrays with the test data
2.2. create a function that takes in an array
2.3. create a for loop to extract values from the array
2.4. populate temperatures into the console.log message
2.4.1. for one value - one temperature, one day
2.4.2. research how to populate console.log with values from the for loop
2.4.2. for many values - temperatures, days based on the number of elements in the array
2.5. create the return part of the function with the console.log message template
2.6. test the function

3) Write pseudo code

function printForecast(arr) {
  for (arr) {
    extract each temperature
    associate day number
    insert each temperature into the message
    insert each day number into the message
  }
  return message
}

4) Research

can use the join method to merge elements in an array

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

*/

const tempRange1 = [17, 21, 23];
const tempRange2 = [12, 5, -5, 0, 4];

const printTemperatures = function (arr) {
  let message;
  let messageElements = ['...'];
  for (let i = arr.length - 1; i >= 0; i = i - 1) {
    messageElements.unshift(`...${arr[i]}ºC in ${i + 1} days`);
  }
  message = messageElements.join('');
  console.log(message);
};

const printTemperaturesSimple = function (arr) {
  let message = '...';
  for (let i = 0; i < arr.length; i++) {
    message += `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log(message);
};

const temperatureForecastSimple = printTemperatures(tempRange2);

// const testArray = ['...'];
// testArray.unshift('test');
// console.log(testArray);

const arrayWithValues = ['merge', 'array', 'values'];
let stringMessage = '';
for (let i = 0; i < arrayWithValues; i++) {
  stringMessage += `${arrayWithValues[i]} `;
}
