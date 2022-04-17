'use strict';

// const ingredients = ['olives', 'spinach'];
// const pizzaOrder = setTimeout(
//   (ing1, ing2) => console.log(`Here's your ${ing1} and ${ing2} pizza!`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting for my pizza...');
//
// if (ingredients.includes('spinach')) {
//   clearTimeout(pizzaOrder);
//   setTimeout(() => console.log('Your order has been cancelled'), 1000);
//}

let counter = 0;

const time = setInterval(function () {
  const now = new Date();
  console.log(
    `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
  );
  counter += 1;
  console.log(counter);
  if (counter === 10) clearInterval(time);
}, 1000);
