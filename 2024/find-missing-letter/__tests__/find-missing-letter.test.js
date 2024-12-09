const findMissingLetter = require("../find-missing-letter");

describe("finds missing letter in series", () => {
  test("returns an empty string if no letters are missing", () => {
    const input = ["A", "B", "C", "D", "E"]
    const output = ""
    expect(findMissingLetter(input)).toBe(output)
  });
  test("returns a missing capital letter", () => {
    const input = ["A", "B", "C", "E"]
    const output = "D"
    expect(findMissingLetter(input)).toBe(output)
  });
  test("returns a missing lower case letter", () => {
    const input = ["e", "f", "g", "i"]
    const output = "h"
    expect(findMissingLetter(input)).toBe(output)
  });
});
