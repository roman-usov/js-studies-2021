"use strict";

const anagrams1 = (word, words) => {
  return words.slice().filter((string, i) => {
    if (word.split("").sort().join("") === string.split("").sort().join(""))
      return words[i];
  });
};

const anagrams2 = (word, words) => {
  return words.filter(
    (string) =>
      word.split("").sort().join("") === string.split("").sort().join("")
  );
};

String.prototype.sort = function () {
  return this.split("").sort().join();
};

const anagrams3 = (word, words) => {
  return words.slice().filter((string, i) => word.sort() === string.sort());
};

console.log(anagrams2("abba", ["aabb", "abcd", "bbaa", "dada"]));

module.exports = anagrams3;
