function collectLikeTerms(terms) {
  // Implement a function collectLikeTerms which takes an expression in a string like 'a + a + a'
  // and then returns a string with a simplified algebraic expression, which in the previous case would be 3a.
  // The characters should be in alphabetical order by default.
  // You can assume that the only operation connecting the terms is addition.
  const termsSeparated = terms.split(" + ");
  // console.log(termsSeparated);
  const removeOnesTerms = termsSeparated.map((term) => {
    if (term[0] === "1") {
      slicedTerm = term.slice(1);
      // console.log(slicedTerm);
      return slicedTerm;
    } else {
      return term;
    }
  });
  if (removeOnesTerms.length === 1) {
    return removeOnesTerms.join("");
  }

  objectCollectTerms = {};
  removeOnesTerms.forEach((term) => {
    const termInObject = objectCollectTerms[term];

    if (!termInObject) {
      objectCollectTerms[term] = 1;
    } else {
      objectCollectTerms[term] += 1;
    }
  });
  const objectKeysArray = Object.keys(objectCollectTerms).sort();

  const newCollectedTermsArray = objectKeysArray.map((key) => {
    return objectCollectTerms[key] + key;
  });
  const removeOnesFinalTerms = newCollectedTermsArray.map((term) => {
    if (term[0] === "1") {
      slicedTerm = term.slice(1);

      return slicedTerm;
    } else {
      return term;
    }
  });
  return removeOnesFinalTerms.join(" + ");
}

module.exports = collectLikeTerms;
