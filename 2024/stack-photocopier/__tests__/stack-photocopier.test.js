const photocopier = require("../../photocopier/photocopier");
const stackPhotocopier = require("../stack-photocopier");

describe("prints a 'stack' of blueprints changing isCopy to true", () => {
  test("empty blueprint array returns an empty array", () => {
    const input = [];
    const output = [];
    expect(stackPhotocopier(input)).toEqual(output);
  });
  test("array of blueprints returns array of print objects", () => {
    const blueprint = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      },
      {
        isCopy: false,
        title: "A lonely title",
      },
      {
        isCopy: false,
        title: "Hello world",
        subtitle: "A dev story",
      },
    ];
    const output = [
      {
        isCopy: true,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      },
      {
        isCopy: true,
        title: "A lonely title",
      },
      {
        isCopy: true,
        title: "Hello world",
        subtitle: "A dev story",
      },
    ];
    expect(stackPhotocopier(blueprint)).toEqual(output);
  });
  test("returns new object with new reference in memory", () => {
    const blueprint = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      },
      {
        isCopy: false,
        title: "A lonely title",
      },
      {
        isCopy: false,
        title: "Hello world",
        subtitle: "A dev story",
      },
    ];
    const returnValue = stackPhotocopier(blueprint);
    expect(blueprint).not.toBe(returnValue);
  });
  test("does not mutate original array", () => {
    const blueprint = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      },
      {
        isCopy: false,
        title: "A lonely title",
      },
      {
        isCopy: false,
        title: "Hello world",
        subtitle: "A dev story",
      },
    ];
    const originalArray = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      },
      {
        isCopy: false,
        title: "A lonely title",
      },
      {
        isCopy: false,
        title: "Hello world",
        subtitle: "A dev story",
      },
    ];
    stackPhotocopier(blueprint);
    expect(blueprint).toEqual(originalArray);
  });
});
