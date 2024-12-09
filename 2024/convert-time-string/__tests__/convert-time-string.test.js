const convertTimeString = require("../convert-time-string");

describe("converts 24 hour clock string to 12 hour clock", () => {
  test("returns the string unchanged if already within the right format", () => {
    const input = "06:28";
    const output = "06:28";
    expect(convertTimeString(input)).toBe(output);
  });
  test("converts an afternoon time to the 12 hour format", () => {
    const input = "16:07";
    const output = "04:07";
    expect(convertTimeString(input)).toBe(output);
  });
  test("converts times in the hour after midnight to the 12 hour format", () => {
    const input = "00:56";
    const output = "12:56";
    expect(convertTimeString(input)).toBe(output);
  });
});
