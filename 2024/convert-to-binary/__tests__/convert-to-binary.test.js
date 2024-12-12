const convertToBinary = require("../convert-to-binary");

describe("converts decimal number to binary", () => {
  test("converts single digit decimal to binary", () => {
    const input = 0;
    const output = "0";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to binary", () => {
    const input = 1;
    const output = "1";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to multiple digit binary", () => {
    const input = 2;
    const output = "10";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to multiple digit binary", () => {
    const input = 3;
    const output = "11";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to triple digit binary", () => {
    const input = 4;
    const output = "100";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to triple digit binary", () => {
    const input = 5;
    const output = "101";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to triple digit binary", () => {
    const input = 6;
    const output = "110";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to triple digit binary", () => {
    const input = 7;
    const output = "111";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to triple digit binary", () => {
    const input = 8;
    const output = "1000";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts single digit decimal to triple digit binary", () => {
    const input = 9;
    const output = "1001";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts multiple digit decimal to many digit binary", () => {
    const input = 10;
    const output = "1010";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts multiple digit decimal to many digit binary", () => {
    const input = 23;
    const output = "10111";
    expect(convertToBinary(input)).toBe(output);
  });
  test("converts multiple digit decimal to many digit binary", () => {
    const input = 55;
    const output = "110111";
    expect(convertToBinary(input)).toBe(output);
  });
});
