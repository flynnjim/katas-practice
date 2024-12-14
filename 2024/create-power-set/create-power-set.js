/*
createPowerSet()

You will need to implement a function createPowerSet

It will need to return an array of all possible sub-arrays given some starting array

For example,
createPowerSet(['a', 'b', 'c']) should return

[[], ['a'], ['b'], ['c'], ['a', 'b'], ['b', 'c'] ,['a', 'c'], ['a', 'b', 'c'] ]

all the possible sub-arrays that can be constructed from 3 distinct elements
There should be 2**3 = 8 different subsets in total
*/

function createPowerSet(terms) {
  const powerSet = [[]];

  terms.forEach((term) => {
    const newSubsets = [];

    powerSet.forEach((subset) => {
      const subsetCopy = [...subset];

      const newSubset = subsetCopy.join("") + term;

      newSubsets.push(newSubset);
    });

    newSubsets.forEach((newSubset) => {
      powerSet.push(newSubset);
    });
  });

  const formattedPowerSet = [];

  powerSet.forEach((subset) => {
    if (subset.length === 0) {
      formattedPowerSet.push([]);
    } else {
      formattedPowerSet.push([subset]);
    }
  });

  return formattedPowerSet;
}

module.exports = createPowerSet;
