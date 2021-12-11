const ans = require("../../../answer/write.your.ans");
const writeme = require("../../Writeme");
const makerandoommatrix = require("../Maketwodarr");

const performeTwoDarrayoperation = (where) => {
  /* default 10 */
  for (let i = 0; i <= 10; i++) {
    let cake = makerandoommatrix();
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  console.log("fininshed");
};

module.exports = performeTwoDarrayoperation;
