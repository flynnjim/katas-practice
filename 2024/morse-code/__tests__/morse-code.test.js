const morseCode = require("../morse-code");

describe("converst morse code to english", () => {
  test("convert single one word morse code to text", () => {
    const input = ".... ..";
    const output = "HI";
    expect(morseCode(input)).toBe(output);
  });
  test("convert single one word morse code to text", () => {
    const input = ".... . .-.. .-.. ---";
    const output = "HELLO";
    expect(morseCode(input)).toBe(output);
  });
  test("convert single one word morse code to text", () => {
    const input = "-. --- .-. - .... -.-. --- -.. . .-. ...";
    const output = "NORTHCODERS";
    expect(morseCode(input)).toBe(output);
  });
  test("convert multiple words from morse code to text", () => {
    const input =
      "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
    const output = "GOOD MORNING NORTHCODERS";
    expect(morseCode(input)).toBe(output);
  });
});
