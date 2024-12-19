const { subArrSum } = require("../sub-array-sum");

describe("subArrSum()", () => {
  test("empty array returns -1", () => {
    const input = [];
    const output = -1;
    expect(subArrSum(input)).toBe(output);
  });
  test("array returns max value of consecutive values", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const output = 6;
    expect(subArrSum(input)).toBe(output);
  });
  test("array returns max value of consecutive values", () => {
    const input = [9, 8, 7, -3, 6, 5, 4, -3, 2, 1];
    const output = 36;
    expect(subArrSum(input)).toBe(output);
  });
  test("array returns max value of consecutive values", () => {
    const input = [5, -6, 2, 9, -4, -3, 8, -10, 20];
    const output = 22;
    expect(subArrSum(input)).toBe(output);
  });
});
