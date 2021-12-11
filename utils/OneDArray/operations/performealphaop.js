const MakerandoomAlpha = require("../makerandoomapha");

const ans = require("../../../answer/write.your.ans");
const writeme = require("../../Writeme");

/* One d array only */
const performeAlphaoperation = (where) => {
  /* default 10 */
  for (let i = 0; i <= 10; i++) {
    let cake = MakerandoomAlpha();
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake.split(" ").length}\n${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  console.log("fininshed");
};
module.exports = performeAlphaoperation;
