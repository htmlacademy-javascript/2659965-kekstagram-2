/* eslint-disable no-console */
const createRandomRangeInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (array) => array[createRandomRangeInteger(0, array.length - 1)];
const createIdGenerator = (min, max) => {
  const arrayIds = [];
  for (let i = min; i <= max; i++) {
    arrayIds.push(i);
  }
  for (const i of arrayIds) {
    const j = createRandomRangeInteger(0,i);
    [arrayIds[i], arrayIds[j]] = [arrayIds[j], arrayIds[i]];
  }
  let currentIndex = 0;
  return () => {
    if (currentIndex >= arrayIds.length) {
      return null;
    }
    const id = arrayIds[currentIndex];
    currentIndex++;
    return id;
  };
};
export { createRandomRangeInteger, getRandomArrayElement, createIdGenerator };
