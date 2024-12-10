/*
This function marks passwords out of 7 using the scores below.
Invalid inputs should return 0.

Score	Criteria	Example
1 Less than four characters	e.g. bob
2	Less than nine characters	e.g. bobbybob
3	More than eight characters and all letters	e.g. bobbobbob
4	More than eight characters includes a number	e.g. bobbobbob1
5	More than eight characters includes a number and special character	e.g. bobbob1#2$
6	More than twelve characters includes a number	e.g. bobbobbobbob123
7	More than twelve characters includes a number and special character	e.g. bobbobbob1!2@3#

Special characters: ! @ £ # $ % ^ & *
*/
function passwordScore(password) {
  const regexChar = new RegExp("!|@|£|#|\\$|%|\\^|&|\\*");
  const containsSpecialChar = regexChar.test(password);
  const regexNum = new RegExp("[0-9]");
  const containsNumber = regexNum.test(password);
  if (password.length < 4) {
    return 1;
  } else if (password.length < 9) {
    return 2;
  } else if (password.length < 13) {
    if (!containsNumber) {
      return 3;
    } else if (!containsSpecialChar) {
      return 4;
    } else {
      return 5;
    }
  } else if (!containsNumber || !containsSpecialChar) {
    return 6;
  } else {
    return 7;
  }
}

module.exports = passwordScore;
