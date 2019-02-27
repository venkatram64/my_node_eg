process.stdin.on("data", chunk =>{
    console.log(`Received ${chunk.length} bytes of data`)
});

//To run this progrom => 
//node input.js
//Hello World