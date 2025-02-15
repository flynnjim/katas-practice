// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.
function noBoringZeros(n) {
  let trailingZeros = true;
  while (trailingZeros) {
    if (n === 0) {
      return n;
      n = n / 10;
    } else if (n % 10 === 0) {
      n = n / 10;
    } else {
      return n;
    }
  }
}
