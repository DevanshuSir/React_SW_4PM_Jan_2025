// http , fs , os , path 

const os = require("os");
const path = require("path");

// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.machine());

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.dirname(__dirname));
