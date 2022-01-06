const inputArray = [4, 3, 4, 3, 3, 5, 3];

const testAr = [...new Set(inputArray)];
console.log(testAr);

const findDuplicates = function (arr) {
  // let output = [];
  // for (let i = 0; i <= arr.length - 2; i++) {
  // 	let j = arr.length - 1;
  // 	for (let k = j; k > i; k--) {
  // 		if (arr[i] === arr[k]) {
  // 			output.push(arr[i]);
  // 		}
  // 	}
  // }
  const duplicated = arr.filter((item, index) => arr.indexOf(item) !== index);
  console.log(duplicated);
  const uniqueDuplicates = duplicated.filter(
    (item, index) => duplicated.indexOf(item) === index
  );
  //return [...new Set(filtered)];
  return uniqueDuplicates;
};

const outputArray = findDuplicates(inputArray);
console.log(outputArray);
