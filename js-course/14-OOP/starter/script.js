'use strict';

// Constructor Functions

/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(jonas instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();

console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapience';
console.log(jonas);
console.log(jonas.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
console.log(Person);
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
console.log(Person.prototype.constructor);

const arr = [1, 1, 2, 3, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(new Array(4, 5, 6, 7));

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

console.log(Array.prototype);

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);*/

////// OOP Challenge # 1

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.dir(Car);
console.log(car1);
console.log(car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.brake();*/

// car2.accelerate();
// car2.accelerate();
// car2.accelerate();
// car2.accelerate();

// ES6 Classes

// class expression
// const PersonCl = class {};

//class declaration
/*class PersonCl {
  constructor(firstName, birthYear, sex) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.sex = sex;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  addSalutation() {
    if (this.sex === 'male') this.salutation = 'Mr.';
    if (this.sex === 'female') this.salutation = 'Ms.';
  }
}*/

// PersonCl.prototype.addSalutation = function () {
//   if (this.sex === 'male') this.salutation = 'Mr.';
//   if (this.sex === 'female') this.salutation = 'Ms.';
// };

/*const pete = new PersonCl('Pete', 1988, 'male');
console.log(pete);
console.log(pete.__proto__);
console.log(PersonCl.prototype);
console.log(PersonCl.prototype.__proto__);

pete.addSalutation();
pete.calcAge();
console.log(pete);*/

/*const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear, sex) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.sex = sex;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  addSalutation() {
    if (this.sex === 'male') this.salutation = 'Mr.';
    if (this.sex === 'female') this.salutation = 'Ms.';
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const pete = new PersonCl('Pete Davis', 1988, 'male');

PersonCl.hey();

console.log(pete);
console.log(pete.age);
console.log(Array.from('123'));

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};*/

// Person.hey();

////// Object.create

/*const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1992);
console.log(sarah);*/

////// OOP Challenge # 2

/*class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speedMi) {
    this.speed = speedMi * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 120;
console.log(ford.speed);*/

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95); */

////// Class Inheritance

//// Inheritance Between Constructor Functions

/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
console.dir(Student);
console.dir(Student.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2003, 'Computing');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__.__proto__.__proto__);

console.dir(Student.prototype.constructor);

Student.prototype.constructor = Student;

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);*/

////// OOP Challenge # 3

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

console.log(Car);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
console.dir(EV);
console.log(EV.prototype);

EV.prototype.chargeTo = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} is going at ${this.speed} with a charge of ${this.charge}.`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
console.log(tesla.__proto__ === EV.prototype);
console.log(tesla instanceof EV);
console.log(tesla instanceof Car);
console.log(tesla instanceof Object);

tesla.accelerate();
console.log(tesla);
tesla.accelerate();
console.log(tesla);
tesla.brake();
console.log(tesla);
tesla.chargeTo(100);
console.log(tesla);*/

////// Inheritance between ES6 classes

/*class PersonCl {
  constructor(fullName, birthYear, sex) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.sex = sex;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  addSalutation() {
    if (this.sex === 'male') this.salutation = 'Mr.';
    if (this.sex === 'female') this.salutation = 'Ms.';
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, sex, course) {
    super(fullName, birthYear, sex);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear}, but as a student I feel like ${
        2037 - this.birthYear + 10
      }.`
    );
  }
}
// class StudentCl extends PersonCl {}
//
const martha = new StudentCl(
  'Martha Jones',
  2012,
  'female',
  'Computer Science'
);
console.log(martha);
martha.introduce();
martha.calcAge();*/

////// Inheritance between classes using Object.create()

/*const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);

jay.init('Jay Mary', 2012, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();*/

////// Another Class Example

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    console.log(`Thanks for opening an account, ${this.owner}`);
    this.#pin = pin;
  }

  // Public methods - public interface
  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
    return this;
  }
  withdraw(value) {
    this.deposit(-value);
    return this;
  }
  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Your loan for ${value} has been approved.`);
    } else {
      console.log(`Your loan request is too big.`);
    }
    return this;
  }

  static helper() {
    console.log(`This is a helper method`);
  }

  // Private methods
  _approveLoan(value) {
    return value <= this.#movements.reduce((acc, mov) => acc + mov, 0) * 0.1;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-200);
acc1.deposit(350);
acc1.withdraw(100);
acc1.requestLoan(20);
console.log(acc1);
console.log(acc1.getMovements());

////// Chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(100).withdraw(100);
console.log(acc1);

////// Challenge #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
    return this;
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed);
    return this;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge = this.#charge - 1;
    console.log(
      `${this.make} is going at ${this.speed} with a charge of ${this.#charge}.`
    );
    return this;
  }
}

const tesla = new EVCl('Tesla', 120, 23);
console.log(tesla);

tesla.accelerate().accelerate().brake().chargeBattery(100);
console.log(tesla);
// console.log(tesla);
// tesla.accelerate();
// console.log(tesla);
// tesla.brake();
// console.log(tesla);
// tesla.chargeBattery(100);
// console.log(tesla);
