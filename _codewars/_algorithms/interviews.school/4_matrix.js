const input = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
];

/* const coords = [0, 1, 2, 3];

function sumRegion(arr, rowStart, colStart, rowEnd, colEnd) {
  let acc = 0;
  console.log("arr", arr);

  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      acc += arr[i][j];
    }
  }

  return acc;
}

function sumRegionWithReduce(arr, rowStart, colStart, rowEnd, colEnd) {
  let acc = 0;

  for (let i = rowStart; i <= rowEnd; i++) {
    acc += arr[i]
      .slice(colStart, colEnd + 1)
      .reduce((prev, curr) => prev + curr, 0);
  }

  return acc;
}

console.log(sumRegionWithReduce(input, 0, 1, 2, 3)); */

class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  sumRegionWithFor(rowStart, colStart, rowEnd, colEnd) {
    let acc = 0;

    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        acc += this.matrix[i][j];
      }
    }

    return acc;
  }

  sumRegionWithReduce(rowStart, colStart, rowEnd, colEnd) {
    let acc = 0;

    for (let i = rowStart; i <= rowEnd; i++) {
      acc += this.matrix[i]
        .slice(colStart, colEnd + 1)
        .reduce((prev, curr) => prev + curr, 0);
    }

    return acc;
  }
}

const newMatrix = new NumMatrix(input);

console.log(newMatrix.sumRegionWithFor(0, 1, 2, 3));
