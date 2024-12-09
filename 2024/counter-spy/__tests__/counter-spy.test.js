const counterSpy = require("../counter-spy");

describe("takes array of names and returns array of those who are not spies", () => {
  test("returns an empty array if the only person is a spy", () => {
    const input = ["Daryl"];
    const output = [];
    expect(counterSpy(input)).toEqual(output);
  });
  test("returns an array with all spys removed", () => {
    const input = ["Daryl", "Harriet", "James"];
    const output = ["Harriet"];

    expect(counterSpy(input)).toEqual(output);
  });
  test("returns an array with more, all spys removed", () => {
    const input = ["Chris", "Daryl", "Harriet", "Mauro", "Sam"];
    const output = ["Harriet", "Mauro"];

    expect(counterSpy(input)).toEqual(output);
  });
});
