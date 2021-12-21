function sumME(arr) {
  let res = arr.reduce(function (a, b) {
    return a + b;
  });
  return res;
}
const ans = (input) => {
  try {
    let newinput = input.trim().split("\n");
    let arr = [];
    for (let i = 1; i < newinput.length; i++) {
      arr.push(newinput[i].split(" ").map(Number));
    }
    let res = [];
    let right = arr.length - 1;
    let sum = 0;
    let len = (arr.length / 2) | 0;
    for (var i = 0; i < len; i++) {
      sum += arr[i][right];
    }
    res.push(sum);
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[i][j];
    }
    res.push(sum);
    sum = 0;
    for (let k = i + 1; k < arr.length; k++) {
      sum += arr[k][0];
    }
    res.push(sum);
    sum = 0;
    return (res[0] * 6 + res[1] * 33 + res[2] * 2).toString();
  } catch (e) {
    console.error(e);
  }
};

module.exports = ans;
