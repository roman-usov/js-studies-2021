"use strict";

let myDaysOfRent = 7;

document.querySelector(".submit").addEventListener("click", function () {
  const days = Number(document.querySelector(".days").value);
  const regularRate = 40;
  const threeDaysPlusDiscount = 20;
  const sevenDaysPlusDiscount = 50;
  let amountDue;
  switch (true) {
    case !Number.isInteger(plannedDays) || plannedDays <= 0:
      alert(`Please, enter the number of days of rent. Minimum value is 1.`);
      break;
    case plannedDays < 3:
      amountDue = plannedDays * regularRate;
      document.querySelector(".due").textContent = "$" + amountDue;
      break;
    case plannedDays >= 3 && plannedDays < 7:
      amountDue = plannedDays * regularRate - threeDaysPlusDiscount;
      document.querySelector(".due").textContent = "$" + amountDue;
      break;
    case plannedDays >= 7:
      amountDue = plannedDays * regularRate - sevenDaysPlusDiscount;
      document.querySelector(".due").textContent = "$" + amountDue;
      break;
  }
});

const calculateCarRent = function (days) {
  const regularRate = 40;
  const threeDaysPlusDiscount = 20;
  const sevenDaysPlusDiscount = 50;
  let amountDue;
  switch (true) {
    case !Number.isInteger(days) || days <= 0:
      alert(`Please, enter the number of days of rent. Minimum value is 1.`);
      break;
    case days < 3:
      amountDue = days * regularRate;
      return amountDue;
      break;
    case days >= 3 && days < 7:
      amountDue = days * regularRate - threeDaysPlusDiscount;
      return amountDue;
      break;
    case days >= 7:
      amountDue = days * regularRate - sevenDaysPlusDiscount;
      return amountDue;
      break;
  }
};

let myRentAmount = calculateCarRent(myDaysOfRent);
console.log(myRentAmount);
