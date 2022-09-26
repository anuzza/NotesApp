const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Anuja";
data.age = 19;
const datajson = JSON.stringify(data);
fs.writeFileSync("1-json.json", datajson);
console.log(datajson);
