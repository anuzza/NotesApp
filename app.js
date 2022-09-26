const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");
console.log(getNotes());
console.log(validator.isEmail("anuja@example.com"));
console.log(validator.isURL("https://google.com"));
console.log(chalk.green.bold.inverse("Success!"));
