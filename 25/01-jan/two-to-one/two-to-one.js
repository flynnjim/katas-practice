/*
ake 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/
function longest(s1, s2) {
  const uniqueLetters = [];
  const allLetters = (s1 + s2).split("");
  allLetters.forEach((char) => {
    if (!uniqueLetters.includes(char)) {
      uniqueLetters.push(char);
    }
  });
  return uniqueLetters.sort().join("");
}
