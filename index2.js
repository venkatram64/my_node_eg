const fs = require("fs");
const http = require("http");
const path = require("path");
const port = 8081;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "image/jpg");
    fs.readFile(path.resolve(__dirname, "hello_world.jpg"), (err, data) =>{
        res.end(data);
    });
});

server.listen(port, err => {
    if(err){
        return console.log(err);
    }
    console.log(`server is listening: ${port}`);
});