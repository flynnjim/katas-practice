const validMobileNumber = require("../valid-mobile-number");

describe("checks mobile number abd returns false if invalid and true if valid", () => {
  test("returns false when passed string of the wrong length", () => {
    expect(validMobileNumber("123")).toBe(false);
    expect(validMobileNumber("0750617250638")).toBe(false);
    expect(validMobileNumber("+447712368768724988")).toBe(false);
  });
  test("returns true when passed a valid plain phone num string", () => {
    expect(validMobileNumber("07506172506")).toBe(true);
  });
  test("returns true when passed a valid string with a + prefix", () => {
    expect(validMobileNumber("+447506172506")).toBe(true);
  });
  test("returns true when passed a valid international phone num", () => {
    expect(validMobileNumber("00447506172506")).toBe(true);
  });
  test("returns false when passed a string with invalid chars", () => {
    expect(validMobileNumber("07506189foo")).toBe(false);
  });
});
