const getRandomArbitrary = require("../randoomarbitay");

const RandoomevenNumgen = (num = 1, limit = 20) => {
  let arr = [];
  let random = Math.random() * limit;
  let res = Math.round(random / num) * num;
  if (res === 0) {
    res = num;
  }
  for (let i = 0; i < res; i++) {
    arr.push(getRandomArbitrary(0, 99));
  }
  return arr.join(" ");
};
module.exports = RandoomevenNumgen;
/* 
// function that generates random numbers divisible by n with a default
const specialRandom = (num = 1, limit = 20) => {
  // getting a random number
  let arr = [];
  const random = Math.random() * limit;
  // rounding it off to be divisible by num
  const res = Math.round(random / num) * num;
  if (res === 0) {
    res = num;
  }
  for (let i = 0; i < res; i++) {
    arr.push(getRandomArbitrary(0, 9));
  }
  return arr.join(" ");
};
console.log(specialRandom(4)); */
