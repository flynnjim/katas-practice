const { sumConsecutiveDuplicates } = require("../sum-consecutive-duplicates");

describe("sumConsecutiveDuplicates()", () => {
  it("array with no consecutive duplicates returns same array", () => {
    const input = [1, 2, 3];
    const output = [1, 2, 3];
    expect(sumConsecutiveDuplicates(input)).toEqual(output);
  });
  it("array with consecutive duplicates returns altered array", () => {
    const input = [1, 1, 2, 2, 3, 3];
    const output = [2, 4, 6];
    expect(sumConsecutiveDuplicates(input)).toEqual(output);
  });
  it("array with consecutive duplicates returns altered array", () => {
    const input = [1, 1, 2, 3];
    const output = [4, 3];
    expect(sumConsecutiveDuplicates(input)).toEqual(output);
  });
  it("array with consecutive duplicates returns altered array", () => {
    const input = [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1];
    const output = [8, 2, 3];
    expect(sumConsecutiveDuplicates(input)).toEqual(output);
  });
});
