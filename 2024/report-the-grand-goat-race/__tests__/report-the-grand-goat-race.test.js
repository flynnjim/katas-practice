const reportTheGrandGoatRace = require("../report-the-grand-goat-race");

describe("create report for the grand goat race", () => {
  test("takes goat info string and returns race results object", () => {
    const goatInfo =
      "Bleaters: 00:30:00, Professor Dandelion: 01:00:00, Katherine Jr.: 00:45:00";
    const goatReport = {
      firstPlace: "Bleaters",
      goatWithLongestName: "Professor Dandelion",
      averageTime: "00:45:00",
    };
    expect(reportTheGrandGoatRace(goatInfo)).toEqual(goatReport);
  });
});
