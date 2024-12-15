const photocopier = require("../photocopier");

describe("takes flat un-nested object and returns copy of object with changed isCopy no mutation of original", () => {
  test("empty blueprint object returns an empty object", () => {
    const bluePrint = {};
    const output = {};
    expect(photocopier(bluePrint)).toEqual(output);
  });
  test("returns object with isCopy changed to true", () => {
    const bluePrint = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    const output = {
      isCopy: true,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    expect(photocopier(bluePrint)).toEqual(output);
  });
  test("returns a new object with a new reference in memory", () => {
    const bluePrint = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    returnValue = photocopier(bluePrint);
    expect(bluePrint).not.toBe(returnValue);
  });
  test("original object is not mutated", () => {
    const bluePrint = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    const originalObject = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    photocopier(bluePrint);
    expect(bluePrint).toEqual(originalObject);
  });
});
