const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const startingDivisor = 2;

  const iterate = (divisor) => {
    if (num % divisor === 0) return divisor;

    if (divisor > num / 2) return num;

    return iterate(divisor + 1);
  };

  return iterate(startingDivisor);
  // END
};

const result = smallestDivisor(15);

//module.exports = smallestDivisor;
