function backspaceCompare(s, t) {
  const stackS = [];
  const stackT = [];
  const maxLength = Math.max(s.length,t.length);
  for (let i = 0; i < maxLength; i++) {
    s[i] === "#" ? stackS.pop() : stackS.push(s[i]);
    t[i] === "#" ? stackT.pop() : stackT.push(t[i]);
    console.log("counter", i);
    console.log("stackS", stackS.join(""));
    console.log("stackT", stackT.join(""));
  }
  return stackS.join("") === stackT.join("");
}

// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab#dfe#c", "adwe#"));
// console.log(backspaceCompare("ab#d#", "ad#"));
// console.log(backspaceCompare("#ab#c", "#ad#c"));
console.log(backspaceCompare("e##e#o##oyof##q", "e##e#fq##o##oyof##q"));
