/* function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let counter = 1;


  while (start <= end) {

    console.log('-----counter', counter);
    const middle = Math.floor((start + end) / 2);
    console.log('middle', middle);

    const guess = nums[middle];
    console.log('guess', guess);

    if (guess === target) {
      return middle;
    }

    if (target > guess) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }

    console.log('new start', start);
    console.log('new end', end);

    counter++;

  }
  return null;
} */

function binarySearchRecursive(nums, target, start = 0, end = nums.length - 1) {

  console.log('start', start, 'end', end);

  if (start > end) return null;

  const middle = Math.floor((start + end) / 2);
  console.log('middle', middle);

  const guess = nums[middle];
  console.log('guess', guess);

  if (guess === target) return middle;

  if (target > guess) {
    start = middle + 1;
    return binarySearchRecursive(nums, target, start, end);
  } else {
    end = middle - 1;
    return binarySearchRecursive(nums, target, start, end);
  }
}

console.log(binarySearchRecursive([1,3,5,7,9], 3));
// console.log(binarySearch([1,3,5,7,9], 10));