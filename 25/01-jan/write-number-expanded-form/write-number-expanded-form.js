/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/
function expandedForm(num) {
  const numString = num.toString();
  let expandedArray = [];
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== "0") {
      const expandedNum = numString.slice(i, i + 1);
      const addedZeros = expandedNum + "0".repeat(numString.length - (i + 1));
      expandedArray.push(addedZeros);
    }
  }
  return expandedArray.join(" + ");
}
