/*
This function folds an array in the middle n number of times.

If the list has a odd length, then fold on the middle index (the middle number therefore won't change)
other wise you fold in the 'gap' between the two middle integers and so all integers are folded.

To 'fold' the numbers add them together.

For example:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]
Here we fold the 1st with the last and the second with the 4th. As it is odd in length, the middle index is not folded
*/
function foldArray(array, folds) {
  const foldedArray = [];
  const lastIndex = array.length - 1;
  const isOddArray = array.length % 2 === 1;

  if (array.length <= 1) {
    return array;
  }
  array.forEach((element, index) => {
    if ((array.length - 1) / 2 === index && isOddArray) {
      // console.log(element);
      foldedArray.push(element);
    } else if (index < array.length / 2) {
      foldedArray.push(element + array[lastIndex - index]);
    }
  });

  let newFolds = (folds -= 1);

  if (newFolds === 0) {
    return foldedArray;
  } else {
    return foldArray(foldedArray, newFolds);
  }
}

module.exports = foldArray;
