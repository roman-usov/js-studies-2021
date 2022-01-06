'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 2000],
  interestRate: 1.2, //
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = 'noSorting') {
  containerMovements.innerHTML = '';
  let movs;
  if (sort === 'noSorting') {
    movs = movements;
  }
  if (sort === 'ascending') {
    movs = movements.slice().sort((a, b) => b - a);
  }
  if (sort === 'descending') {
    movs = movements.slice().sort((a, b) => a - b);
  }
  //const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const movementHtml = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', movementHtml);
  });
};

//displayMovements(account1.movements);

const calculateDisplayBalance = function (account) {
  account['balance'] = account.movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

//calculateDisplayBalance(account1.movements);

const calculateDisplaySummary = function (account) {
  labelSumIn.textContent = `${account.movements
    .filter(mov => mov > 0)
    .reduce((total, mov) => total + mov, 0)}€`;

  labelSumOut.textContent = `${Math.abs(
    account.movements
      .filter(mov => mov < 0)
      .reduce((total, mov) => total + mov, 0)
  )}€`;

  labelSumInterest.textContent = `${account.movements
    .filter(mov => mov > 0)
    .map(mov => Number((mov * (account.interestRate / 100)).toFixed(0)))
    .filter((interest, i, arr) => {
      return interest >= 1;
    })
    .reduce((total, interest) => total + interest, 0)}€`;
};

const updateAccountInfoUi = function (account) {
  displayMovements(account.movements);
  calculateDisplayBalance(account);
  calculateDisplaySummary(account);
};

//calculateDisplaySummary(account1);

/*const createUserNames = function (fullName) {
  return fullName
    .toLowerCase()
    .split(' ')
    .map(name => name.slice(0, 1))
    .join('');
};*/

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc['username'] = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.slice(0, 1))
      .join('');
  });
};

createUserNames(accounts);

let currentAccount;

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    updateAccountInfoUi(currentAccount);
    containerApp.style.setProperty('opacity', '1');
  }
  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();
});

