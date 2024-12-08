const { morseCode, englishToMorse } = require("../morse-code");

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

describe("BONUS: convert English to morse code", () => {
  test("convert single letter to single morse code sequence", () => {
    expect(englishToMorse("H")).toBe("....");
  });
  test("convert single letter to single morse code sequence", () => {
    expect(englishToMorse("A")).toBe(".-");
  });
  test("convert multiple letters to morse code sequence", () => {
    const input = "HI"
    const output = ".... .."
    expect(englishToMorse(input)).toBe(output);
  });
  test("convert multiple words to morse code sequence", () => {
    const input = "GOOD MORNING NORTHCODERS"
    const output = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ..."
    expect(englishToMorse(input)).toBe(output);
  });
  test("classic SOS", () => {
    const input = "SOS"
    const output = "... --- ..."
    expect(englishToMorse(input)).toBe(output);
  });
  test("New unique sentence", () => {
    const input = "COME MEET ME TONIGHT"
    const output = "-.-. --- -- .   -- . . -   -- .   - --- -. .. --. .... -"
    expect(englishToMorse(input)).toBe(output);
  });
  test("Another new unique sentence", () => {
    const input = "WHAT A GOOD MORSE CODE CONVERTER"
    const output = ".-- .... .- -   .-   --. --- --- -..   -- --- .-. ... .   -.-. --- -.. .   -.-. --- -. ...- . .-. - . .-."
    expect(englishToMorse(input)).toBe(output);
  });
});
