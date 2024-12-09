const validTriangles = require("../valid-triangles");

describe("compares sides of triangles as array to determine if valid triangle", () => {
  test("returns 0 when passed no triangles []", () => {
    const input = [];
    const output = 0;
    expect(validTriangles(input)).toBe(output);
  });
  test("returns 0 when passed no valid triangles", () => {
    const input = [[5, 10, 25]];
    const output = 0;
    expect(validTriangles(input)).toBe(output);
  });
  test("returns 1 when passed 1 valid triangles", () => {
    const input = [[5, 4, 5]];
    const output = 1;
    expect(validTriangles(input)).toBe(output);
  });
  test("returns 2 when passed 2 valid triangles", () => {
    const input = [
      [5, 10, 25],
      [5, 4, 5],
      [542, 586, 419],
    ];
    const output = 2;
    expect(validTriangles(input)).toBe(output);
  });
});
