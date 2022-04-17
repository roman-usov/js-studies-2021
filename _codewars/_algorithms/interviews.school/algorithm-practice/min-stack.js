class MinStack {
  stack = [];
}

MinStack.prototype.push = function (val) {
  //this.stack.push(val);
  this.stack[this.stack.length] = val;
  console.log(this.stack);
}

MinStack.prototype.pop = function () {
  //this.stack.pop();
  this.stack.splice(this.stack.length - 1, 1);
  console.log(this.stack);
}

MinStack.prototype.top = function () {
  console.log(this.stack[this.stack.length - 1]);
  return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function () {
  console.log(Math.min(...this.stack));
  return Math.min(...this.stack);
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2