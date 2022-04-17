class NumArray {
  constructor(nums) {
    this.nums = nums;
  }
    
    sumRange(left, right) {
        const arr = this.nums.slice(left, right + 1);
        return arr.reduce((acc, current) => acc + current, 0);
  }
}

const arr = [1, 2, 3, 4, 5];

const numArray = new NumArray(arr);
console.log(numArray.sumRange(1, 3))

