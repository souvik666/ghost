const fs = require("fs");
const writeme = (location, data) => {
  fs.writeFile(location, data, (err) => {
    if (err) return console.error(err + "⛽");
    //console.log("Pass");
  });
};

module.exports = writeme;
