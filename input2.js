process.stdin.on("readable", function(){
    let chunk;
    while((chunk = this.read())){
        console.log(`Received ${chunk.length} bytes of data`);
    }
});

//To run this program
//node input2.js
//This is a test string