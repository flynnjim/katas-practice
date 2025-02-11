// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let brokenCase = "";
  const stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    const currentChar = stringArray[i];
    if (currentChar.toUpperCase() === currentChar) {
      brokenCase += " " + currentChar;
    } else {
      brokenCase += currentChar;
    }
  }
  return brokenCase;
}
