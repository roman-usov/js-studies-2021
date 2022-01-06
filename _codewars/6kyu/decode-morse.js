"use strict";

const MORSE_CODE = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
  "...---...": "SOS",
};

const decodeMorse = function (code) {
  //array of encoded words out of the input string
  // const splitIntoWords = code.trim().split("   ");
  // console.log(splitIntoWords);

  //array of arrays where each subarray holds a word from the original string split by encoded character
  // const splitIntoCharacters = code
  //   .trim()
  //   .split("   ")
  //   .map((word) => word.split(" "));
  // console.log(splitIntoCharacters);

  function decodeWord(word) {
    return word
      .split(" ")
      .map((character) => MORSE_CODE[character])
      .join("");
  }

  return code
    .trim()
    .split("   ")
    .map((word) => decodeWord(word))
    .join(" ");

  // array of arrays where each subarray holds a word from the original string split by decoded character
  // const convertedCharacters = splitIntoCharacters.map((word) =>
  //   word.map((character) => MORSE_CODE[character])
  // );
  // console.log(convertedCharacters);
  //
  // array holding decoded words as elements
  // const charactersIntoWords = convertedCharacters.map((characters) =>
  //   characters.join("")
  // );
  // console.log(charactersIntoWords);
  //
  // final decoded string
  // const wordsIntoString = charactersIntoWords.join(" ");
  // console.log(wordsIntoString);
};

const result = decodeMorse("...---...");
console.log(result);

const decodeMorseClever = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("");
};

const input = "H E Y   J U D E";
const arr = input.split(/  | /);
console.log(arr);

console.log("ab".split("a"));
console.log("a".split("a"));

module.exports = decodeMorse;
