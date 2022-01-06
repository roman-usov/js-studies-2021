"use strict";

const inputStrand = "ATTGC";

// function DNAStrand(strand) {
// 	const DNAMap = new Map([
// 		['A', 'T'],
// 		['T', 'A'],
// 		['C', 'G'],
// 		['G', 'C'],
// 	]);
// 	let outputStrand = '';
// 	for (const char of strand) {
// 		outputStrand += DNAMap.get(char);
// 	}
// 	return outputStrand;
// }

function DNAStrand(strand) {
  const DNAMap = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return [...strand].map((el) => DNAMap[el]).join("");
}

const outputStrand = DNAStrand(inputStrand);
console.log(outputStrand);
