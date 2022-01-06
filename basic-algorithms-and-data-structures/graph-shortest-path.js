"use strict";

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
//graph.b = { d: 7 };
graph.c = { d: 5, e: 2 };
//graph.c = { d: 5 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

/*function shortPath(graph, start, end) {
  const costs = {};
  const processed = [];
  let neighbors;
  console.log(
    `Start adding costs for the start neighbors and big values for the other nodes`
  );
  Object.keys(graph).forEach((node, index) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 100000000;
      console.log(`iteration ${index}: node = ${node}, value = ${value}`);
      console.log(costs);
    }
  });
  console.log(
    `End adding costs for the start neighbors and big values for the other nodes`
  );
  console.log(costs);
  let node = findNodeWithLowestCost(costs, processed);
  console.log(`Initial node with the lowest cost = ${node}`);
  let counter = 0;
  while (node) {
    counter++;
    console.log(`Start while iteration ${counter} for node ${node}`);
    const cost = costs[node]; //get the cost of the current node
    console.log(`Current cost for node ${node} is cost = ${cost}`);
    neighbors = graph[node]; //save the object with the neighbors of the current node
    console.log(`Neighbors for current node ${node}`);
    console.log(neighbors);
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      console.log(`New cost: current cost + neighbor cost = ${newCost}`);
      console.log(`New cost < costs[neighbor]: ${newCost < costs[neighbor]}`);
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
        console.log(`Updated neighbor costs: ${costs[neighbor]}`);
      }
    });
    processed.push(node);
    console.log(`Processed = ${processed}`);
    console.log(`Current state of costs`);
    console.log(costs);
    node = findNodeWithLowestCost(costs, processed);
    console.log(`New node with lowest cost = ${node}`);
  }
  console.log(`Costs to return`);
  console.log(costs);
  return costs;
}*/

function shortPath(graph, start, end) {
  const distanceTable = {};
  const processed = [];
  let neighbors;
  Object.keys(graph).forEach((node, index) => {
    if (node !== start) {
      let value = graph[start][node];
      distanceTable[node] = value || 100000000;
    }
  });
  let node = findNodeWithShortestDistanceFromStart(distanceTable, processed);
  while (node) {
    const distance = distanceTable[node]; //get the cost of the current node
    neighbors = graph[node]; //save the object with the neighbors of the current node
    Object.keys(neighbors).forEach((neighbor) => {
      let distanceToNeighborFromStart = distance + neighbors[neighbor];
      if (distanceToNeighborFromStart < distanceTable[neighbor]) {
        distanceTable[neighbor] = distanceToNeighborFromStart;
      }
    });
    processed.push(node);
    node = findNodeWithShortestDistanceFromStart(distanceTable, processed);
  }
  return distanceTable;
}

function findNodeWithShortestDistanceFromStart(distanceTable, processed) {
  let shortestDistanceFromStart = 100000000;
  let nodeWithShortestDistanceFromStart;
  Object.keys(distanceTable).forEach((node) => {
    let distanceToNode = distanceTable[node];
    if (
      distanceToNode < shortestDistanceFromStart &&
      !processed.includes(node)
    ) {
      shortestDistanceFromStart = distanceToNode;
      nodeWithShortestDistanceFromStart = node;
    }
  });
  return nodeWithShortestDistanceFromStart;
}

let short = shortPath(graph, "a", "d");
// console.log(short);
