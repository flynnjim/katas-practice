/*
Every year there is a Grand Goat Race, which runs with a minimum of 2 participating goats. The fastest goat wins but there is a consolation prize for the goat with the longest name. You recieve the data about participating goats in the following format:

const goatInfo = "Bleaters: 00:30:00, Professor Dandelion: 01:00:00, Katherine Jr.: 00:45:00"`

Where we have the name of the goat, followed by their race time in hours, minutes and seconds.

It's your job to write a function, reportTheGrandGoatRace, which takes in this information, and returns an object summarising the outcome of the race in this form:

{
    firstPlace: "Bleaters",
    goatWithLongestName: "Professor Dandelion",
    averageTime: "00:45:00"
}
*/

const reportTheGrandGoatRace = (goatInfo) => {
  const individualGoats = goatInfo.split(", ");

  let winningGoat = ["", Infinity];
  let totalMins = 0;
  let longestName = "";
  individualGoats.forEach((goat) => {
    const splitGoat = goat.split(": ");

    const splitGoatTime = splitGoat[1].split(":");

    const currentGoatTime =
      Number(splitGoatTime[0] * 60) +
      Number(splitGoatTime[1]) +
      Number(splitGoatTime[2] / 60);
    totalMins += currentGoatTime;
    if (currentGoatTime < winningGoat[1]) {
      winningGoat[1] = currentGoatTime;
      winningGoat[0] = splitGoat[0];
    }
    if (splitGoat[0].length > longestName.length) {
      longestName = splitGoat[0];
    }
  });
  const averageTime = totalMins / individualGoats.length;

  const timeSegments = [0, 0, 0];
  let remainingTime = averageTime;
  while (remainingTime > 0) {
    if (remainingTime > 60) {
      timeSegments[0] += 1;
      remainingTime -= 60;
    } else if (remainingTime > 0.9999) {
      timeSegments[1] += 1;
      remainingTime -= 1;
    } else {
      timeSegments[2] += 1;
      remainingTime -= 1 / 60;
    }
  }

  let timeStringArray = [];
  timeSegments.forEach((segment) => {
    const stringSegment = segment.toString();

    const timeString =
      stringSegment.length === 1 ? "0" + stringSegment : stringSegment;

    timeStringArray.push(timeString);
  });

  const returnGoatReport = {
    firstPlace: winningGoat[0],
    goatWithLongestName: longestName,
    averageTime: timeStringArray.join(":"),
  };
  return returnGoatReport;
};

module.exports = reportTheGrandGoatRace;
