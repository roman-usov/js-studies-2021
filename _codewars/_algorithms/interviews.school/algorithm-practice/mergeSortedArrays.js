/* function merge(nums1, m, nums2, n) {
  const newarr = [...nums1.slice(0, m), ...nums2.slice(0, n)];
  
  return newarr.sort((a, b) => a - b);
} */

function merge(nums1, m, nums2, n) {
  nums1.splice(m);
  const splicedNums2 = nums2.slice(0, n);
  let counter = nums1.length;

  for (let i = 0; i < n; i++) {
    nums1[counter] = nums2[i];
    counter++;
  }
  
  nums1.sort((a, b) => a - b);

  console.log(nums1);
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

// let i = m;
    
// // nums1 = nums1.slice(0, m);

// for (let counter = 0; counter < n; counter += 1) {
//     nums1[i] = nums2[counter];
//     i++;
// }

// nums1.sort((a, b) => a - b);