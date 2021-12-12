const performearrayoperation = require("./utils/OneDArray/operations/perfomearray");
const inquirer = require("inquirer");
const zipDirectory = require("./utils/zipme");
const performecharoperation = require("./utils/OneDArray/operations/randomcharop");
const performeAlphaoperation = require("./utils/OneDArray/operations/performealphaop");
const performemultinum = require("./utils/OneDArray/operations/performemulticasearr");
const asciart = require("./asciart");
const performeTwoDarrayoperation = require("./utils/TwoDArray/operation/performetwodarray");
const performeRandoomAlphaopMat = require("./utils/TwoDArray/operation/performealphamatirx");
const performeRandoomCharsopMat = require("./utils/TwoDArray/operation/performeCharmat");

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
          name: "TwodArray Number Multicase",
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
    let [hook, cases, procase] = [
      answers.Options[0].split(" ")[1],
      answers.Options[0].split(" ")[0],
      answers.Options[0].split(" ")[2],
    ];

    let whatisthetime = new Date().getTime();
    /*------------------- OneD Array--------------- */
    if (hook === "Number" && cases !== "TwodArray") {
      if (cases === "TwodArray") {
        performeTwoDarrayoperation("inputoutputlog");
      }
      if (cases !== "Multicase") {
        performearrayoperation("inputoutputlog");
      }
      if (cases === "Multicase") {
        performemultinum("inputoutputlog");
      }
    }
    if (hook === "chars" && cases !== "TwodArray") {
      if (cases !== "Multicase") {
        performecharoperation("inputoutputlog");
      }
      if (cases === "Multicase") {
        return console.log("under dev");
      }
    }
    if (hook === "Alphabet" && cases !== "TwodArray") {
      if (cases !== "Multicase") {
        performeAlphaoperation("inputoutputlog");
      }
      if (cases === "Multicase") {
        return console.log("under dev");
      }
    }
    /*----------------- TwoDArray------------------ */
    //nums
    if (hook === "Number" && cases === "TwodArray") {
      if (procase !== "Multicase") {
        performeTwoDarrayoperation("inputoutputlog");
      }
    }
    //Chars
    if (hook === "chars" && cases === "TwodArray") {
      if (cases !== "Multicase") {
        performeRandoomCharsopMat("inputoutputlog");
      }
      if (cases === "Multicase") {
      }
    }
    //alphas
    if (hook === "Alphabet" && cases === "TwodArray") {
      if (cases !== "Multicase") {
        performeRandoomAlphaopMat("inputoutputlog");
      }
      if (cases === "Multicase") {
        return console.log("under dev");
      }
    }
    zipDirectory("inputoutputlog", `inputoutputlog/ghost${whatisthetime}.zip`);
    return console.log(
      `Done! 🐺 zip Created under --> ./inputoutputlog/ghost${whatisthetime}.zip 🎃`
    );
  });
