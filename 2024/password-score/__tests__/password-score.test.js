const passwordScore = require("../password-score");

describe("marks a password out of 7", () => {
  test("scores 1 for less than four characters", () => {
    const input = "bob";
    const output = 1;
    expect(passwordScore(input)).toBe(output);
  });
  test("scores 2 for less than nine characters", () => {
    const input = "bobbybob";
    const output = 2;
    expect(passwordScore(input)).toBe(output);
  });
  test("scores 3 for more than eight characters and all letters", () => {
    const input = "bobbobbob";
    const output = 3;
    expect(passwordScore(input)).toBe(output);
  });
  test("scores 4 for more than eight characters includes a number", () => {
    const input = "bobbobbob1";
    const output = 4;
    expect(passwordScore(input)).toBe(output);
  });
  test("scores 5 for more than eight characters includes a number and special character", () => {
    const input = "bobbob1#2$";
    const output = 5;
    expect(passwordScore(input)).toBe(output);
  });
  test("scores 6 for more than twelve characters includes a number", () => {
    const input = "bobbobbobbob123";
    const output = 6;
    expect(passwordScore(input)).toBe(output);
  });
  test("scores 7 for more than twelve characters includes a number and special character", () => {
    const input = "bobbobbob1!2@3#";
    const output = 7;
    expect(passwordScore(input)).toBe(output);
  });
});
