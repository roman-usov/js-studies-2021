function missingNumber(nums) {

  const n = nums.length;

  if (n === 1 && nums[0] === 1) return 0;

  const sortedNums = nums.sort((a, b) => a - b);

  if (sortedNums[n - 1] !== n) return n;

  for (let i = 0; i < n - 1; i += 1) {
    if (sortedNums[i + 1] - sortedNums[i] !== 1) {
      return sortedNums[i] + 1;
    }
  }
  return 0;
}

// console.log(missingNumber([3,0,1]));
// console.log(missingNumber([0,1]));
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([1]));
console.log(missingNumber([0]));
console.log(missingNumber([1,2,3]));