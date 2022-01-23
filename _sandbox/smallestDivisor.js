export const smallestDivisor = (num, counter = 2) => {
  // BEGIN (write your solution here)
  if (num === 1) return 1;

  let result = counter;

  if (num % result === 0) return result;

  if (num === result) return num;

  return smallestDivisor(num, result + 1);
  // END
};
