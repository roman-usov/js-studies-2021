// Code violating the Open-Closed Principle

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer _________");
        break;
    }

    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "This video is useful.",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite language?",
    options: ["CSS", "HTML", "JS", "Python"],
  },
  {
    type: "text",
    description: "Describe your favorite JS feature.",
  },
  {
    type: 'range',
    description: 'What is the speed limit in your city?'
  }
];

// Code compliant with the Open-Closed Principle

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('1. True');
    console.log('2. False');
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer _________");
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Min _________");
    console.log("Max _________");
  }
}

function printQuizQuestions(questions) {
  questions.forEach(question => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log('');
  })
}

const quizQuestions = [
  new BooleanQuestion("This video is useful."),
  new MultipleChoiceQuestion("What is your favorite language?", ["CSS", "HTML", "JS", "Python"]),
  new TextQuestion("Describe your favorite JS feature."),
  new RangeQuestion('What is the speed limit in your city?')
]

printQuizQuestions(quizQuestions);

// printQuiz(questions);
