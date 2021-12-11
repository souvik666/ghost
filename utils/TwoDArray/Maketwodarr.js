const getRandomArbitrary = require("../randoomarbitay");

const makerandoommatrix = (begin, end) => {
  /*   let ground = [];
  let twodarry = [];
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < getRandomArbitrary(1, 15); j++) {
      ground[([i], [j])] = [getRandomArbitrary(1, 15)];
    }
  }

  for (let i = 0; (i < Math.random() * 10 + 6) | 0; i++) {
    twodarry.push(ground.join(" "));
  }
  console.log(ground.length, twodarry.length);
  return twodarry.join("\n"); */
  let arr = [];
  let len = getRandomArbitrary(5, 10);
  for (let i = 0; i < len; i++) {
    let tmp = [];
    for (let j = 1; j <= len - 1; j++) {
      tmp.push(String.fromCharCode(getRandomArbitrary(begin || 48, end || 57)));
    }
    arr.push(tmp.join(" "));
  }
  return `${arr.length} ${arr[0].split(" ").length}\n${arr.join("\n")}`;
};
module.exports = makerandoommatrix;
