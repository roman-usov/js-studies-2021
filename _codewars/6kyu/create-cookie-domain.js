"use strict";

const inputStrings = [
  "https://mf-cft-stage.apps.lmru.tech/basket",
  "https://leroymerlin.ru/basket",
  "https://sample.gtw-02.office4.example.com/basket",
];

//Test Set 1

const expectedStrings = [".lmru.tech", ".leroymerlin.ru", ".example.com"];

//Test Set 2

// const expectedStrings = [
// 	'.apps.lmru.tech',
// 	'.leroymerlin.ru',
// 	'.office4.example.com',
// ];

function testDomains(domains) {
  let outputStrings = [];
  domains.forEach((el) => outputStrings.push(createCookieDomainAttribute(el)));
  outputStrings.forEach((el, index) =>
    console.log(expectedStrings[index] === el, outputStrings[index])
  );
}

//Option 1 - two levels

const createCookieDomainAttribute = function (domain) {
  const splitDomain = domain
    .replace(/^(.*)\/\/(?=.)/, "")
    .replace(/\/[^\/]*$/, "")
    .split(".");
  return `.${splitDomain.splice(splitDomain.length - 2, 2).join(".")}`;
};

//Option 2 - two levels if only two levels, three levels if three or more levels

// const createCookieDomainAttribute = function (domain) {
// 	const splitDomain = domain
// 		.replace(/^(.*)\/\/(?=.)/, '')
// 		.replace(/\/[^\/]*$/, '')
// 		.split('.');
// 	if (splitDomain.length === 2) return `.${splitDomain.join('.')}`;
// 	return `.${splitDomain.splice(splitDomain.length - 3, 3).join('.')}`;
// };

//console.log(createCookieDomainAttribute(inputStrings[0]));

//createCookieDomainAttribute(inputStrings[0]);

testDomains(inputStrings);

// const testResults = outputStrings.map(
// 	(el, index) => expectedStrings[index] === el
// );
// console.log(testResults);
