const ans = require("../../../answer/write.your.ans");
const writeme = require("../../Writeme");
const makerandoomchar = require("../makerandoomchar");

/* One d array only */
const performecharoperation = (where) => {
  /* default 10 */
  for (let i = 0; i <= 10; i++) {
    let cake = makerandoomchar();
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake.split(" ").length}\n${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  console.log("fininshed");
};
module.exports = performecharoperation;
