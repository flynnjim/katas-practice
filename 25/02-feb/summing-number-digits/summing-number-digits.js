// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
function sumDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((a, b) => {
      const aNum = Math.abs(Number(a));
      const bNum = Number(b);
      if (/[0-9]/.test(bNum)) {
        return aNum + bNum;
      } else {
        return aNum;
      }
    }, 0);
}
