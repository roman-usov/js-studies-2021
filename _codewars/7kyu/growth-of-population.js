"use strict";

const currentPopulation = 1000;
const growthRate = 2;
const newComersOrLeavers = -20;
const targetPopulation = 1200;

const findNumOfYears = function (p0, percent, aug, p) {
  let increasedPopulation = p0;
  let numOfYears;
  for (numOfYears = 0; increasedPopulation < p; numOfYears++) {
    increasedPopulation += increasedPopulation * (percent / 100) + aug;
  }
  // while (increasedPopulation < p) {
  // 	increasedPopulation += increasedPopulation * percentConverted + aug;
  // 	console.log(increasedPopulation);
  // 	numOfYears++;
  // 	console.log(numOfYears);
  // }
  return numOfYears;
};

const numOfYears = findNumOfYears(
  currentPopulation,
  growthRate,
  newComersOrLeavers,
  targetPopulation
);

console.log(numOfYears);
