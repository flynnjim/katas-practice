function counterSpy(people) {
  /*
  This function takes an array of names.
  The function should return an array containing the names of the people who aren't spies.
  
  Recent intelligence has revealed that all spies codenames include the letters 's', 'p' or 'y'.
  You can't afford to take any chances, and all names that include those letters should be removed.
    */
  const notSpies = [];
  const regex = new RegExp("s|p|y", "i");
  people.forEach((person) => {
    if (!regex.test(person)) {
      notSpies.push(person);
    }
  });

  return notSpies;
}

module.exports = counterSpy;
