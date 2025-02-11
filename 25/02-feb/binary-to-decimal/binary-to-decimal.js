// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
  return parseInt(bin, 2);
}

function binToDec(bin) {
  const reverseDec = bin
    .split("")
    .reverse()
    .map((num, i) => (num === "1" ? Math.pow(2, i) : 0));
  return reverseDec.reduce((a, b) => a + b, 0);
}
