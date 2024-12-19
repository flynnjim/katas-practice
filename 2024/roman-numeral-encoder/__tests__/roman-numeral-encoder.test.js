const { romanNumeralEncoder } = require("../roman-numeral-encoder");

describe("romanNumeralEncoder()", () => {
  test("1 returns I", () => {
    const input = 1;
    const output = "I";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("2 returns II", () => {
    const input = 1;
    const output = "I";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("4 returns IV", () => {
    const input = 4;
    const output = "IV";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("5 returns V", () => {
    const input = 5;
    const output = "V";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("8 returns VIII", () => {
    const input = 8;
    const output = "VIII";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("9 returns IX", () => {
    const input = 9;
    const output = "IX";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("10 returns X", () => {
    const input = 10;
    const output = "X";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("17 returns XVII", () => {
    const input = 17;
    const output = "XVII";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("60 returns LX", () => {
    const input = 60;
    const output = "LX";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("75 returns LXXV", () => {
    const input = 75;
    const output = "LXXV";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("91 returns XCI", () => {
    const input = 91;
    const output = "XCI";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("157 returns CLVII", () => {
    const input = 157;
    const output = "CLVII";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("484 returns CDLXXXIV", () => {
    const input = 484;
    const output = "CDLXXXIV";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("539 returns DXXXIX", () => {
    const input = 539;
    const output = "DXXXIX";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("928 returns CMXXVIII", () => {
    const input = 928;
    const output = "CMXXVIII";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
  test("3856 returns MMMDCCCLVI", () => {
    const input = 3856;
    const output = "MMMDCCCLVI";
    expect(romanNumeralEncoder(input)).toBe(output);
  });
});
