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

/* function sumME(arr) {
  let res = arr.reduce(function (a, b) {
    return a + b;
  });
  return res;
} */
function ans(input) {
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
}

let input = `5
1 2 3 4 5
6 7 8 9 1
6 7 8 9 1
1 2 3 4 5
5 4 3 2 1`;

function main() {
  console.log(ans(input));
}
main();
