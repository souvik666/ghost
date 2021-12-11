const performearrayoperation = require("./utils/OneDArray/operations/perfomearray");
const inquirer = require("inquirer");
const zipDirectory = require("./utils/zipme");
const performecharoperation = require("./utils/OneDArray/operations/randomcharop");
const performeAlphaoperation = require("./utils/OneDArray/operations/performealphaop");
const performemultinum = require("./utils/OneDArray/operations/performemulticasearr");
const asciart = require("./asciart");
const performeTwoDarrayoperation = require("./utils/TwoDArray/operation/performetwodarray");

inquirer
  .prompt([
    {
      type: "checkbox",
      message: `🚨 Make Sure to Write your answer before proceed ♆ (./answer/write.your.ans.js)🔥 \n ${asciart}`,
      name: "Options",
      choices: [
        new inquirer.Separator(" *= One dimension array =* "),
        {
          name: "(Randoom) Number Array",
        },
        {
          name: "(Randoom) chars Array",
        },
        {
          name: "(Randoom) Alphabet Array",
        },
        {
          name: "Multicase Number Array",
        },
        new inquirer.Separator(" *= Two dimension array =* "),
        {
          name: "TwodArray Number (Randoom)",
        },
        {
          name: "TwodArray chars (Randoom)",
        },
        {
          name: "TwodArray Alphabet (Randoom) ",
        },
        {
          name: "TwodArray Number (Multicase) ",
        },
      ],

      validate(answer) {
        /* Only one request at one time */
        if (answer.length < 1 || answer.length > 1) {
          return "You must select one ghost module to proceed.";
        }

        return true;
      },
    },
  ])
  .then((answers) => {
    let [hook, cases] = [
      answers.Options[0].split(" ")[1],
      answers.Options[0].split(" ")[0],
    ];

    let whatisthetime = new Date().getTime();
    if (hook === "Number" && cases !== "Multicase") {
      performearrayoperation("inputoutputlog");
    } else if (hook === "Number" && cases === "Multicase") {
      //under dev
      performemultinum("inputoutputlog");
    }
    if (hook === "Number" && cases === "TwodArray") {
      performeTwoDarrayoperation("inputoutputlog");
    }
    if (hook === "chars" && cases !== "Multicase") {
      performecharoperation("inputoutputlog");
    } else if (hook === "chars" && cases == "Multicase") {
      return console.log("under dev");
    }
    if (hook === "Alphabet" && cases !== "Multicase") {
      performeAlphaoperation("inputoutputlog");
    } else if (hook === "Alphabet" && cases == "Multicase") {
      return console.log("under dev");
    }
    zipDirectory("inputoutputlog", `inputoutputlog/ghost${whatisthetime}.zip`);
    return console.log(
      `Done! 🐺 zip Created under --> ./inputoutputlog/ghost${whatisthetime}.zip 🎃`
    );
  });
