const collectLikeTerms = require("../collect-like-terms");

describe("collects like terms and returns simplified expression (algebra)", () => {
  test("returns a letter when passed an expression with single letter", () => {
    const input = "a";
    const output = "a";
    expect(collectLikeTerms(input)).toBe(output);
  });
  test("returns the expression if already simplified (not starting with 1)", () => {
    const input = "2a";
    const output = "2a";
    expect(collectLikeTerms(input)).toBe(output);
  });
  test("just returns letter if starts with 1", () => {
    const input = "1a";
    const output = "a";
    expect(collectLikeTerms(input)).toBe(output);
  });
  test("can simply the two duplicated letters added together", () => {
    const input = "a + a";
    const output = "2a";
    expect(collectLikeTerms(input)).toBe(output);
  });
  test("can simply multiply duplicated letters together", () => {
    const input = "a + a + a";
    const output = "3a";
    expect(collectLikeTerms(input)).toBe(output);
  });
  test("can simplify two distinct lettrs in alphabetical order", () => {
    const input = "b + a";
    const output = "a + b";
    expect(collectLikeTerms(input)).toBe(output);
  });
  test("can simplify multiple distincts", () => {
    const input = "a + b + b";
    const output = "a + 2b";
    expect(collectLikeTerms(input)).toBe(output);
  });
  test("can simplify multiple distincts, each of multiple letters together", () => {
    const input = "ab + ab + ab";
    const output = "3ab";
    expect(collectLikeTerms(input)).toBe(output);
  });
});
