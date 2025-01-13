/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortArray(array) {
  const oddNumbers = array
    .filter((num) => Math.abs(num) % 2 === 1)
    .sort((a, b) => a - b);
  const sortedOdd = array.map((num) => {
    if (num % 2 === 0) {
      return num;
    } else {
      const newNum = oddNumbers[0];
      oddNumbers.shift();
      return newNum;
    }
  });
  return sortedOdd;
}
