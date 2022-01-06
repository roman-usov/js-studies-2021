"use strict";

/*
let hasDriversLicense =false;
let passTest = true;

if (passTest) {
    hasDriverLicense = true;
}

if (hasDriversLicense) {
    console.log('I can drive.');
}

//const interface = 'Audio';
//const private = 123;
*/

/// Functions ///

/// Function declaration

/*
function logger () {
    console.log(`My name is Jonas`);
}

logger(); //invoking, calling or running a function
logger();
logger();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); //arguments
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/// Function expression

const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const calcAge2 = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const age2 = calcAge2(1992);
console.log(age1, age2);
*/

/// Arrow function

/*
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3 + " years");

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} has ${retirement} years before retirement.`
}

console.log(yearsUntilRetirement(1991, "Roman"));

*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

const appleAndOrangeJuice = fruitProcessor(5, 3); //arguments
console.log(appleAndOrangeJuice);
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const checkRetirement = function (age) {
    const retirementAge = 65;
    const timeTillRetirement = retirementAge - age;
    if (timeTillRetirement <= 0) {
        return -1;
    } else {
        return timeTillRetirement;
    }
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    //const ageAndRetirementDiff = 65 - age;
    const retirement = checkRetirement(age);
    if (retirement === -1) {
        console.log(`${firstName} is retired.`);
    } else {
        console.log(`${firstName} has ${retirement} years before retirement.`);
    }
    return retirement;

}

//console.log(yearsUntilRetirement(1991, "Roman"));

console.log(yearsUntilRetirement(1991, "Roman"));
console.log(yearsUntilRetirement(1970, "Jonah"));
*/

////// Arrays /////
/*

const friends = ['Michael','Steven','Peter'];

const yearsArray= new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/

/////// Basic Array Methods ////////
/*
const friends = ['Michael','Steven','Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);


const removedElement = friends.pop();
console.log(friends);
console.log(removedElement);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log(`You have a friend called Steven.`);
}*/

/////// Objects ////////

/*const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);

console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('What do you want to know about Jonas. Choose between firstName, lastName, age, job and friends.');
//console.log(interestedIn);

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.`);*/

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);

//console.log(jonas['calcAge'](1991));

// console.log(jonas.getSummary());

//// The for loop ////

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}.`);
// }
//
// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting.`);
// }

/////// Looping Arrays, Breaking and Continuing //////////

/*const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);*/

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

/*const calcAges = function (years) {
    const ages = [];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < years.length; i++) {
        let age = currentYear - years[i];
        ages.push(age);
    }
    return ages;
}*/

// const calcAges = function (years) {
//     const ages = [];
//     for (let i = 0; i < years.length; i++) {
//         ages.push(new Date().getFullYear() - years[i]);
//     }
//     return ages;
// }
//
// let peopleAges = calcAges(years);
// console.log(peopleAges);

////// continue and break statements for loops //////

/*const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];


/!*for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}*!/

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'number') {
        continue;
    } else if (typeof jonasArray[i] == 'number') {
        console.log(jonasArray[i], typeof jonasArray[i]);
        break;
    }
}

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}*/

////// looping backwards and loops in loops //////

/* const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

const exercises = ['Lifting weights', 'Push-ups', 'Sit-ups'];
 */
// for (let ex = 0; ex < exercises.length; ex++) {
//     let maxExerciseCount = 5;
//     for (let rep = 1; rep <= maxExerciseCount; rep++) {
//         console.log(`${exercises[ex]} repetition ${rep}.`);
//     }
// }
//
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------------- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting exercise repetition ${rep}.`);
//     }
// }

/* for (let ex = 0; ex < exercises.length; ex++) { //keeps track of the exercises
    let maxSetCount = 3;
    let maxRepCount = 5;
    console.log(`---------- Starting ${exercises[ex]}`);
    for (let set = 1; set <= maxSetCount; set++) { //keeps track of sets for each exercise
        console.log(`-------- Starting set ${set}`);
        for (let rep = 1; rep <= maxRepCount; rep++) { //keeps track of repetitions with each set
            console.log(`${exercises[ex]} repetition ${rep}.`);
        }
    }
} */

/// The while loop ///

/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
} */

/* let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
} */

let dice = Math.trunc(Math.random() * 6) + 1;
// the Math.random method returns a number between 0 and 1 (like 0.4919597240511908)
// In a dice we have 6 digits, so we need to multiply it by 6
// Multiplying the result by 6 will produce a fraction (e.g. 0.1 * 6 = 0.6)
// But in a dice we need a whole number, so we can use the Math.trunc method to get just the integer part
// So, in the example above, we'll get 0 from 0.6
// Thus, we need to add 1 to get 1 (0 + 1)
// For example, if at the end we get 0,9999999, then the fraction, after multiplying it by 6, will be 5.9999999
// So, we truncate it to an integer and get 5. After adding 1, we get 6.
//console.log(dice);

if (dice === 6) console.log(`You got a 6 on your first try!`);

while (dice !== 6) {
  console.log(`You rolled  a ${dice}.`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled a 6, and loop is about to end...`);
}

//After each roll we need to update the dice value, otherwise the we'll be stuck in the loop forever if the first roll doesn't result in 6.
//Without the if statement before the loop, you can get a situation where you get nothing in the console. And it means that you got a 6 on you first try, and the while loop never executes because the condition is not TRUE.
//As a possible solution we get this if statement before the while loop to handle such a situation.
