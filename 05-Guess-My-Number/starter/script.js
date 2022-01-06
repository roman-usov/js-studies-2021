'use strict';

const generateRandomNumber = function (upperLimit) {
  return Math.trunc(Math.random() * upperLimit) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const showOrHideSecretNumber = function (value) {
  document.querySelector('.number').textContent = value;
};

let upperLimit = 20;
let secretNumber = generateRandomNumber(upperLimit);
let highScore = 0;
let currentScore = 20;

/*
    1. use Math.random() to generate a number from 0 to 1
    2. multiply the result by the upper limit
    3. round down the result to the lower integer using the Math.trunc() method
    4. as we round down to the lower integer, we need to add 1 at the end, otherwise, you'll be getting numbers between 0 and 19
*/

//document.querySelector('.highscore').textContent = highScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess || guess === 0) {
    displayMessage('🛑 Try a number between 1 and 20!');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    showOrHideSecretNumber(secretNumber);
    let message = document.querySelector('.message').textContent;
    if (currentScore > 1 && message !== '🎊 Correct Number!') {
      currentScore--;
      displayScore(currentScore);
      displayMessage('🎊 Correct Number!');
    } else if (currentScore > 1 && message === '🎊 Correct Number!') {
      displayMessage('🎊 Correct Number!');
    } else {
      displayScore(0);
      displayMessage('🎊 Correct Number!');
    }
    currentScore > highScore
      ? (highScore = currentScore)
      : (highScore = highScore);
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    currentScore--;
    if (currentScore > 0) {
      displayScore(currentScore);
      displayMessage(guess > secretNumber ? '⬇️ Try Lower!' : '⬇️ Try Higher!');
    } else {
      displayMessage;
      ('The Secret 🕵🏻‍♀️ Stays Here! Try again 😃');
      displayScore(0);
    }
  }
});

console.log(currentScore);

document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  displayScore(currentScore);
  secretNumber = generateRandomNumber(upperLimit);
  showOrHideSecretNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Archived Code//

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 8;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess || guess === 0) {
    document.querySelector('.message').textContent = '🛑 Try between 1 and 20!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number!';
  } else if (guess > secretNumber) {
    if (currentScore > 0) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬇️ Try Lower!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
    }
  } else if (guess < secretNumber) {
    if (currentScore > 0) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬆️ Try Higher!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
    }
  }
});
 */

/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess === 0) {
    document.querySelector('.message').textContent = '🛑 Try between 1 and 20!';
  } else if (guess === secretNumber) {
    if (
      currentScore > 1 &&
      document.querySelector('.message').textContent !== '🎊 Correct Number!'
    ) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    } else if (
      currentScore > 1 &&
      document.querySelector('.message').textContent === '🎊 Correct Number!'
    ) {
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    }
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬇️ Try Lower!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬇️ Try Higher!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
      document.querySelector('.score').textContent = 0;
    }
  }
});
 */
