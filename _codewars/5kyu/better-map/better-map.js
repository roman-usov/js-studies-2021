// Helper functions are useful for cases, e.g. when we need to provide a callback, but don't want such a callback to do anything for us

const noop = () => {}; // no operation, returns undefined

const identity = (a) => a; //returns the same parameter value

const increment = (a) => a + 1;

const addIndex = (a, i) => a + i;

const returnArrLength = (a, i, arr) => a + i + arr.length;

Array.prototype.betterMap = function (callback, thisArg) {
  const newArr = [];
  //const boundCallback = callback.bind(thisArg)
  for (let i = 0; i < this.length; i += 1) {
    newArr.push(callback.call(thisArg, this[i], i, this)); // exists in the older JS versions
  }
  return newArr;
};

const testArr1 = [1, 2, 3];

console.assert(
  Array.isArray(testArr1.betterMap(identity)),
  "Result should be an array"
);

console.assert(
  testArr1.betterMap(identity) !== testArr1,
  "betterMap should return a new array"
);

console.assert(
  testArr1.betterMap(identity).toString() === testArr1.toString(),
  "every value in the new array should be equal to the corresponding value of the original array for identity"
);

console.assert(
  [1, 2, 3].betterMap(increment).toString() === [2, 3, 4].toString(),
  "every value in the new array should be incremented in the returned array"
);

console.assert(
  [1, 2, 3].betterMap(addIndex).toString() === [1, 3, 5].toString(),
  "every value in the new array should be increased by the index value of the original array"
);

console.assert(
  [1, 2, 3].betterMap(returnArrLength).toString() === [4, 6, 8].toString(),
  "every value in the new array should be increased by the index value and the length value of the original array"
);

console.assert(
  [1, 2, 3]
    .betterMap(
      function (a) {
        return a + this.test;
      },
      { test: 1 }
    )
    .toString() === [2, 3, 4].toString(),
  "every value in the new array should be increased by the index value and the length value of the original array"
);
