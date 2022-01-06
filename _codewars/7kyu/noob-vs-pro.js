"use strict";

function numberToAccountingString(number) {
  if (number == null) return;
  if (number < 0) return `${Math.abs(number)}`;
  return number.toString();
}

console.log(numberToAccountingString(undefined));
console.log(numberToAccountingString(0));
console.log(numberToAccountingString(10));
console.log(numberToAccountingString(-5));

const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 5;

// function calculateTotal(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
// 	if (items == null || items.length === 0) return 0;
// 	let total = 0;
// 	items.forEach((item) => {
// 		total += item.price * item.quantity;
// 	});
// 	total = total - total * (discount || 0);
// 	total = total * TAX_RATE;
// 	total = total + shipping;
// 	return total;
// }

function calculateTotal(
  items,
  { shipping = SHIPPING_DEFAULT, discount = 0 } = {}
) {
  if (items == null || items.length === 0) return 0;
  const itemsCost = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const remainingPercentageOfItemsCost = 1 - discount;
  return itemsCost * remainingPercentageOfItemsCost * TAX_RATE + shipping;
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
];

console.log(calculateTotal());
console.log(calculateTotal(testItems));
console.log(calculateTotal(undefined, {}));
console.log(calculateTotal([], {}));
console.log(calculateTotal(testItems, {}));
console.log(calculateTotal(testItems, { shipping: 0 }));
console.log(calculateTotal(testItems, { discount: 0.75 }));
console.log(calculateTotal(testItems, { shipping: 12 }));

function orderDelivery(
  [firstName, secondName],
  { starterIndex = 1, mainIndex = 0, time = "20:00", address }
) {
  const starterMenu = [
    "Focaccia",
    "Bruschetta",
    "Garlic Bread",
    "Caprese Salad",
  ];
  const mainMenu = ["Pizza", "Pasta", "Risotto"];
  console.log(
    `Dear ${firstName} ${secondName}, your order has been received! ${starterMenu[starterIndex]} and ${mainMenu[mainIndex]} will be delivered to ${address} by ${time}.`
  );
}

orderDelivery(["Roman", "Usov"], {
  //time: '22:30',
  address: "Via del Sole, 21",
  //mainIndex: 2,
  starterIndex: 2,
});
