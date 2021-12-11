const ans = require("../../../answer/write.your.ans");
const writeme = require("../../Writeme");
const makeMultitestcase = require("../Mulitipletestcase");

/* One d array only */
const performemultinum = (where) => {
  /* default 10 */
  for (let i = 0; i <= 10; i++) {
    let cake = makeMultitestcase();
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  console.log("fininshed");
};

module.exports = performemultinum;
