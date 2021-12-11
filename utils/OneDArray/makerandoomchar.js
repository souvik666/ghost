const getRandomArbitrary = require("../randoomarbitay");
const randoomchars = require("../randoomChars");

const makerandoomchars = () => {
  let arr = [];
  for (let i = 0; i < getRandomArbitrary(10, 19); i++) {
    arr.push(String.fromCharCode(randoomchars()));
  }
  return arr.join(" ");
};

module.exports = makerandoomchars;
