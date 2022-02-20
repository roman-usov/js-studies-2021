// Code violating the Liskov Substitution Principle

/* class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

// This function violates the Liskov Substitution Principle, because when we use it for a subclass it produces a different result

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseRectangleWidth(rectangle);
increaseRectangleWidth(square);

console.log(rectangle.area());
console.log(square.area()); */

// Code compliant with the Liskov Substitution Principle

class Shape {
  provide(area) {
    return area;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  setLength(length) {
    this.length = length;
  }

  area() {
    return this.length ** 2;
  }
}

function returnArea(shape) {
  return shape.provide(shape.area());
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5);

console.log(returnArea(rectangle));
console.log(returnArea(square));
