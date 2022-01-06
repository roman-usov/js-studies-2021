"use strict";

const inputString = "bitcoin take over the world maybe who knows perhaps";

function findShortestWord(str) {
  let lengths = [];
  str.split(" ").forEach((el) => lengths.push(el.length));
  return Math.min(...lengths);
}

const shortest = findShortestWord(inputString);
