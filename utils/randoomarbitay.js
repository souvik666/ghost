const getRandomArbitrary = (min, max) => {
  return (Math.random() * (max - min) + min) | 0;
};
module.exports = getRandomArbitrary;
