'use strict';

const buttonEl = document.querySelector('.poll');
const modalOne = document.querySelector('.modal--1');
const modalTwo = document.querySelector('.modal--2');
const overlay = document.querySelector('.overlay');
const closeModalButtonOne = document.querySelector('.close-modal--1');
const closeModalButtonTwo = document.querySelector('.close-modal--2');
const openModalButton = document.querySelector('.show-modal');
const questionEl = document.querySelector('.question');
const answersEl = document.querySelector('.answers');
const inputEl = document.querySelector('.option-input');
const submitBtnEl = document.querySelector('.submit-input');

const openModalOne = function () {
  modalOne.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalOne = function () {
  modalOne.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModalTwo = function () {
  modalTwo.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalTwo = function () {
  modalTwo.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalButtonOne.addEventListener('click', closeModalOne);
overlay.addEventListener('click', closeModalOne);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalOne.classList.contains('hidden')) {
    closeModalOne();
  }
});

closeModalButtonTwo.addEventListener('click', closeModalTwo);
overlay.addEventListener('click', closeModalTwo);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalTwo.classList.contains('hidden')) {
    closeModalTwo();
  }
});

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.submitAnswer = function () {
  let answer;
  answer = inputEl.value;
  closeModalTwo();
  inputEl.value = '';
  if (answer && Number(answer) >= 0 && Number(answer) < this.answers.length) {
    this.answers[Number(answer)]++;
    //console.log(this.answers);
    poll.displayResults('string', this.answers);
  } else {
    openModalOne();
  }
};

poll.displayQuestion = function () {
  questionEl.innerHTML = `${this.question}`;
  answersEl.innerHTML = `${this.options.join('<br>')}<br>(Write option number)`;
  openModalTwo();
};

poll.displayResults = function (type = 'array', data) {
  if (type === 'array') console.log(data);
  if (type === 'string') {
    // let results = 'Poll results are ';
    // for (const [index, value] of data.entries()) {
    //   if (index < data.length - 1) {
    //     results = results + `${value}, `;
    //   } else {
    //     results = results + `${value}.`;
    //   }
    // }
    console.log(`Poll results are ${data.join(', ')}.`);
  }
};

submitBtnEl.addEventListener('click', poll.submitAnswer.bind(poll));
buttonEl.addEventListener('click', poll.displayQuestion.bind(poll));

//poll.registerNewAnswer();

const testDataOne = [5, 2, 3];
const testDataTwo = [1, 5, 3, 9, 6, 1];

const displayTestResults = poll.displayResults;
displayTestResults('string', testDataTwo);
