const makerandoommatrix = require("./Maketwodarr");

const MakTwoDrandoomChars = () => {
  return makerandoommatrix(58, 64);
};
console.log(MakTwoDrandoomChars());
module.exports = MakTwoDrandoomChars;
