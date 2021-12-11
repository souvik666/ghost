const ans = (input) => {
  //write your code here
  try {
    // let con = 0,
    //   vow = 0;
    // for (let i = 0; i < input.length; i++) {
    //   if (
    //     input[i] === 1 ||
    //     input[i] === 5 ||
    //     input[i] === 9 ||
    //     input[i] === 15 ||
    //     input[i] == 21
    //   ) {
    //     vow++;
    //   } else {
    //     con++;
    //   }
    // }
    // //console.log(6 * con + 66 * vow)

    let newInput = input.split("\n");
    let hook = newInput[0].split(" ").map(Number);
    let [N, M] = [hook[0], hook[1]];
    let arr = [];
    for (let i = 1; i < N; i++) {
      arr.push(newInput[i].split(" "));
    }
    console.log(arr);
    return "Hello wrold";
  } catch (err) {
    console.log("You might be using split in ans function or 🐞" + err);
  }
};

module.exports = ans;
