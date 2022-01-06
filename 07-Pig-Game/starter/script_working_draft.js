'use strict';

/// Create game variables

const winningScore = 20;
let gameScores = [];
let activePlayer;
let currentScore;
let gamePlaying;

// let gameScores = [0, 0];
// let activePlayer = 0;
// let currentScore = 0;
// const winningScore = 20;
// let gamePlaying = true;

// let playerOneScore = 0;
// let playerTwoScore = 0;

/// Create variables for the elements to be used in the code below

const diceEl = document.querySelector('.dice');
const playerOneGameScoreEl = document.getElementById('score--0');
const playerTwoGameScoreEl = document.getElementById('score--1');
const playerOneCurrentScoreEl = document.querySelector('#current--0');
const playerTwoCurrentScoreEl = document.querySelector('#current--1');
const rollDiceBtnEl = document.querySelector('.btn--roll');
const newGameBtnEl = document.querySelector('.btn--new');
const holdBtnEl = document.querySelector('.btn--hold');
const playerOneEl = document.querySelector('.player--0');
const playerTwoEl = document.querySelector('.player--1');
const players = document.querySelectorAll('.player');

/// Auxiliary Functions

const hideElement = function (el) {
  el.classList.add('hidden');
};

const unhideElement = function (el) {
  el.classList.remove('hidden');
};

const setCurrentScoresToZero = function (score1, score2) {
  score1.textContent = 0;
  score2.textContent = 0;
};

const setGameScoresToZero = function (scores) {
  scores[0] = 0;
  scores[1] = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  return scores;
};

const rollTheDice = function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
};

/// two implementation option for switching players - simple and with forEach() method

// const switchPlayers = function () {
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document.getElementById(`score--${activePlayer}`).textContent =
//     gameScores[activePlayer];
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   playerOneEl.classList.toggle('player--active');
//   playerTwoEl.classList.toggle('player--active');
// };

const switchPlayer = function (players) {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    gameScores[activePlayer];
  activePlayer = activePlayer === 0 ? 1 : 0;
  players.forEach(player => {
    player.classList.toggle('player--active');
  });
};

const resetActivePlayer = function (players) {
  players.forEach(player => {
    if (player.classList.contains('player--active')) {
      player.classList.remove('player--active');
    }
    document.querySelector('.player--0').classList.add('player--active');
  });
};

/// Main Game Functions

const init = function () {
  activePlayer = 0;
  currentScore = 0;
  gamePlaying = true;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  if (document.getElementById('name--0').textContent === 'Winner!') {
    document.getElementById('name--0').textContent = 'Player 1';
  } else {
    document.getElementById('name--1').textContent = 'Player 2';
  }
  resetActivePlayer(players);
  hideElement(diceEl);
  setCurrentScoresToZero(playerOneCurrentScoreEl, playerTwoCurrentScoreEl);
  gameScores = setGameScoresToZero(gameScores);
};

// const clickRollDice = function () {
//   const diceRoll = rollTheDice();
//   unhideElement(diceEl);
//   diceEl.setAttribute('src', `dice-${diceRoll}.png`);
//   if (diceRoll > 1) {
//     currentScore += diceRoll;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   }
//   if (diceRoll === 1) {
//     switchPlayer(players);
//   }
// };

const clickRollDice = function () {
  if (gamePlaying) {
    const diceRoll = rollTheDice();
    unhideElement(diceEl);
    diceEl.setAttribute('src', `dice-${diceRoll}.png`);
    if (diceRoll > 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    if (diceRoll === 1) {
      switchPlayer(players);
    }
  }
};

// const clickHold = function () {
//   gameScores[activePlayer] += currentScore;
//   if (gameScores[activePlayer] < winningScore) {
//     switchPlayer(players);
//   } else {
//     endTheGame();
//   }
// };

const clickHold = function () {
  if (gamePlaying) {
    gameScores[activePlayer] += currentScore;
    if (gameScores[activePlayer] < winningScore) {
      switchPlayer(players);
    } else {
      endTheGame();
    }
  }
};

// const endTheGame = function () {
//   document.getElementById(`score--${activePlayer}`).textContent =
//     gameScores[activePlayer];
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add('player--winner');
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--active');
//   document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
//   hideElement(diceEl);
//   rollDiceBtnEl.removeEventListener('click', clickRollDice);
//   holdBtnEl.removeEventListener('click', clickHold);
//   rollDiceBtnEl.disabled = true;
//   holdBtnEl.disabled = true;
// };

const endTheGame = function () {
  document.getElementById(`score--${activePlayer}`).textContent =
    gameScores[activePlayer];
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
  hideElement(diceEl);
  gamePlaying = false;
};

// const resetGame = function () {
//   gamePlaying = true;
//   currentScore = 0;
//   // rollDiceBtnEl.addEventListener('click', clickRollDice);
//   // holdBtnEl.addEventListener('click', clickHold);
//   // rollDiceBtnEl.disabled = false;
//   // holdBtnEl.disabled = false;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   document.getElementById(`name--${activePlayer}`).textContent = `Player ${
//     activePlayer + 1
//   }`;
//   resetActivePlayer(players);
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   gameScores = setScoresToZeroUniversal(gameScores);
//   activePlayer = 0;
// };

/// PLAYING THE GAME

/// Set the game starting state

// hideElement(diceEl);
// setScoresToZeroDOM(playerOneGameScoreEl, playerTwoGameScoreEl);

init();

/// Roll the dice

rollDiceBtnEl.addEventListener('click', clickRollDice);

/// Hold the score and end the game if a player gets the winning score

holdBtnEl.addEventListener('click', clickHold);

/// Reset the game state

newGameBtnEl.addEventListener('click', init);

// Initial version of the code switching the players

/*   rollDiceBtnEl.addEventListener('click', function () {
    const diceRoll = rollTheDice();
    unhideElement(diceEl);
    diceEl.setAttribute('src', `dice-${diceRoll}.png`);

    if (diceRoll > 1) {
      if (playerOneEl.classList.contains('player--active')) {
        playerOneScore += diceRoll;
        playerOneCurrentScoreEl.textContent = playerOneScore;
      } else if (playerTwoEl.classList.contains('player--active')) {
        playerTwoScore += diceRoll;
        playerTwoCurrentScoreEl.textContent = playerTwoScore;
      }
    } else {
      if (playerOneEl.classList.contains('player--active')) {
        playerOneScore = 0;
        playerOneCurrentScoreEl.textContent = playerOneScore;
        playerOneEl.classList.toggle('player--active');
        playerTwoEl.classList.toggle('player--active');
      } else if (playerTwoEl.classList.contains('player--active')) {
        playerTwoScore = 0;
        playerTwoCurrentScoreEl.textContent = playerTwoScore;
        playerOneEl.classList.toggle('player--active');
        playerTwoEl.classList.toggle('player--active');
      }
    } */
