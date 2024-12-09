function rotateArray(arr, num) {
  const shiftedArray = [];
  arr.forEach((element, index) => {
    let shiftedElementIndex = index + num;

    if (shiftedElementIndex > arr.length - 1) {
      shiftedElementIndex -= arr.length;
    } else if (shiftedElementIndex < 0) {
      shiftedElementIndex += arr.length;
    }
    shiftedArray[shiftedElementIndex] = element;
  });

  return shiftedArray;
}

module.exports = rotateArray;
