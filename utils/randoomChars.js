const getRandomArbitrary = require("./randoomarbitay");

const randoomchars = (begin, end) => {
  let chars = getRandomArbitrary(begin || 58, end || 64);
  return chars;
};

module.exports = randoomchars;
