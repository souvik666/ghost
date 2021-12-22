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
    let half = (arr.length / 2) | 0;
    let top = 0;
    let left = 0;
    let res = [];
    let sum = 0;
    while (left < half) {
      sum += arr[0][left];
      left++;
    }
    res.push(sum);
    sum = 0;

    while (top < arr.length) {
      sum += arr[top][left];
      top++;
    }
    res.push(sum);
    sum = 0;
    for (let i = half + 1; i < arr.length; i++) {
      sum += arr[arr.length - 1][i];
    }
    res.push(sum);
    sum = 0;
    return (res[0] * 3 + res[1]*3 + res[2] * 2).toString();
  } catch (e) {
    console.error(e);
  }
};

module.exports = ans;
