"use strict";

////// Shortest Route in a Graph

let iteration = 0;

/*function route(graph, removed, dot, start) {
  if (dot === start) return shortestRoute;
  const nextDot = Object.keys(graph).find((key) => {
    return removed[key] ? removed[key].includes(dot) : false;
  });
  if (!nextDot || nextDot === start) return shortestRoute;
  shortestRoute.push(nextDot);
  return route(graph, removed, nextDot, start);
}*/

/*const shortestRoute = [];

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

const graph1 = {};
graph1.a = ["b", "c"];
graph1.b = ["f"];
graph1.f = ["g"];
graph1.g = ["j"];
graph1.c = ["d"];
graph1.d = ["k"];
graph1.k = ["g", "l"];
graph1.l = ["j"];

const removed = {
  a: ["b", "c"],
  b: ["f"],
  c: ["d"],
  d: ["k"],
  f: ["g"],
  g: ["j"],
};*/

/*const res = route(graph1, removed, "g", "a");
console.log(res);*/

/*const breadthSearch = function (graph, start, end) {
  let queue = [];
  queue.push(start);
  console.log(`queue = ${queue}`);
  let count = 0;
  let removed = {};
  let shortestDots = [];
  function route(dot, start) {
    const previousDot = Object.keys(removed).find((key) =>
      removed[key].includes(dot)
    );
    console.log(`previousDot = ${previousDot}`);
    if (!previousDot || previousDot === start) return shortestDots;
    shortestDots.unshift(previousDot);
    return route(previousDot, start);
  }
  while (queue.length > 0) {
    count++;
    const current = queue.shift();
    removed[current] = graph[current];
    console.log(`current = ${current}, at count = ${count}`);
    console.log(`graph[current] = ${graph[current]}`);
    if (!graph[current]) {
      graph[current] = [];
    }
    console.log(
      `graph[current].includes(end) = ${graph[current].includes(end)}`
    );
    if (graph[current].includes(end)) {
      console.log(removed);
      return [start, ...route(current, start), current, end];
    } else {
      queue = [...queue, ...graph[current]];
      console.log(`after count = ${count}, queue = ${queue}`);
    }
  }
};*/

const breadthSearch = function (graph, start, end) {
  let queue = [];
  queue.push(start);
  let removed = {};
  let shortestDots = [];
  function route(dot, start) {
    const previousDot = Object.keys(removed).find((key) =>
      removed[key].includes(dot)
    );
    if (!previousDot || previousDot === start) return shortestDots;
    shortestDots.unshift(previousDot);
    return route(previousDot, start);
  }
  while (queue.length > 0) {
    const current = queue.shift();
    removed[current] = graph[current];
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return [start, ...route(current, start), current, end];
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
};

console.log(breadthSearch(graph, "a", "e"));

const matrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
