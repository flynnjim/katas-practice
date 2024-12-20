const printerError = require("../printer-errors");

describe("printerErrors", () => {
  it("no errors returns 0 /str length", () => {
    const s = "aaabbbbhaijjjm";
    const output = "0/14";
    expect(printerError(s)).toBe(output);
  });
  it("errors added to output", () => {
    const s = "aaaxbbbbyyhwawiwjjjwwm";
    const output = "8/22";
    expect(printerError(s)).toBe(output);
  });
  it("errors added to output", () => {
    const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    const output = "3/56";
    expect(printerError(s)).toBe(output);
  });
});
