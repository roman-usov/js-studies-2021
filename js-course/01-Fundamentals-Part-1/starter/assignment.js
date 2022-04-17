/*
//Lesson 11
const country = "Russia";
const continent = "Eurasia";
let population = 140000000;
population++;
console.log (country + ', ' + continent + ', ' + population);

//Lesson 12
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);
console.log(typeof population);

//Lesson 13
language = `Russian`;

//Lesson 14
let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population++);
let populationFinland = 6000000;
const isPopulationFinlandGreater = populationFinland > population;
console.log(isPopulationFinlandGreater);
const averagePopulation = 33000000;
const isPopulationGreater = population > averagePopulation;
console.log(isPopulationGreater);
const description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + 'language' + ' .';
console.log(description);
 */

////// Coding Challenge #1 //////

/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
 */

/*
let markWeight, markHeight, johnWeight, johnHeight, markBMI, johnBMI, markHigherBMI, bmiMessages;

markWeight = [78, 95];
markHeight = [1.69, 1.88];
johnWeight = [92, 85];
johnHeight = [1.95, 1.76];

let bmiCalc = function (weight, height) {
    let bmiValue, bmiCalculationResults;
    bmiCalculationResults = [];
    for (let i = 0; i < weight.length; i++) {
        bmiValue = (weight[i] / height[i] ** 2).toFixed(2);
        bmiCalculationResults.push(bmiValue);
    }
    return bmiCalculationResults;
}

let compareBMI = function (bmiSet1, bmiSet2) {
    let isBmiHigher, isBmiHigherResults;
    isBmiHigherResults = [];
    for (let i = 0; i < bmiSet1.length; i++) {
        isBmiHigher = bmiSet1[i] > bmiSet2[i];
        isBmiHigherResults.push(isBmiHigher);
    }
    return isBmiHigherResults;
}

let printBmiMessage = function (messageInput) {
    let bmiMessage, bmiMessageCollection;
    bmiMessageCollection = [];
    for (let i = 0; i<messageInput.length; i++) {
        if (messageInput[i]) {
            bmiMessage = `Mark's BMI (${markBMI[i]}) is higher than John's (${johnBMI[i]})!`;
            bmiMessageCollection.push(bmiMessage);
        } else {
            bmiMessage = `John's BMI (${johnBMI[i]}) is higher than Marks's (${markBMI[i]})!`;
            bmiMessageCollection.push(bmiMessage);
        }
    }
    return bmiMessageCollection;

}

markBMI = bmiCalc(markWeight, markHeight);
console.log(markBMI);

johnBMI = bmiCalc(johnWeight, johnHeight);
console.log(johnBMI);

markHigherBMI = compareBMI(markBMI, johnBMI);

////// Coding Challenge #2 //////

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
 */
/*
bmiMessages = printBmiMessage(markHigherBMI);
console.log(bmiMessages);
*/

/*
////// Taking Decisions Exercise /////

const country = "Portugal";
const continent = "Eurasia";
let population = 11000000;
population++;
console.log (country + ', ' + continent + ', ' + population);

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);
console.log(typeof population);

language = `Portuguese`;

let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population++);
let populationFinland = 6000000;
const isPopulationFinlandGreater = populationFinland > population;
console.log(isPopulationFinlandGreater);
const averagePopulation = 33000000;
const isPopulationGreater = population > averagePopulation;
console.log(isPopulationGreater);
const description = country + ' is in ' + continent + ' and its ' + population + ' people speak the ' + language + ' language' + '.';
console.log(description);

if (population > averagePopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${Math.round((averagePopulation - population)/1000000)*1000000} below average.`);
}

console.log(averagePopulation - population);
*/

/*
///// Type Conversion and Coercion //////

console.log('9' - '5');
//4

console.log('19' - '13' + '17';
//'617'

console.log('19' - '13' + 17); // '19' is converted to 19, '13' is converted to 13, the operation results in 6 + 17
//23

console.log('123' < 57);
//false

console.log(5 + 6 + '4' + 9 - 4 - 2);
//'114'
//'1149'
//1143
*/

