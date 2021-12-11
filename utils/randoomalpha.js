const getRandomArbitrary = require("./randoomarbitay");

const makerandoomalpha = (begin, end) => {
  const alpha = String.fromCharCode(getRandomArbitrary(begin || 97, end || 122));
  return alpha;
};
module.exports = makerandoomalpha;
