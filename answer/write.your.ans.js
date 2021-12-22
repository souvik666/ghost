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
    let sum = 0;
    for (let i = 0; i < half; i++) {
      sum += arr[i][0];
    }
    for (let i = 0; i <= half; i++) {
      sum += arr[half][i];
      //console.log(arr[half][i]);
    }
    for (let i = half + 1; i < arr.length; i++) {
      sum += arr[i][half];
      sum += arr[arr.length - 1][i];
    }
    return (sum * 3).toString();
  } catch (e) {
    console.error(e);
  }
};

module.exports = ans;
