const _ = require('lodash/fp');

const obj = {
  name: 'kyle'
}

function loopFP(i, input) {
  return _.times((i) => input);
}

console.log(loopFP(4, obj));
