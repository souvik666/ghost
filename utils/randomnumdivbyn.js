const RandoomNumdivByN = (num) => {
  let limit = 20;
  let random = Math.random() * limit;
  let res = Math.round(random / num) * num;
  if (res === 0) {
    res = num;
  }
  return res;
};

module.exports = RandoomNumdivByN;
