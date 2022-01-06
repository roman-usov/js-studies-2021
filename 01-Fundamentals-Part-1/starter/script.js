/*
let js = "amazing";
console.log(5+6+1002-45);
console.log("Jonas");
let firstName = "Jonas";
console.log(firstName);
let PI = 3.1415;
 */

/*
// Data types

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

// Dynamic typing

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// Undefined

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

 */

/*
// let, const and var

let age = 30;
age = 31;

const birthYear = 1991;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmieder';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; //x = x + 10 = 25;
console.log(ageJonas > ageSarah);

const isFullAge = ageSarah >= 18;
*/

// Operator precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
// Strings and template literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year  = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(jonasNew);
console.log(`You can use back ticks for strings instead of quotes`);
console.log(`String with \n\ multiple \n\ lines.`);
console.log(`String
with multiple
lines`);
*/

/*
const age = 15;

if (age >=18) {
    console.log(`Sarah can start her driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/*
// Type Conversion

let inputYear = '1991';
inputYear = Number(inputYear);
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion

console.log('I am ' + 23 + ' years old.');

console.log('23' - '10' - 3);

console.log('23' + '10' + 3);

console.log('23' * '2');

console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);

let x = 2 + 3 + 4 + '5';
console.log(x);

x = '10' - '4' - '3' - 2 + '5';
console.log(x);
*/

/*
// Truthy and Falsy Values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;

if (height) {
    console.log(`Yay! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}

// Equality operators

const age = '18';
if (age === 18) console.log(`You just became an adult. (strict)`);

if (age == 18) console.log(`You just became an adult. (loose)`);

const favorite = Number(prompt(`What's your favourite number`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // '23' == 23 ('23' is coerced to 23)
    console.log(`Cool! 23 is an amazing number.`);
} else if (favorite === 7) {
    console.log(`7 is also a cool number.`);
} else {
    console.log(`Number is not 23 or 7.`);
}

if (favorite !== 23) {
    console.log(`Why not 23?`);
}

*/

/*
////// Logical Operators ///////

const hasDrivingLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense || hasGoodVision); // ! converts the original boolean value to the opposite, i.e. inverts it

const shouldDrive = hasDrivingLicense && hasGoodVision;

if (hasDrivingLicense && hasGoodVision) {
    console.log(`Sarah can drive.`);
} else {
    console.log(`Someone else should drive.`);
}
*/

/*
const isTired = false; //C

console.log(hasDrivingLicense || hasGoodVision || isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log(`Sarah can drive.`);
} else {
    console.log(`Someone else should drive.`);
}
*/
/*
const country = 'Russia';
const language = 'English';
const population = 49000000;
const isIsland = true;

if (language === 'English' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}.`);
} else {
    console.log(`${country} does not meet your criteria.`);
}

*/
/*
/////////// The Switch Statement /////////

const day = 'Friday';
switch(day) {
    case 'Monday':
        console.log(`Plan course structure.`);
        console.log(`Go to coding meetup.`);
        //multiple lines of code can go in each case
        break;
    case 'Tuesday':
        console.log(`Prepare theory videos.`);
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log(`Write code examples.`);
        break;
    case 'Friday':
        console.log(`Record videos.`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`Enjoy the weekend.`);
        break;
    default:
        console.log(`Not a valid day.`);
}

if (day === 'Monday') {
    console.log(`Plan course structure.`);
    console.log(`Go to coding meetup.`);
} else if (day === 'Tuesday') {
    console.log(`Prepare theory videos.`);
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log(`Write code examples.`);
} else if (day === 'Friday') {
    console.log(`Record videos.`);
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log(`Enjoy the weekend.`);
} else {
    console.log(`Not a valid day.`);
}

const language = 'Russian';

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log(`Has the greatest number of native speakers.`);
        break;
    case 'Spanish':
        console.log(`2nd place for the number of native speakers.`);
        break;
    case 'English':
        console.log(`3rd place.`);
        break;
    case 'Hindi':
        console.log(`Number 4.`);
        break;
    case 'Arabic':
        console.log(`5th most spoken language.`);
        break;
    default:
        console.log(`Great language too.`);
}

*/

///// The conditional (ternary) operator //////

// const age = 23;

// age >= 18 ? console.log(`I like to drink wine.`) : console.log(`I like to drink water.`);

/*
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age>=18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
*/

/*
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


const country = 'Lithuania';
const population = 3.5;
const averagePopulation = 33;

console.log(`${country}'s population is ${population > averagePopulation ? 'above' : 'below'} average.`);
*/
