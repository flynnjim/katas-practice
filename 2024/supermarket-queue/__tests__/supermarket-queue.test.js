const { supermarketQueue } = require("../supermarket-queue");

describe("supermarketQueue()", () => {
  it("returns sum of array when only one checkout", () => {
    const input = [2, 2, 2];
    const numCheckouts = 1;
    expect(supermarketQueue(input, numCheckouts)).toBe(6);
  });
  it("returns value when multiple checkouts", () => {
    const input = [2, 10];
    const numCheckouts = 2;
    const output = 10;
    expect(supermarketQueue(input, numCheckouts)).toBe(output);
  });
  it("returns value when multiple checkouts", () => {
    const input = [2, 2, 2];
    const numCheckouts = 2;
    const output = 4;
    expect(supermarketQueue(input, numCheckouts)).toBe(output);
  });
  it("returns value when multiple checkouts", () => {
    const input = [2, 3, 10];
    const numCheckouts = 2;
    const output = 12;
    expect(supermarketQueue(input, numCheckouts)).toBe(output);
  });
});
