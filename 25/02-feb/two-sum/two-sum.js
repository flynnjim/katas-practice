function twoSum(numbers, target) {
  const indexes = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] + numbers[i] === target) {
        return [i, j];
      }
    }
  }
}
