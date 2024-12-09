const alphabetReplace = require("../alphabet-replace");

describe("replaces each letter fo string with index of the letter in alphabet", () => {
  test("replaces the letters in a single word with codes", () => {
    const input = "code";
    const output = "3 15 4 5";
    expect(alphabetReplace(input)).toBe(output);
  });
  test("replaces the letters in a single word, case-insensitive", () => {
    const input = "Northcoders";
    const output = "14 15 18 20 8 3 15 4 5 18 19";
    expect(alphabetReplace(input)).toBe(output);
  });
  test("ignores spaces between words", () => {
    const input = "expert programming";
    const output = "5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7";
    expect(alphabetReplace(input)).toBe(output);
  });
});
