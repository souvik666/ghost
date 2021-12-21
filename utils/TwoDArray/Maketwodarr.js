const getRandomArbitrary = require("../randoomarbitay");

function randomOddInt(min, max) {
  min = min & 1 ? min : min + 1;
  max = max & 1 ? max : max - 1;
  if (min === max) return min;
  if (min > max) throw "Invalid input";

  const range = 1 + (max - min) / 2;
  return min + Math.floor(Math.random() * range) * 2;
}

const makerandoommatrix = (begin, end) => {
  let arr = [];
  let len = randomOddInt(5, 10);
  for (let i = 0; i < len; i++) {
    let tmp = [];
    for (let j = 1; j <= len; j++) {
      tmp.push(String.fromCharCode(getRandomArbitrary(begin || 48, end || 57)));
    }
    arr.push(tmp.join(" "));
  }
  return `${arr.length} ${arr[0].split(" ").length}\n${arr.join("\n")}`;
};
module.exports = makerandoommatrix;

/*  /*   let ground = [];
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
  return twodarry.join("\n");  */
