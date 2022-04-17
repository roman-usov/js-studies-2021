function intersection(nums1, nums2) {
  
  function checkArrays(shorterArr, longerArr) {
    const checked = new Map();
      
    const intersection = [];
      
    for (let i = 0; i < shorterArr.length; i += 1) {
      if (checked.has(shorterArr[i])) {
        continue;
      } else {
        checked.set(shorterArr[i], i);
      }

      if (longerArr.includes(shorterArr[i])) {
        intersection.push(shorterArr[i]);
      }
    }
    
    return intersection;
  }

  if (nums1.length <= nums2.length) {
    return checkArrays(nums1, nums2);
  } else {
    return checkArrays(nums2, nums1);
  }
}