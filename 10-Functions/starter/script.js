'use strict';

// const bookings = [];
// const defaultPrice = 199;

// const createBooking = function (
//   flightNum,
//   numOfPassengers = 1,
//   price = defaultPrice * numOfPassengers
// ) {
//   const booking = {
//     flightNum,
//     numOfPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 450);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jonas);

// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/* const convertToOneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const convertFirstWordToUpperCase = function (str) {
  const [first, ...others] = str.toLowerCase().split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformString = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformString('JavaScript is the best!', convertFirstWordToUpperCase);
transformString('JavaScript is the best!', convertToOneWord);

const giveHighFive = function () {
  console.log('✋🏻');
};

document.body.addEventListener('click', giveHighFive);

['Jonas', 'Martha', 'Adam'].forEach(giveHighFive);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

const sayHey = greet('Hey');

sayHey('Jonas');

greet('Hello')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

const flightData = [583, 'George Scott'];
book.apply(lufthansa, flightData);
console.log(lufthansa);

book.call(eurowings, ...flightData);
console.log(eurowings);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(222, 'Steven Williams');
console.log(eurowings);

const bookEW222 = book.bind(eurowings, 222);
bookEW222('Roger Brilliant');
console.log(eurowings);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

console.log(lufthansa);

lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(300));

const setTaxRateAndCalcTax = function (rate) {
  return function (value) {
    console.log(value * (1 + rate));
  };
};

const vatRate = 0.23;

const addVATax = setTaxRateAndCalcTax(vatRate);

addVATax(200); */

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}.`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); */

// poll.registerNewAnswer();

/* (function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
console.log(isPrivate); */

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// console.log(passengerCount);

console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We're now boarding all ${n} passengers`);
    console.log(`There are three groups with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