/*
////// Equality Operators: == vs ===

let numNeighbors = Number(prompt(`How many neighbor countries does your country have?`));

if (numNeighbors === 1) {
    console.log(`Only 1 border.`);
} else if (numNeighbors > 1) {
    console.log(`More than 1 border.`);
} else {
    console.log(`No borders.`);
}
*/

/////// Coding Challenge 3 ///////

/*

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console.

2.1. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

User Story: Determining the winner in the basketball championship
As a basketball fan
I want to compare the average scores of two finalist teams over the last 3 games and check if the higher score passes the mimimum required score
So that I can see which team wins

*/

/*
@1
Scenario Outline: Team Dolphins wins, no minimum score set

    Given team <team_1> has the three-game scores <team_1_scores>
        And team <team_1> has the three-game average <team_1_average>
        And team <team_2> has the three-game scores <team_2_scores>
        And team <team_2> has the three-game average <team_2_average>
        And the championship rules set the trophy minimum score <minimum score>
    When I compare the average score <team_1_average> to the average score <team_2_average>
    Then I see the message: "Team <team_1> wins the trophy."

    Examples:

    | team_1   | team_2 | team_1_scores | team_2_scores | team_1_average | team_2_average | minimum_score |
    | Dolphins | Koalas | 96, 108, 89   | 88, 91, 110   | 98             | 96             | null          |

@2
Scenario Outline: Team Dolphin and Koalas have a draw

    Given team <team_1> has the three-game scores <team_1_scores>
        And team <team_1> has the three-game average <team_1_average>
        And team <team_2> has the three-game scores <team_2_scores>
        And team <team_2> has the three-game average <team_2_average>
        And the championship rules set the trophy minimum score <minimum score>
    When I compare the average score <team_1_average> to the average score <team_2_average>
    Then I see the message: "Team <team_1> and <team_2> have a draw."

    Examples:

    | team_1   | team_2 | team_1_scores | team_2_scores | team_1_average | team_2_average | minimum_score |
    | Dolphins | Koalas | 11, 15, 20    | 25, 11, 10    | 45             | 45             | null          |

@3
Scenario Outline: Team Koalas wins, over minimum score set

    Given team <team_1> has the three-game scores <team_1_scores>
        And team <team_1> has the three-game average <team_1_average>
        And team <team_2> has the three-game scores <team_2_scores>
        And team <team_2> has the three-game average <team_2_average>
        And the championship rules set the trophy minimum score <minimum score>
    When I compare the average score <team_1_average> to the average score <team_2_average>
    Then I see the message: "Team <team_2> wins the trophy."

    Examples:

    | team_1   | team_2 | team_1_scores | team_2_scores | team_1_average | team_2_average | minimum_score |
    | Dolphins | Koalas | 97, 112, 101  | 109, 95, 123  | 103            | 109            | 100           |

@4
Scenario Outline: Team Koala and Dolphins have a draw, over minimum score set

    Given team <team_1> has the three-game scores <team_1_scores>
        And team <team_1> has the three-game average <team_1_average>
        And team <team_2> has the three-game scores <team_2_scores>
        And team <team_2> has the three-game average <team_2_average>
        And the championship rules set the trophy minimum score <minimum score>
    When I compare the average score <team_1_average> to the average score <team_2_average>
    Then I see the message: "Team <team_1> and <team_2> have a draw"

    Examples:

    | team_1   | team_2 | team_1_scores | team_2_scores | team_1_average | team_2_average | minimum_score |
    | Dolphins | Koalas | 97, 112, 101  | 109, 95, 106  | 103            | 103            | 100           |

 */
/*
const firstTeam = "Dolphins";
const secondTeam = "Koalas";
let firstTeamScores = [11, 15, 20];
let secondTeamScores = [25, 11, 10];
let firstTeamAverage;
let secondTeamAverage;
let minimumScoreToWin = 100;
let winner;

let calculateScoreAverage = function (scores) {
    let averageScore;
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }
    averageScore = Number((totalScore / scores.length).toFixed(0));
    return averageScore
}

firstTeamAverage = calculateScoreAverage(firstTeamScores);
console.log(firstTeamAverage);
secondTeamAverage = calculateScoreAverage(secondTeamScores);
console.log(secondTeamAverage);
*/

