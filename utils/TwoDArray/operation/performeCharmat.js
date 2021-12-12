const ans = require("../../../answer/write.your.ans");
const writeme = require("../../Writeme");
const MakTwoDrandoomChars = require("../makerandoomcharmat");

const performeRandoomCharsopMat = (where) => {
  /* default 10 */
  for (let i = 0; i <= 10; i++) {
    let cake = MakTwoDrandoomChars();
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  console.log("fininshed");
};

module.exports = performeRandoomCharsopMat;
