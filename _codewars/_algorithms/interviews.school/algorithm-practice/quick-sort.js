const input = [9, 3, 3, 5, 2, 1, 1];

function quickSort(nums) {
  if (nums.length <= 1) return nums;

  const pivotIndex = nums.length - 1;
  const pivot = nums[pivotIndex];
  const left = [];
  const right = [];

  for (const el of nums.slice(0, nums.length - 1)) {
    el < pivot ? left.push(el) : right.push(el);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(input));