/*
let calculateWinner = function (team1, averageScore1, team2, averageScore2) {
    if (averageScore1 > averageScore2) {
        return `${team1} wins the trophy!`;
    } else if (averageScore2 > averageScore1) {
        return `${team2} wins the trophy!`;
    } else if (averageScore1 === averageScore2) {
        return `${team1} and ${team2} have a draw!`;
    }
}
*/

/*
let calculateWinner = function (team1, averageScore1, team2, averageScore2, minimumToWin) {
    if (minimumToWin !== undefined) {
        if (averageScore1 >= minimumToWin && averageScore1 > averageScore2) {
            return `${team1} wins the trophy!`;
        } else if (averageScore2 >= minimumToWin && averageScore2 > averageScore1) {
            return `${team2} wins the trophy!`;
        } else if (averageScore1 >= minimumToWin && averageScore2 >= minimumToWin && averageScore1 === averageScore2) {
            return `${team1} and ${team2} have a draw!`;
        } else {
            return `Neither ${team1} nor ${team2} has passed the minimum score!`
        }
    } else if (minimumToWin === undefined) {
        if (averageScore1 > averageScore2) {
            return `${team1} wins the trophy!`;
        } else if (averageScore2 > averageScore1) {
            return `${team2} wins the trophy!`;
        } else if (averageScore1 === averageScore2) {
            return `${team1} and ${team2} have a draw!`;
        }
    }
}

winner = calculateWinner(firstTeam, firstTeamAverage, secondTeam, secondTeamAverage, minimumScoreToWin);
console.log(winner);
*/

/*
As a country guest,
I want to be able to calculate tips that are customary in country's restaurants
So that I can reward waiters appropriately and not overspend

Conditions of satisfaction:
1) Tip is 15% for bills between 50 and 300 (included)
2) Tip is 20% for the rest
3) The calculation result should have the following format:
"The bill is 275, the tip is 41.25, and the total value is 316.25."

Scenario outline: Calculate tip based on the bill amount

    Given I've ordered items for the amount <bill>
        And it' customary to pay the tip <tip> for this amount
    When I get the bill
    Then I should have the tip amount <time_amount>
        And I should have the total bill amount <total_amount>

        Examples:
        | bill | tip  | tip_amount | total_amount |
        | 275  | 0.15 | 41.25      | 316.25       |
        | 40   | 0.2  | 8          | 48           |
        | 430  | 0.2  | 86         | 516          |
        | 50   | 0.15 | 7.5        | 57.5         |
        | 300  | 0.15 | 45         | 345          |

 */

/*
let bill, tipAmount, totalAmount, tipAndTotalBill;

bill = 275;

function calculateTip (bill) {
    let tipTotal, tipPercentage;
    tipPercentage = bill >= 50 && bill <=300 ? 0.15 : 0.2;
    tipTotal = bill * tipPercentage;
    return tipTotal;
}

function calculateTotalBillAmount (bill, tipAmount) {
    let totalBillAmount;
    totalBillAmount = bill + tipAmount;
    return totalBillAmount;
}

function calculateTipAndTotalBillValue (bill) {
    let tipAndTotalBillValue = [];
    let tipTotal, totalBillAmount;
    tipTotal = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
    tipAndTotalBillValue.push(tipTotal);
    totalBillAmount = bill + tipTotal;
    tipAndTotalBillValue.push(totalBillAmount);
    return tipAndTotalBillValue;
}

/*
tipAmount = calculateTip(bill);
console.log(tipAmount);

totalAmount = calculateTotalBillAmount(bill, tipAmount);
console.log(totalAmount);

console.log(`The bill is ${bill}, the tip is ${tipAmount}, and the total value is ${totalAmount}.`);
*/
/*
tipAndTotalBill = calculateTipAndTotalBillValue(bill);
console.log(`The bill is ${bill}, the tip is ${tipAndTotalBill[0]}, and the total value is ${tipAndTotalBill[1]}.`);

*/

const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people, and its capital city is ${capitalCity}.`;
};

const descriptionRussia = describeCountry("Russia", 140, "Moscow");
console.log(descriptionRussia);
