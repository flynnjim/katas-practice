const getPalindromes = require("../get-palindromes");

describe("takes array of words and returns array of palindromes", () => {
  test("returns [] when passed []", () => {
    const input = [];
    const output = [];
    expect(getPalindromes(input)).toEqual(output);
  });
  test("identifies palindromes", () => {
    const input = ["racecar", "kayak", "tacocat"];
    const output = ["racecar", "kayak", "tacocat"];
    expect(getPalindromes(input)).toEqual(output);
  });
  test("ignores non-palindromes", () => {
    const input = ["pineapple", "pony", "racecar"];
    const output = ["racecar"];
    expect(getPalindromes(input)).toEqual(output);
  });
  test("returns [] when passed no palindromes", () => {
    const input = ["pineapple", "watermelon", "pony"];
    const output = [];
    expect(getPalindromes(input)).toEqual(output);
  });
});
