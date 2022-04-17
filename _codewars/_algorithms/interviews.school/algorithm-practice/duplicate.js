// function containsDuplicate(nums) {
//   if ([...new Set(nums)].length === nums.length) return false;
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] === nums[i + 1]) return true;
//   }
//   return false;
// }

function containsDuplicate(nums) {

  for (let i = 0; i < nums.length; i += 1) {
    if (i !== nums.indexOf(nums[i])) return true;
  }

  return false;

}