const politeRequests = require("../politeRequests");

describe("takes string of instruction, array of names and boolean and returns array of request strings", () => {
  test("empty string/array returns an empty array", () => {
    const instructionString = "";
    const nameArray = [];
    const polite = true;
    expect(politeRequests(instructionString, nameArray, polite)).toEqual([]);
  });
  test("empty string/array returns an empty array", () => {
    const instructionString = "Go to the bank %";
    const nameArray = ["Katherine", "Tim"];
    const polite = true;
    const output = [
      "Go to the bank please Katherine",
      "Go to the bank please Tim",
    ];
    expect(politeRequests(instructionString, nameArray, polite)).toEqual(
      output
    );
  });
  test("empty string/array returns an empty array includes boolean", () => {
    const instructionString = "Fetch me a drink %";
    const nameArray = ["Caz", "Zanna"];
    const polite = false;
    const output = ["Fetch me a drink Caz", "Fetch me a drink Zanna"];
    expect(politeRequests(instructionString, nameArray, polite)).toEqual(
      output
    );
  });
  test("returns new object with new referene in memory", () => {
    const instructionString = "Go to the bank %";
    const nameArray = ["Katherine", "Tim"];
    const polite = true;
    const returnValue = politeRequests(instructionString, nameArray, polite)
    expect(returnValue).not.toBe(nameArray)
  })
  test("does not mutate original array", () => {
    const instructionString = "Go to the bank %";
    const nameArray = ["Katherine", "Tim"];
    const polite = true;
    politeRequests(instructionString, nameArray, polite)
    expect(nameArray).toEqual(["Katherine", "Tim"])
  })
});
