const RandoomevenNumgen = require("../evengen");
const ans = require("../../../answer/write.your.ans");
const writeme = require("../../Writeme");

/* One d array only */
const performeevenoperation = (where, k) => {
  /* default 10 */
  if (k) {
    k = +k.split("")[1];
  }
  for (let i = 0; i <= 10; i++) {
    let cake = RandoomevenNumgen(k);
    ans(cake);

    writeme(`${where}/${i}.in`, `${cake.split(" ").length}\n${cake}`);
    writeme(`${where}/${i}.out`, `${ans(cake)}`);
  }
  //console.log("fininshed");
};
module.exports = performeevenoperation;
