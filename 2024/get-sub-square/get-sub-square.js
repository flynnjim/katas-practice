/*

getSubSquare
Given a square matrix (two-dimensional array) and a xStartIndex and a yStartIndex, you must return a 3 * 3 subsquare from the array.

For example, in the following matrix, if asked for the subsquare with start indexes of 0, 0, you would extract a two-dimensional matrix beginning from the top left-hand corner of the matrix:

const matrix = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 4, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

getSubSquare(matrix, 0, 0);

--> [ [5, 3, 4], [6, 7, 2], [1, 9, 8] ]
Here is another example:

const matrix = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 4, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

getSubSquare(matrix, 2, 5);

--> [ [3, 9, 2], [1, 5, 3], [7, 4, 1] ]
Testing Notes:
The matrix will always be square and will always have dimensions of at least 3 * 3.
If yStartIndex or xStartIndex is too high and a complete 3 * 3 subsquare cannot be extracted, the function should return a matrix with null values in the overflowed positions.

*/

const getSubSquare = (matrix, xStartIndex, yStartIndex) => {
  if (xStartIndex >= matrix.length || yStartIndex >= matrix.length) {
    return Array(3)
      .fill()
      .map(() => Array(3).fill(null));
  }

  const subSquareArray = [];

  for (let y = yStartIndex; y < yStartIndex + 3 && y < matrix.length; y++) {
    const subArray = matrix[y];
    const subSubArray = [];
    for (let x = xStartIndex; x < xStartIndex + 3 && x < subArray.length; x++) {
      subSubArray.push(subArray[x]);
    }
    while (subSubArray.length < 3) {
      subSubArray.push(null);
    }
    subSquareArray.push(subSubArray);
  }

  while (subSquareArray.length < 3) {
    subSquareArray.push(Array(3).fill(null));
  }

  return subSquareArray;
};

module.exports = { getSubSquare };
