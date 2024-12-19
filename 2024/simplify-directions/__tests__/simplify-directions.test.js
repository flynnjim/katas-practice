const { simplifyDirections } = require("../simplify-directions");

describe("simplifyDirections()", () => {
  it("empty array returns an empty array", () => {
    const input = [];
    const output = [];
    expect(simplifyDirections(input)).toEqual(output);
  });
  it("array of one direction returns same array", () => {
    const input = ["WEST"];
    const output = ["WEST"];
    expect(simplifyDirections(input)).toEqual(output);
  });
  it("array of two opposite directions returns empty array", () => {
    const input = ["WEST", "EAST", "NORTH"];
    const output = ["NORTH"];
    expect(simplifyDirections(input)).toEqual(output);
  });
  it("array of opposite directions returns array without opposites", () => {
    const input = ["NORTH", "SOUTH", "WEST"];
    const output = ["WEST"];
    expect(simplifyDirections(input)).toEqual(output);
  });
  it("array of opposite directions returns array without opposites", () => {
    const input = ["NORTH", "WEST", "SOUTH", "WEST", "EAST"];
    const output = ["WEST"];
    expect(simplifyDirections(input)).toEqual(output);
  });
  it("array of opposite directions returns array without opposites", () => {
    const input = ["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"];
    const output = ["NORTH", "NORTH"];
    expect(simplifyDirections(input)).toEqual(output);
  });
  it("returns a new object with new reference in memory", () => {
    const input = ["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"];
    const returnValue = simplifyDirections(input);
    expect(input).not.toBe(returnValue);
  });
  it("original object is not mutated", () => {
    const input = ["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"];
    const expectedInputArray = input.slice();
    simplifyDirections(input);
    expect(input).toEqual(expectedInputArray);
  });
});
