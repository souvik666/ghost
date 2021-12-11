const getRandomArbitrary = require("../randoomarbitay");
const makerandoomarray = require("./makerandomarray");

const makeMultitestcase = () => {
  let arr = [];
  let len = getRandomArbitrary(6, 15);
  for (let i = 0; i < len; i++) {
    let tmp = makerandoomarray();
    arr.push(tmp.length, tmp.join(" "));
  }
  return `${len}\n${arr.join("\n")}`;
};

module.exports = makeMultitestcase;
