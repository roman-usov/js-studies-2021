'use strict';

const weekdays = ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const textInputEl = document.createElement('textarea');
const submitInputBtnEl = document.createElement('button');
textInputEl.className = 'input';
submitInputBtnEl.className = 'submit';
document.body.append(textInputEl);
document.body.append(submitInputBtnEl);

const convertToCamelCase = function (str) {
  const [first, second] = str.toLowerCase().trim().split('_');
  return first + second.replace(second[0], second[0].toUpperCase());
};

const findLongestElement = function (arrOfStr) {
  const longest = arrOfStr.reduce((longestWord, element) => {
    return element.length > longestWord.length ? element : longestWord;
  }, '');
  return longest.length;
};

// console.log(
//   findLongestElement(['sdfasf', 'predefined', 'grass', 'automobile'])
// );

//console.log(convertToCamelCase('  delayed_departure   '));

submitInputBtnEl.addEventListener('click', function () {
  const input = document.querySelector('.input').value;
  const inputInArray = input.split('\n');
  const camelCased = [];
  for (const string of inputInArray) {
    camelCased.push(convertToCamelCase(string));
  }
  const longest = findLongestElement(camelCased);
  const lengthWithSpaces = longest + 2;
  for (const [i, word] of camelCased.entries()) {
    //const lengthWithTicks = lengthWithSpaces + i + 1;
    console.log(
      //word.padEnd(lengthWithSpaces, ' ').padEnd(lengthWithTicks, '✅')
      `${word.padEnd(lengthWithSpaces, ' ')}${'✅'.repeat(i + 1)}`
    );
  }
});

/* const textInputEl = document.body.append(
  document.createElementWithClass('textarea', 'input')
);
const submitInputBtnEl = document.body.append(
  document.createElementWithClass('button', 'submit')
); */
console.log(textInputEl);
console.log(submitInputBtnEl);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[0]);

// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   console.log(
//     seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? 'Middle' : 'Not Middle'
//   );
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('15A');
// checkMiddleSeat('19E');

// console.log(new String('jonas'));

// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS';
// const passengerLowerCase = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
// console.log(passengerCorrect);

// const correctName = function (name) {
//   return name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1);
// };

// const testName = 'PEtEr';
// const corrName = correctName(testName);
// console.log(corrName);

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.startsWith('Air'));
// console.log(plane1.startsWith('Air'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
//   console.log('Part of the new Airbus Family');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase().trim();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board.');
//   } else {
//     console.log('Welcome aboard.');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('I have some socks and a camera');
// checkBaggage('I have some snacks and a gun for protection');

// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Roman Usov'.split(' ');
// console.log(firstName);

// const myName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(myName);

// const capitalizeName = function (name) {
//   const capitalizedName = [];
//   for (const el of name.split(' ')) {
//     //capitalizedName.push(el.slice(0, 1).toUpperCase() + el.slice(1));
//     capitalizedName.push(el.replace(el[0], el[0].toUpperCase()));
//   }
//   return capitalizedName.join(' ');
// };

// const passenger = 'jessica ann smith davis';
// console.log(capitalizeName(passenger));

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (creditCardNum) {
//   console.log(creditCardNum.replace(/ /g, '').slice(-4).padStart(16, 'X'));
// };

// const maskCreditCard = function (creditCardNum) {
//   const strCardNum = creditCardNum + '';
//   console.log(strCardNum.slice(-4).padStart(strCardNum.length, 'X'));
// };

// const maskCreditCard = function (creditCardNum) {
//   const splitCard = creditCardNum.split(' ');
//   const masked = [];
//   for (let i = 0; i < splitCard.length - 1; i++) {
//     masked.push(splitCard[i].replace(splitCard[i], 'XXXX'));
//   }
//   masked.push(creditCardNum.slice(-4));
//   return masked.join(' ');
// };

// const creditCard = 1423829002080202;
// maskCreditCard(creditCard);

// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
// };

// planesInLine(5);

// const rest = new Map();

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// const hours = new Map(Object.entries(openingHours));
// console.log(hours);

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3; // Number(prompt('Your answer'));

// console.log(question.get(answer === question.get('correct')));

// console.log([...question]);

// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// console.log(typeof question.entries());
// console.log(typeof question.keys());
// console.log(typeof question.values());
// console.log(typeof [...question]);

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// rest.delete(2);
// //rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(arr));
// console.log(rest);

// console.log();

// console.log(rest.size);

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));

// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// //ordersSet.clear();

// for (const order of ordersSet) {
//   console.log(order);
// }

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(staff).size);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} days a week: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

//if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours?.mon?.open);

// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   open === 'closed'
//     ? console.log(`We're closed on ${day}.`)
//     : console.log(`On ${day} we open at ${open}.`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'Jonas', email: 'jonas@jonas.io' }];
// console.log(
//   users[1]?.name ?? 'Users array is empty or does not contain the user'
// );

// if (users.length > 0) console.log(users[0].name);
// else console.log('users array is empty');

// console.log(restaurant);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   openingHours: {
//     fri: { open: openHours, close: closeHours },
//   },
// } = restaurant;

// console.log(openHours, closeHours);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// let [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [l, , [m, n]] = nested;
// console.log(l, m, n);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Jonas';
// console.log(str);
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// console.log('J', 'o', 'n', 'a', 's');

// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];
// console.log(ingredients);

//restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// restaurant.test = 'test';
// console.log(newRestaurant);
// console.log(restaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Romantic';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const arr = [3, 4];
// const newArr = [1, 2, ...arr];

// const [a, b, ...others] = newArr;
// console.log(a, b, others);

// const [pizza, , risotto, ...otherDishes] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherDishes);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 2, 4, 5);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(0 && 'Jonas');
// console.log(23 && null);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'onions');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onions');

//restaurant.numGuests = 0;
// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao937661109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao937661109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const formatFlightType = function (flightType) {
  const delayedSign = flightType.includes('Delayed') ? '🔴 ' : '';
  return `${delayedSign}${flightType.replaceAll('_', ' ').trimStart()}`;
};

const formatLocationName = function (locationName) {
  return locationName.slice(0, 3).toUpperCase();
};

const formatFlightTime = function (flightTime) {
  return `(${flightTime.replace(':', 'h')})`;
};

// console.log(formatFlightType('_Delayed_Departure'));
// console.log(formatLocationName('fao93766109'));
// console.log(formatFlightTime('11:25'));

const displayFlightInfo = function (flights) {
  const messages = flights.split('+');
  const paddingLength = 44;
  for (const message of messages) {
    const [type, departure, destination, time] = message.split(';');
    const outputMessage = `${formatFlightType(type)} from ${formatLocationName(
      departure
    )} to ${formatLocationName(destination)} ${formatFlightTime(
      time
    )}`.padStart(paddingLength, ' ');
    console.log(outputMessage);
  }
};

displayFlightInfo(flights);

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
