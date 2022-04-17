// const str = "alaska";
const str1 = "hello";
const regex = /[asdfghjkl]/g;
//
// console.log(str.match(regex));
console.log(regex.test(str1));

function findWords(words) {
  const result = [];
  const FIRST_ROW = /[qwertyuiop]/g;
  const SECOND_ROW = /[asdfghjkl]/g;
  const THIRD_ROW = /[zxcvbnm]/g;

  for (let i = 0; i < words.length; i += 1) {
    const originalWord = words[i];
    const wordInLowerCase = originalWord.toLowerCase();

    const firstRowMatch = wordInLowerCase.match(FIRST_ROW);
    const secondRowMatch = wordInLowerCase.match(SECOND_ROW);
    const thirdRowMatch = wordInLowerCase.match(THIRD_ROW);

    if (firstRowMatch !== null && firstRowMatch.length === wordInLowerCase.length) {
      result.push(originalWord);
      continue;
    };

    if (secondRowMatch !== null && secondRowMatch.length === wordInLowerCase.length) {
      result.push(originalWord);
      continue;
    };

    if (thirdRowMatch !== null && thirdRowMatch.length === wordInLowerCase.length) {
      result.push(originalWord);
    };

  }

  return result;

}

console.log(findWords(["Hello","Alaska","Dad","Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf","sfd"]));
