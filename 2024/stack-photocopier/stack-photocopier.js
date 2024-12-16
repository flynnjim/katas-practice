/*

Time to upgrade our photocopier, it now takes in a pile (an array) of blueprints and must make copies of them (with the isCopy property set to true).

As before though, this is a pure function so we must make sure:

that none of the returned objects are the same as the ones passed in.
the original blueprints are not altered/mutated.

*/

const stackPhotocopier = (blueprints) => {
  if (blueprints.length === 0) {
    return [];
  }
  const copyArray = [];
  blueprints.forEach((blueprint) => {
    const printObject = {};
    const blueprintKeys = Object.keys(blueprint);
    blueprintKeys.forEach((key) => {
      const value = blueprint[key];
      printObject[key] = value;
    });
    printObject["isCopy"] = true;
    copyArray.push(printObject);
  });
  return copyArray;
};

module.exports = stackPhotocopier;