btnTransfer.addEventListener('click', event => {
  event.preventDefault();
  const depositedAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amountToTransfer = Number(inputTransferAmount.value);
  if (
    depositedAccount &&
    amountToTransfer > 0 &&
    currentAccount.balance >= amountToTransfer &&
    depositedAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(amountToTransfer * -1);
    depositedAccount.movements.push(amountToTransfer);
    updateAccountInfoUi(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', event => {
  event.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateAccountInfoUi(currentAccount);
  }
  inputLoanAmount.value = '';
  inputTransferAmount.blur();
});

//let sorted = false;

btnSort.addEventListener('click', event => {
  event.preventDefault();
  //displayMovements(currentAccount.movements, !sorted);
  //sorted = !sorted;
  if (btnSort.textContent === 'SORT') {
    displayMovements(currentAccount.movements, 'ascending');
    btnSort.textContent = '↑ SORT';
  } else if (btnSort.textContent === '↑ SORT') {
    displayMovements(currentAccount.movements, 'descending');
    btnSort.textContent = '↓ SORT';
  } else {
    displayMovements(currentAccount.movements, 'noSorting');
    btnSort.textContent = 'SORT';
  }
});

btnClose.addEventListener('click', event => {
  event.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const accountToDelete = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(accountToDelete, 1);
    containerApp.style.setProperty('opacity', '0');
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

/*const addUserName = function (accounts) {
  accounts.forEach(account => {
    account['username'] = createUserNames(account.owner);
    console.log(account);
  });
};

addUserName(accounts);*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(2, -2));
// console.log(arr.slice());

// let test = arr.slice();
// test.shift();
// console.log(arr);
// console.log(test);

// var employeeDetailsOriginal = {
//   name: 'Manjula',
//   age: 25,
//   Profession: 'Software Engineer',
// };
// var employeeDetailsDuplicate = employeeDetailsOriginal;
// employeeDetailsDuplicate.name = 'NameChanged';
// console.log(employeeDetailsOriginal);
// console.log(employeeDetailsDuplicate);

// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(2, -2));
// console.log(arr.slice());

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);

// console.log(letters.join('-'));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// if (movement > 0) {
// console.log(`You deposited ${movement}`);
// } else {
// console.log(`You withdrew ${Math.abs(movement)}`);
// }
// }

// for (const [index, el] of movements.entries()) {
//   if (el > 0) {
//     console.log(`Movement ${index + 1}: уou deposited ${el}`);
//   } else {
//     console.log(`Movement ${index + 1}: you withdrew ${Math.abs(el)}`);
//   }
// }

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// });

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currencyUnits = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currencyUnits.forEach(function (value, _, set) {
  console.log(`${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsInUsd = movements.map(mov => mov * eurToUsd);
const movementsInUsd1 = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movementsInUsd);

const movInUsd = [];

for (const mov of movements) {
  movInUsd.push(mov * eurToUsd);
}
console.log(movInUsd);

const movementDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementDescriptions);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const balance = movements.reduce((bal, mov) => bal + mov, 0);
console.log(balance);

const maxMovement = movements.reduce(
  (max, mov) => (max > mov ? max : mov),
  movements[0]
);

console.log(maxMovement);*/
/*const usdToEur = 0.9;

const totalInEur = movements
  .filter(mov => mov > 0)
  .map(mov => mov * usdToEur)
  .reduce((total, mov) => total + mov, 0);
console.log(totalInEur);*/

//https://intellij-support.jetbrains.com/hc/en-us/community/posts/360009567459-Webstorm-2020-2-1-Remote-Debugging-do-not-work

/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let foundAccount;

for (const account of accounts) {
  if (account.owner === 'Jessica Davis') {
    foundAccount = account;
  }
}

console.log(foundAccount);*/

/*console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;
console.log(movements.some(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2));

const allMovements = accounts
  .map(account => account.movements)
  .flat()
  .reduce((total, mov) => total + mov, 0);
console.log(allMovements);

const allMovements2 = accounts
  .flatMap(account => account.movements)
  .reduce((total, mov) => total + mov, 0);
console.log(allMovements2);*/

// const allDeposits = allMovements
//   .filter(mov => mov > 0)
//   .reduce((total, mov) => total + mov, 0);
//
// console.log(allDeposits);
//
// const allWithdrawals = allMovements
//   .filter(mov => mov < 0)
//   .reduce((total, mov) => total + mov, 0);
//
// console.log(allWithdrawals);

// const owners = accounts.map(acc => acc.owner);
// console.log(owners.sort());
//
// console.log(movements);
// console.log(movements.sort((a, b) => b - a));
//
// console.log(btnSort.textContent);

/*const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

const arr = [1, 2, 3, 4, 5];
arr.fill(23, 1, 3);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (el, i) => i + 1);
console.log(z);

const randomDiceRolls = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(randomDiceRolls);

const balanceLabel = document.querySelector('.balance__value');
let movementsValuesFromUI;

balanceLabel.addEventListener('click', event => {
  event.preventDefault();
  movementsValuesFromUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace(/€/g, ''))
  );
  console.log(movementsValuesFromUI);
  // console.log(
  //   movementsValuesFromUI
  //     .map(el => Number(el.textContent.replace(/€/g, '')))
  //     .reduce((total, el) => total + el, 0)
  // );

  const movementsUI = [...document.querySelectorAll('.movements__value')];
});*/

//Calculate how much has been accumulated in deposits in the bank

const allDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((total, mov) => total + mov, 0);
console.log(allDeposits);

//Count how many deposits there have been with at least 1,000 dollars

// const depositsOverOneKUSD = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(depositsOverOneKUSD);

const depositsOverOneKUSD = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);

console.log(depositsOverOneKUSD);

function increaseByOne(x) {
  return ++x;
}

console.log(increaseByOne(10));

// Use Array.Reduce() to create a new object (it can be an array as well as any other object)
// Create an object that contains the sum of all deposits and withdrawals

// create an array containing deposits and withdrawals as subarrays

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, mov) => {
      //mov > 0 ? (sums.deposits += mov) : (sums.withdrawals += mov);
      sums[mov > 0 ? 'deposits' : 'withdrawals'] += mov;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//Convert a string to a title case: this is a nice title -> This Is a Nice Title

// const convertToTitleCase = function (title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(' ')
//     .map(word => {
//       return word.length > 3
//         ? word.replace(word[0], word[0].toUpperCase())
//         : word;
//     })
//     .join(' ');
// };
