const chalk = require("chalk");
const fs = require("fs");

const colours = ["red", "green", "blue"];
colours.forEach((colour) => {
    console.log(chalk[colour]("Hello World."));
});

const result = fs.readdirSync(__dirname);
console.log(result);
