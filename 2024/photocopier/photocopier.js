/*
The photocopier function takes in a blueprint to photocopy, which will be a flat (un-nested) object that has a key of isCopy which is false, and at least one other property.

The function returns a copy of that object, with isCopy set to true.

This function needs to be pure, so in your tests you should check:

The copy that the function returns isn’t accidentally the same object as the blueprint that was passed in.
The original blueprint object is unchanged.
*/

const photocopier = (blueprint) => {
  const objectKeys = Object.keys(blueprint);
  const photoOutput = {};
  if (objectKeys.length === 0) {
    return {};
  }
  objectKeys.forEach((key) => {
    if (key === "isCopy") {
      photoOutput[key] = true;
    } else {
      photoOutput[key] = blueprint[key];
    }
  });

  return photoOutput;
};

module.exports = photocopier;
