/* class Stack {
  stack = [];

  addToStack(num) {
    this.stack[this.stack.length] = num;
  }

  removeFromStack() {
    this.stack.length -= 1;
  }
}

const newStack = new Stack();
newStack.addToStack(2);

newStack.removeFromStack(); */

function countBrackets(string) {
  let counter_1 = 0;
  let counter_2 = 0;
  let counter_3 = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") counter_1 += 1;
    if (string[i] === ")") counter_1 -= 1;
    if (string[i] === "[") counter_2 += 1;
    if (string[i] === "]") counter_2 -= 1;
    if (string[i] === "{") counter_3 += 1;
    if (string[i] === "}") counter_3 -= 1;
    if (counter_1 < 0 || counter_2 < 0 || counter_3 < 0) return false;
  }
  return counter_1 === 0 && counter_2 === 0 && counter_3 === 0;
}

/* function countBracketsStack(string) {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") stack.push(string[i]);
    if (string[i] === ")" && !stack.pop()) return false;

    if (string[i] === "[") stack.push(string[i]);
    if (string[i] === "]" && !stack.pop()) return false;

    if (string[i] === "{") stack.push(string[i]);
    if (string[i] === "}" && !stack.pop()) return false;
  }
  
  return stack.length === 0;            
} */

function countBracketsStack(string) {
  let stack = [];
  const OPENING_BRACKETS = ["(", "{", "["];
  const CLOSING_BRACKETS = [")", "}", "]"];

  for (let i = 0; i < string.length; i++) {
    if (OPENING_BRACKETS.includes(string[i])) stack.push(string[i]);
    if (CLOSING_BRACKETS.includes(string[i])) {
        const lastOpenedParenth = stack.pop();
        
        if(string[i] === ")" && lastOpenedParenth !== "(") return false;
        if(string[i] === "]" && lastOpenedParenth !== "[") return false;
        if(string[i] === "}" && lastOpenedParenth !== "{") return false;
    }
  
  }
  
  return stack.length === 0;
}

console.log(countBracketsStack("(){}[]")); //true
console.log(countBracketsStack("((({}{[]")); //false
console.log(countBracketsStack("(())((()())())")); //true
console.log(countBracketsStack(")(())(")); // false
console.log(countBracketsStack("()()()(())(")); //false

