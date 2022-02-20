// Abstract Command Class
class Command {
  execute() {}

  undo() {}
}

// Invoker
class Calculation {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undoCommand() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

// Receiver
class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}


class AddCommand extends Command {
  constructor(valueToAdd) {
    super();
    this.calculatorLogic = new Calculator();
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return this.calculatorLogic.add(currentValue, this.valueToAdd);

  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}



const calculationRequest = new Calculation();
// calculationRequest.executeCommand(new AddThenMultiplyCommand(10, 2));
calculationRequest.executeCommand(new AddCommand(10));
console.log(calculationRequest.value);
calculationRequest.undoCommand();
console.log(calculationRequest.value);

/* class SubtractCommand extends Command {
  constructor(valueToSubtract) {
    super();
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand extends Command {
  constructor(multiplier) {
    super();
    this.multiplier = multiplier;
  }

  execute(currentValue) {
    return currentValue * this.multiplier;
  }

  undo(currentValue) {
    return currentValue / this.multiplier;
  }
}

class DivideCommand extends Command {
  constructor(divider) {
    super();
    this.divider = divider;
  }

  execute(currentValue) {
    return currentValue / this.divider;
  }

  undo(currentValue) {
    return currentValue * this.divider;
  }
}

class AddThenMultiplyCommand extends Command {
  constructor(valueToAdd, multiplier) {
    super();
    this.addCommand = new AddCommand(valueToAdd);
    this.multiplyCommand = new MultiplyCommand(multiplier);
  }

  execute(currentValue) {
    const newValue = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(newValue);
  }

  undo(currentValue) {
    const newValue = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(newValue);
  }
} */