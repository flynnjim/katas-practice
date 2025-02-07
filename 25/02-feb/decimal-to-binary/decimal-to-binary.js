// Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value: toBinaryString(6) should return "110" (no leading 0).

// Use of the native method number.toString(2); is disallowed.

function toBinaryString(number) {
  let str = "";
  if (number === 0) {
    str = "0";
  }
  while (number > 0) {
    str = (number % 2) + str;
    number = Math.floor(number / 2);
  }
  return str;
}
