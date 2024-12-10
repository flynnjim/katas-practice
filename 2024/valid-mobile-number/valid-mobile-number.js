/*
 Function that takes a string and returns false if the mobile number is invalid and returns true if the mobile number is valid
*/

// valid length === 11 | 13 | 14

function validMobileNumber(string) {
  const regex = new RegExp("[^0-9+]");

  if (string.length < 11 || regex.test(string)) {
    return false;
  } else if (string[0] === "0" && string[1] === "0") {
    return string.length === 14;
  } else if (string[0] === "0") {
    return string.length === 11;
  } else if (string[0] === "+") {
    return string.length === 13;
  }
}

module.exports = validMobileNumber;
