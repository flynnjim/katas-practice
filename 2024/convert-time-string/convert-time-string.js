function convertTimeString(string) {
  /*
  This function should take a string representing a time with hours and minutes separated by a colon e.g. "13:25"
  Some of the times are written in the 24-hour clock format
  This function should return the time written in the 12-hour clock format
    */
  const stringSplit = string.split(":");

  if (stringSplit[0] === "00") {
    stringSplit[0] = "12";
  } else if (Number(stringSplit[0]) > 12) {
    const convertedTime = "0" + (Number(stringSplit[0]) - 12).toString();

    stringSplit[0] = convertedTime;
  }

  return stringSplit.join(":");
}

module.exports = convertTimeString;
