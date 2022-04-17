function thirdMax(numsArr) {

  const filteredArr = [...new Set(numsArr)];

  if (filteredArr.length < 3) {
    return Math.max(...filteredArr);
  }

  return filteredArr.sort((a, b) => a - b)[filteredArr.length - 3];
}

console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([1,1,2]));
