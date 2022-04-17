function twoSum(nums, target) {
  const cache = {};

  for (let i = 0; i < nums.length; i += 1) {

    const curNum = nums[i];
    console.log('curNum', curNum);

    for (let j = i + 1; j < nums.length; j += 1) {
      console.log('---- inner loop', j);
      const nextNum = nums[j];
      console.log('nextNum', nextNum);

      if (cache[curNum] === nextNum) {
        console.log('hit cache', cache);
        continue;
      } else if (curNum + nextNum === target) {
        return [i, j];
      } else {
        cache[curNum] = nextNum;
        console.log('put to cache', cache);
      }

    }
  }
}

function twoSum(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const curNum = nums[i];
    const neededPair = target - curNum;

    if (hashMap.has(neededPair)) {
      return [i, hashMap.get(neededPair)];
    } else {
      hashMap.set(curNum, i);
    }
  }
}

console.log(twoSum([2,5,5,11], 10));