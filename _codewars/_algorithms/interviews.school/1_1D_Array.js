let a = [5, 7, 8, 9, -1, 3];

function prefixSum(a_copy) {
  const prefixSum = new Array(a_copy.length);
  for (let i = 0; i < a_copy.length; i++) {
    prefixSum[i] = a[i];
    if (i > 0) {
      prefixSum[i] += prefixSum[i - 1];
    }
  }
  return prefixSum
}

console.log(prefixSum(a))
