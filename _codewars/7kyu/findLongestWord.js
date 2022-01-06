"use strict";

const stringToProcess = "Take me to tinseltown with you";

function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0;
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

const longestWord = findLongest(stringToProcess);
console.log(longestWord);
