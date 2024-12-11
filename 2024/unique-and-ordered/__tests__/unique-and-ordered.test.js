const uniqueAndOrdered = require("../unique-and-ordered");

describe("takes a sequnce and retusn a list of items without any of the same values next to each other - removed while preserving the original order of the elements", () => {
  test("returns an empty array when passed an empty array", () => {
    expect(uniqueAndOrdered([])).toEqual([]);
  });
  test("returns array of single value if passed array of single value", () => {
    expect(uniqueAndOrdered([2])).toEqual([2]);
  });
  test("returns unique ordered numbers from array", () => {
    const input = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1];
    const output = [1, 2, 3, 1];
    expect(uniqueAndOrdered(input)).toEqual(output);
  });
  test("returns unique ordered letters from a string", () => {
    const input = "nnoorrtthhccooddeerrss";
    const output = ["n", "o", "r", "t", "h", "c", "o", "d", "e", "r", "s"];
    expect(uniqueAndOrdered(input)).toEqual(output);
  });
  test("is case sensitive for strings", () => {
    const input = "AaAAABBBCCCc";
    const output = ["A", "a", "A", "B", "C", "c"];
    expect(uniqueAndOrdered(input)).toEqual(output);
  });
  test("check does not mutate the original array", () => {
    const input = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1];
    uniqueAndOrdered(input);
    expect(input).toEqual([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1]);
  });
  test("returns a new object with a new reference in memory", () => {
    const inputRef = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1];
    const returnValue = uniqueAndOrdered(inputRef);
    expect(inputRef).not.toBe(returnValue);
  });
});
