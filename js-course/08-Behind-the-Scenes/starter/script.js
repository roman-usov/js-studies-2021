'use strict';

//The Scope Chain

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      const output = 'NEW OUTPUT!';
    }
    //console.log(add(2, 3));
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(millenial);

testVar;
console.log(testVar);

var testVar = 5; */

//Hoisting

//Variables
/* console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991; */

//Functions
/* console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; */

//Example demonstrating the key pitfall of hoisting - a behavior we can get when not careful with using var-type variables

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var testVariable = 0;
// function checkFalsy(variable) {
//   if (variable) {
//     return 'var is not zero';
//   }
//   if (!variable) {
//     return 'var is zero';
//   }
// }

// console.log(checkFalsy(testVariable));

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

// this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const f = jonas.calcAge;
// f();

//this keyword in regular functions and arrow functions

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // const self = this;
//     // const isMillenial = function () {
//     //   //console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     const isMillenial = () =>
//       console.log(this.year >= 1981 && this.year <= 1996);

//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}!`),
// };

// jonas.greet();
// jonas.calcAge();
// console.log(this.firstName);

// const testFunction = function () {
//   console.log(jonas.firstName);
// };

// testFunction();

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 3);
// addExpr(2, 3, 4, 9);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 3);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log(friend);
// console.log(me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

//marriedJessica = {};

const jessicaNew = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  hobbies: {
    hobby1: 'cooking',
    hobby2: 'dancing',
  },
};

const jessicaManyObjects = Object.assign({}, jessicaNew);

jessicaManyObjects.hobbies.hobby1 = 'reading';

console.log(jessicaNew);
console.log(jessicaManyObjects);
