"use strict";

const inputArrays = [
  [
    [3, 5, 2, 12, 7],
    [4, 1, 15, 8, 3],
  ],
  [
    [9, 16, 6, 8, 3],
    [10, 5, 6, 1, 4],
  ],
];

/*const checkDogs = function (ages1, ages2) {
	const dogsOnly = ages1.slice();
	dogsOnly.splice(0, 1);
	dogsOnly.splice(-2);
	console.log([...dogsOnly, ...ages2]);
	[...dogsOnly, ...ages2].forEach((dog, index) => {
		if (dog < 3) {
			console.log(
				`Dog number ${index + 1} is still a puppy, and is ${dog} years old 🐶`
			);
		} else {
			console.log(
				`Dog number ${index + 1} is an adult, and is ${dog} years old`
			);
		}
	});
};

checkDogs(...inputArrays[0]);
checkDogs(...inputArrays[1]);

const test = [3, 5, 2, 12, 7];
const newTest = test.slice();
const newTest1 = [...test];
console.log(newTest.splice(1, newTest.length - 2));
console.log(newTest1.splice(-2));
console.log(newTest);
console.log(test);
console.log(newTest1);*/

const dogAges = [
  [5, 2, 4, 1, 15, 8, 3],
  [16, 6, 10, 5, 6, 1, 4],
];

/*const calcAverageHumanAge = function (agesOfDogs) {
  const humanAgesOfAdults = agesOfDogs
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18);
  return (
    humanAgesOfAdults.reduce((totalAge, age) => totalAge + age, 0) /
    humanAgesOfAdults.length
  );
};*/

/*const calcAverageHumanAge = (agesOfDogs) =>
  agesOfDogs
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((totalAge, age, i, arr) => totalAge + age / arr.length, 0);

console.log(calcAverageHumanAge(dogAges[0]));
console.log(calcAverageHumanAge(dogAges[1]));

*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob", "Brad"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// console.log(22 ** 0.75 * 28);
// console.log(8 ** 0.75 * 28);
// console.log(13 ** 0.75 * 28);
// console.log(32 ** 0.75 * 28);

const calculateRecommendedPortion = function (weight) {
  return Math.trunc(weight ** 0.75 * 28);
};

const calculateAndAddRecommendedPortion = function (dogs) {
  dogs.forEach(
    (dog) => (dog["recommended"] = calculateRecommendedPortion(dog.weight))
  );
  return dogs;
};

calculateAndAddRecommendedPortion(dogs);

const checkIfEatingTooMuch = function (owner) {
  const ownersDog = dogs.find((dog) => dog.owners.includes(owner));

  console.log(ownersDog.curFood > ownersDog.recommended ? true : false);
  return ownersDog.curFood > ownersDog.recommended ? true : false;
};

checkIfEatingTooMuch("Sarah");

console.log(calculateAndAddRecommendedPortion(dogs));

const provideOwnersOfOvereatersAndUndernourished = function (dogs) {
  const owners = {};
  owners["ownersEatTooMuch"] = dogs
    .filter((dog) => dog.curFood > dog.recommended)
    .flatMap((dog) => dog.owners);
  owners["ownersEatTooLittle"] = dogs
    .filter((dog) => dog.curFood < dog.recommended)
    .flatMap((dog) => dog.owners);
  return owners;
};

// const displayNourishmentMessage = function (dogs) {
//   const overeatersAndUndernourished =
//     provideOwnersOfOvereatersAndUndernourished(dogs);
//   function ownerString(owners) {
//     let ownersInAString = "";
//     for (let i = 0; i < owners.length; i++) {
//       if (i !== owners.length - 1) {
//         ownersInAString += `${owners[i]} and `;
//       } else {
//         ownersInAString += `${owners[i]}`;
//       }
//     }
//     return ownersInAString;
//   }
//   console.log(
//     `${ownerString(
//       overeatersAndUndernourished.ownersEatTooMuch
//     )}'s dogs eat too much!`
//   );
//   console.log(
//     `${ownerString(
//       overeatersAndUndernourished.ownersEatTooLittle
//     )}'s dogs eat too little!`
//   );
// };

const displayNourishmentMessage = function (dogs) {
  const overeatersAndUndernourished =
    provideOwnersOfOvereatersAndUndernourished(dogs);
  console.log(
    `${overeatersAndUndernourished.ownersEatTooMuch.join(
      " and "
    )}'s dogs eat too much!`
  );
  console.log(
    `${overeatersAndUndernourished.ownersEatTooLittle.join(
      " and "
    )}'s dogs eat too little!`
  );
};

displayNourishmentMessage(dogs);

const exactAmount = dogs.some((dog) => dog.curFood === dog.recommended);
console.log(exactAmount);

const checkIfEatingOk = (dog) =>
  dog.curFood <= dog.recommended * 1.1 && dog.curFood >= dog.recommended * 0.9;

const okayAmount = dogs.some(checkIfEatingOk);
console.log("okayAmount", okayAmount);

const okayDogs = dogs.filter(checkIfEatingOk);
console.log("okaydogs", okayDogs);

const dogsSorted = dogs.slice().sort((a, b) => a.recommended - b.recommended);
console.log(dogsSorted);
console.log(dogs);

module.exports.calculateRecommendedPortion = calculateRecommendedPortion;
module.exports.calculateAndAddRecommendedPortion =
  calculateAndAddRecommendedPortion;
module.exports.checkIfEatingTooMuch = checkIfEatingTooMuch;
module.exports.provideOwnersOfOvereatersAndUndernourished =
  provideOwnersOfOvereatersAndUndernourished;
