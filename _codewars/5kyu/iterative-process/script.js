const num = 3;
const result = 6;

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }

  const iterate = (accumulator, currentValue) => {
    if (currentValue === 1) {
      return accumulator;
    }
    return iterate(currentValue * accumulator, currentValue - 1);
  };

  return iterate(1, num);
};

console.assert(factorial(num) === result, "Should be six");

/*

| iterate(6, 1) | true  |               |                    | return 6 |          |          |
       ^------------------------|                                  v
| iterate(2, 3) | false | iterate(6, 1) | wait iterate(6, 1) |     6    | return 6 |          |
       ^------------------------|                                             v
| iterate(1, 3) | false | iterate(3, 2) | wait iterate(3, 2) |          |     6    | return 6 |

*/

/////// Factorial Recursive //////

const input = 5;

const factorialRecursive = (num) => {
  if (num <= 0) return 1;
  return num * factorialRecursive(num - 1);
};

const resultRecursive = factorialRecursive(5);
console.log(resultRecursive);

/*

0 return 1
1 * factorial(0) return 1
2 * factorial(1) return 2
3 * factorial(2) return 6
4 * factorial(3) return 24
5 * factorial(4) return 120

 */

/////// Sum Recursive //////

const sum = (n) => {
  if (n === 1) {
    return 1;
  }

  return sum(n - 1) + n;
};

/*
sum(1) + 2 return 3
sum(2) + 3 return 6
sum(3) + 4 return 10
sum(4) + 5 return 15

 */

function doSomething() {
  let x = 0;
  let flag = false;

  setTimeout(() => {
    flag = true;
  }, 2000);

  while (flag === "false") {
    x += 1;
  }

  return x;
}
