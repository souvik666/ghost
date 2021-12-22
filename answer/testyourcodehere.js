/* let input = `9
15
14 8 10 12 13 8 8 11 10 7 9 13 7 7 14
12
10 7 8 8 8 12 13 9 11 14 9 15
15
13 9 10 12 7 13 14 8 8 9 7 9 10 9 14
15
10 14 8 15 8 8 13 8 8 12 11 9 13 11 12
16
13 7 13 8 9 16 9 13 10 8 11 10 7 16 7 12
12
16 9 11 10 13 9 13 11 11 15 15 11
11
7 10 8 16 11 7 8 7 7 9 16
16
11 14 13 13 16 12 10 11 9 9 14 7 16 7 11 16
16
11 7 9 7 10 7 11 7 9 12 8 8 7 10 14 11`;

let newInput = input.split("\n");
for (let i = 1; i < newInput.length; i += 2) {
  let n = +newInput[i];
  let arr = newInput[i + 1].split(" ").map(Number);
  console.log(n, arr);
}
 */

function sumME(arr) {
  let res = arr.reduce(function (a, b) {
    return a + b;
  });
  return res;
}
function ans(input) {
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
  return (res[0] * 3 + res[1] + res[2] * 2).toString();
}

let input = `7 7
5 4 5 0 1 7 6
4 5 0 0 0 1 1
3 5 0 7 4 8 8
8 3 5 1 8 6 4
1 3 2 1 0 0 0
4 2 0 5 8 0 1
5 7 2 2 0 6 7`;

function main() {
  console.log(ans(input));
}
main();
