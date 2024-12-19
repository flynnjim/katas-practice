/*

romanNumeralEncoder
The challenge is to implement a function which returns a Roman numeral string when passed a number of seconds.

*/

const romanNumeralEncoder = (num) => {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let romanNumeralString = "";

  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      romanNumeralString += symbol;
      num -= value;
    }
  }

  return romanNumeralString;
};

module.exports = { romanNumeralEncoder };
