const getRandomArbitrary = require("../randoomarbitay");

const makerandoomarray = (size) => {
  let len = size || getRandomArbitrary(10, 17);
  var arr = [];
  for (var i = 0, t = len; i < t; i++) {
    arr.push(getRandomArbitrary(7, 17));
  }
  return arr;
};

module.exports = makerandoomarray;
