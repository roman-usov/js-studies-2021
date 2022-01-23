const inputStr1 = "А роза упала, на лапу Азора!";
const inputStr2 = "Революция";

const resultTrue = true;
const resultFalse = false;

function isPalindrome(str) {
  const strInLowerCase = str.toLowerCase();

  let startIndex = 0;
  let endIndex = strInLowerCase.length - 1;

  while (startIndex !== endIndex) {
    const startChar = strInLowerCase[startIndex];
    const endChar = strInLowerCase[endIndex];

    if (isLetter(startChar) && isLetter(endChar)) {
      if (startChar !== endChar) {
        return false;
      } else {
        startIndex += 1;
        endIndex -= 1;
      }
    } else {
      if (!isLetter(startChar)) {
        startIndex += 1;
      } else {
        endIndex -= 1;
      }
    }
  }

  return true;
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

console.assert(isPalindrome(inputStr1) === resultTrue, "Should be true");
console.assert(isPalindrome(inputStr2) === resultFalse, "Should be true");
