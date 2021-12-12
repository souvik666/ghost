const ans = require("../../../answer/write.your.ans");
const writeme = require("../../Writeme");
const MakTwoDrandoomAlpha = require("../makerandoomalphamat");

const performeRandoomAlphaopMat = (where) => {
  /* default 10 */
  for (let i = 0; i <= 10; i++) {
    let cake = MakTwoDrandoomAlpha();
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  console.log("fininshed");
};

module.exports = performeRandoomAlphaopMat;
