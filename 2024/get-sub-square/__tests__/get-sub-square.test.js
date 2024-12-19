const { getSubSquare } = require("../get-sub-square");

const matrix = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 4, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

describe("getSubSquare()", () => {
  it("subsquare of indexes of 0, 0 extract two dimensional array beginning top left", () => {
    const output = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];
    expect(getSubSquare(matrix, 0, 0)).toEqual(output);
  });
  it("subsquare of indexes extract two dimensional array", () => {
    const output = [
      [3, 9, 2],
      [1, 5, 3],
      [7, 4, 1],
    ];
    expect(getSubSquare(matrix, 2, 5)).toEqual(output);
  });
  it("returns array of null values if y or x is greater than length of array", () => {
    const output = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(getSubSquare(matrix, 10, 10)).toEqual(output);
  });
  it("fills some squares with null values when out of range", () => {
    const output = [
      [3, 5, null],
      [7, 9, null],
      [null, null, null],
    ];
    expect(getSubSquare(matrix, 7, 7)).toEqual(output);
  });
  it("returns new object with new reference in memory", () => {
    const returnValue = getSubSquare(matrix, 0, 0);
    expect(returnValue).not.toBe(matrix);
  });
  it("does not mutate original array", () => {
    const ogMatrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    const myMatrix = JSON.parse(JSON.stringify(ogMatrix));
    getSubSquare(myMatrix, 0, 0);
    expect(ogMatrix).toEqual(myMatrix);
  });
});
