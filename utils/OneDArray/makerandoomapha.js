const makerandoomalpha = require("../randoomalpha");
const getRandomArbitrary = require("../randoomarbitay");

const MakerandoomAlpha = (begin, end) => {
  let arr = [];
  for (let i = 0; i < getRandomArbitrary(begin || 10, end || 15); i++) {
    arr.push(makerandoomalpha());
  }
  return arr.join(" ");
};

module.exports = MakerandoomAlpha;
