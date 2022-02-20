const createCalc = (n) => {
  let sum = 0;
  let counter = n;

  const calc = (num) => {
    sum += num;
    counter -= 1;

    if (counter === 0) return sum;

    return calc;
  };
  return calc;
};

const calc = createCalc(4);

console.log(calc(4)(2)(3)(1)); // 10

/* */
// counter 4
// sum 0 -> 4
// counter 4 -> 3

// counter 3
// sum 4 -> 6
// counter 3 -> 2

// counter 2
// sum 6 -> 9
// counter 2 -> 1

// counter 1
// sum 9 -> 10
// counter 1 -> 0
