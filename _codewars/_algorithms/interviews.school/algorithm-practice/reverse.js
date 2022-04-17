// function reverse(arr) {
//   return arr.reverse();
// }

function reverseWithFor(arr) {
  const reversed = [];

  for (let i = 0, j = arr.length - 1; i < arr.length; i += 1, j -= 1) {
    reversed[j] = arr[i];
    console.log({reversed});
  }

  console.log(reversed);

  return reversed;
}

function reverseString(s) {
  let start = 0;
  let end = s.length - 1;
  
  while(start < end) {
      const tempStart = s[start];
      s[start] = s[end];
      s[end] = tempStart;
      start += 1;
      end -= 1;
  }
}

// console.log(reverse(["h","e","l","l","o"]));
// console.log(reverse(["H", "a", "n", "n", "a", "h"]));
console.log(reverseWithFor(["h","e","l","l","o"]));
console.log(reverseWithFor(["H","a","n","n","a","h"]));