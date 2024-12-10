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
  test("checks function returns new object with new ref in memory", () => {
    const refInput = ["pineapple", "pony", "racecar"]
    const returnValue = getPalindromes(refInput)
    expect(refInput).not.toBe(returnValue)
  })
  test("check function does not mutate the original array", () => {
    const mutInput = ["pineapple", "pony", "racecar"]
    getPalindromes(mutInput)
    expect(mutInput).toEqual(["pineapple", "pony", "racecar"])
  })
});
