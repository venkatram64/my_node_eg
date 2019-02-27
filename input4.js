const argv = require("yargs").option("f", {
    alias: "file",
    demandOption: true,
    default: "/etc/passwd",
    describe: "x marks the spot",
    type: "string"
}).argv;

console.log(argv);

//to run this program
//node input4.js