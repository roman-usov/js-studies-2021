"use strict";

document.querySelector(".submit-dna").addEventListener("click", function () {
  let submittedDNA = document.querySelector(".dna-input").value;
  console.log(submittedDNA + " " + "DNA");
  let stringToReturn = "";
  if (submittedDNA === "" || submittedDNA === undefined) {
    document.querySelector(".rna").textContent = "Please, submit your DNA";
  } else {
    stringToReturn = submittedDNA.replace(/T/g, "U");
    console.log(stringToReturn + " " + "RNA");
    document.querySelector(".rna").textContent = stringToReturn;
  }
});

let dnaStringToConvert = "GGCTAССAATTTAATG";

/* let testNewString = '';
for (let i = 0; i < dnaStringToConvert.length; i++) {
	testNewString += dnaStringToConvert[i];
}
console.log(testNewString); */

const convertDnaToRna = function (dnaString) {
  let stringToReturn = "";
  if (dnaString === "" || dnaString === undefined) {
    return "No DNA string provided. Please, provide a DNA string to convert.";
  } else {
    for (let i = 0; i < dnaString.length; i++) {
      if (dnaString[i] === "T") {
        stringToReturn += dnaString[i].replace("T", "U");
      } else if (dnaString[i] !== "T") {
        stringToReturn += dnaString[i];
      }
    }
    return stringToReturn;
  }
};

let rnaString = convertDnaToRna(dnaStringToConvert);
console.log(rnaString);

/* const convertDnaToRnaRegEx = function (dnaString) {
	let stringToReturn = '';
	if (dnaString === '' || dnaString === undefined) {
		return stringToReturn;
	} else {
		stringToReturn = dnaString.replace(/T/g, 'U');
		return stringToReturn;
	}
}; */

/* let newRNA = convertDnaToRnaRegEx(dnaStringToConvert);
console.log(newRNA); */
