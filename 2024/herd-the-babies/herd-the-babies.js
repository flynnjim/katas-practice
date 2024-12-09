function herdTheBabies(str) {
  const splitInput = str.split("");
  const arrayObjects = [];

  splitInput.forEach((element) => {
    const asciiCode =
      element.toUpperCase().charCodeAt() === element.charCodeAt()
        ? element.charCodeAt()
        : element.toUpperCase().charCodeAt() + 0.5;

    const pushObject = {
      letter: element,
      value: asciiCode,
    };
    arrayObjects.push(pushObject);
  });

  arrayObjects.sort((a, b) => a.value - b.value);

  return arrayObjects
    .map((letter) => {
      return letter.letter;
    })
    .join("");
}

module.exports = herdTheBabies;
