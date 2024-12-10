const groupBy = require("../group-by");

describe("groups passed array of objects by passedkey", () => {
  test("groups northcoders by location", () => {
    const input = [
      { name: "douglas", location: "manchester" },
      { name: "liam", location: "york" },
      { name: "jim", location: "leeds" },
      { name: "haz", location: "manchester" },
      { name: "dave", location: "leeds" },
    ];
    const output = {
      manchester: [
        { name: "douglas", location: "manchester" },
        { name: "haz", location: "manchester" },
      ],
      york: [{ name: "liam", location: "york" }],
      leeds: [
        { name: "jim", location: "leeds" },
        { name: "dave", location: "leeds" },
      ],
    };
    expect(groupBy(input, "location")).toEqual(output);
  });
  test("check returns a new object with new reference in memory", () => {
    const refInput = [
      { name: "douglas", location: "manchester" },
      { name: "liam", location: "york" },
    ];
    const returnValue = groupBy(refInput, "location");
    expect(refInput).not.toBe(returnValue);
  });
  test("checks the original array was not mutatesd", () => {
    const mutArray = [
      { name: "douglas", location: "manchester" },
      { name: "liam", location: "york" },
    ];
    const ogArray = [
      { name: "douglas", location: "manchester" },
      { name: "liam", location: "york" },
    ];

    groupBy(mutArray, "location");
    expect(mutArray).toEqual(ogArray);
  });
});
