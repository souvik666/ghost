const ans = require("../../../answer/write.your.ans");
const makerandoomarray = require("../makerandomarray");
const writeme = require("../../Writeme");
/* 1D array only */
const performearrayoperation = (where) => {
  /* default 10 */
  for (let i = 0; i <= 10; i++) {
    let cake = makerandoomarray();
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake.length}\n${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  console.log("fininshed");
};

module.exports = performearrayoperation;
