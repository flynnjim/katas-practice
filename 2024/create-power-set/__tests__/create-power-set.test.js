const createPowerSet = require("../create-power-set");

describe("Create power set from input array", () => {
  test("returns an array with empty array when passed an empty array", () => {
    const input = [];
    const output = [[]];
    expect(createPowerSet(input)).toEqual(output);
  });
  test("returns an array with 2 sets when passed a single value", () => {
    const input = ["a"];
    const output = [[], ["a"]];
    expect(createPowerSet(input)).toEqual(output);
  });
  test("returns an array with 4 sets when passed 2 values", () => {
    const input = ["a", "b"];
    const output = [[], ["a"], ["b"], ["ab"]];
    expect(createPowerSet(input)).toEqual(output);
  });
  test("returns an array with 8 sets when passed 3 values", () => {
    const input = ["a", "b", "c"];
    const output = [[], ["a"], ["b"], ["ab"], ["c"], ["ac"], ["bc"], ["abc"]];
    expect(createPowerSet(input)).toEqual(output);
  });
});
