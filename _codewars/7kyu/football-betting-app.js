"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const getUniqueEvents = function (game) {
  const eventsArr = [];
  for (const [key, value] of game) {
    eventsArr.push(value);
  }
  const events = [...new Set(eventsArr)];
  console.log(events);
};
getUniqueEvents(gameEvents);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2

gameEvents.delete(64);
console.log(gameEvents);

// 3

const averageOccurence = 90 / gameEvents.size;
console.log(
  `An event happened, on average, every ${averageOccurence} minutes.`
);

// 4

for (const [key, value] of gameEvents) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${key}: ${value}`);
}

/* //1
const { scored: goals } = game;
for (const [goal, player] of goals.entries()) {
	console.log(`Goal ${goal + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);
function calcAverage(arr) {
	let total = 0;
	for (const el of arr) {
		total += el;
	}
	console.log((total / arr.length).toFixed(2));
}
calcAverage(odds);

//3
const oddsArr = Object.entries(game.odds);
function printOdds(arr) {
	for (const [oddKey, oddValue] of arr) {
		game[oddKey]
			? console.log(`Odd of victory ${game[oddKey]}: ${oddValue}`)
			: console.log(`Odd of draw: ${oddValue}`);
	}
}

// function printOdds(arr) {
// 	for (const [oddKey, oddValue] of arr) {
// 		const oddStr = oddKey === 'x' ? 'draw' : `victory ${game[oddKey]}`;
// 		console.log(`Odd of ${oddStr}: ${oddValue}`);
// 	}
// }

printOdds(oddsArr);

//4
const scoredPlayers = game.scored;
console.log(scoredPlayers);

function getScorers(scored) {
	const scorers = {};
	function getNumberOfGoals(player) {
		let goals = 0;
		for (const scoredPlayer of scored) {
			player === scoredPlayer && goals++;
		}
		return goals;
	}
	for (const player of scored) {
		scorers[player] = getNumberOfGoals(player);
	}
	return scorers;
}

const scorers = getScorers(scoredPlayers);
console.log(scorers);

const scorers2 = {};
for (const player of game.scored) {
	scorers2[player] ? scorers2[player]++ : (scorers2[player] = 1);
}
console.log(scorers2); */

// function getNumberOfRepeatingValues(val, arr) {
// 	let repeatingValues = 0;
// 	for (const item of arr) {
// 		val === item && repeatingValues++;
// 	}
// 	return repeatingValues;
// }

// const test = getNumberOfRepeatingValues('Lewandowski', scoredPlayers);
// console.log(test);

/* const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;

const {
	odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...scoringPlayers) {
	console.log(scoringPlayers);
	for (let i = 0; i < scoringPlayers.length; i++) {
		console.log(`Scoring player ${i + 1}: ${scoringPlayers[i]}.`);
	}
	console.log(`Total scored: ${scoringPlayers.length}`);
};

printGoals('Davies', 'Muller', 'Kimmich');
printGoals(...game.scored);

team1 > team2 && console.log('Team 2 is more likely to win');
team1 < team2 && console.log('Team 1 is more likely to win'); */
