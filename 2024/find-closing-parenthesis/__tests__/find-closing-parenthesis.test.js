const { findClosingParenthesis } = require("../find-closing-parenthesis");

describe("findClosingParenthesis()", () => {
  it("empty string returns -1", () => {
    const input = "";
    const output = -1;
    expect(findClosingParenthesis(input)).toBe(output);
  });
  it("string with no parenthesis or nth returns -1", () => {
    const input = "hello";
    const output = -1;
    expect(findClosingParenthesis(input)).toBe(output);
  });
  it("string with parenthesis and nth returns position of closing parenthesis", () => {
    const input = "(hello)";
    const nth = 1;
    const output = 6;
    expect(findClosingParenthesis(input, nth)).toBe(output);
  });
  it("string with parenthesis and nth returns position of closing parenthesis", () => {
    const input = "Hello, (world). (Something Else).";
    const nth = 2;
    const output = 31;
    expect(findClosingParenthesis(input, nth)).toBe(output);
  });
  it("string with parenthesis and nth returns position of closing parenthesis", () => {
    const input = "Hello, (world, (foo) bar (something) else), foo (bar) cat";
    const nth = 3;
    const output = 35;
    expect(findClosingParenthesis(input, nth)).toBe(output);
  });
  it("string with parenthesis and nth returns position of closing parenthesis", () => {
    const input = "Hello, (world, (foo) bar (something) else), foo (bar) cat";
    const nth = 1;
    const output = 41;
    expect(findClosingParenthesis(input, nth)).toBe(output);
  });
});
