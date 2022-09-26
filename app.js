const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding new note");
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("removing a note");
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "listing your notes",
  handler: function () {
    console.log("listing out all notes");
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading a note");
  },
});

//add, remove, read, list
console.log(yargs.argv);
