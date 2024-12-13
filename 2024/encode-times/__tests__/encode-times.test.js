const encodeTimes = require("../encode-times");

describe("encodes time as discrete dots or hash symbols to represent sleep and wakefulness", () => {
  test("can encode a series of times into a time string", () => {
    const input = [0, 5, 25, 30, 55];
    const output =
      ".....####################.....#########################.....";
    expect(encodeTimes(input)).toBe(output);
  });
  test("can encode a series of times into a time string", () => {
    const input = [0, 40, 50];
    const output =
      "........................................##########..........";
    expect(encodeTimes(input)).toBe(output);
  });
  test("can encode a series of times into a time string", () => {
    const input = [0, 45, 55];
    const output =
      ".............................................##########.....";
    expect(encodeTimes(input)).toBe(output);
  });
});
