"use strict";

const string1 = "xyaabbbccccdefww";
const string2 = "xxxxyyyyabklmopq";

const createLongestSortedString = function (str1, str2) {
  return [...new Set(str1 + str2)].sort().join("");
};

const outputString = createLongestSortedString(string1, string2);
console.log(outputString);
