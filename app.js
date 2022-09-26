const chalk = require("chalk");
const getNotes = require("./notes.js");

const command = process.argv;
//console.log(command);

if (command[2] === "add") {
  console.log(command[4]);
} else if (command === "remove") {
  console.log("removing note");
}
