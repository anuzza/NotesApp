const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
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

yargs.parse();
//add, remove, read, list
// console.log(yargs.argv);
