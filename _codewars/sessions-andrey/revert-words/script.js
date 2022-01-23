// revertWords("Dog cat mouse") -> "goD tac esuom"

const inputString = "Dog cat mouse";
const expectedResult = "goD tac esuom";

function revertWords(str) {
  let reversedStr = "";
  let curStr = "";

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== " ") {
      curStr = str[i] + curStr;
    } else {
      reversedStr = `${reversedStr}${curStr} `;
      curStr = "";
    }
  }

  reversedStr = `${reversedStr}${curStr}`;

  return reversedStr;
}

console.assert(
  revertWords(inputString) === expectedResult,
  "Should be: goD tac esuom"
);
