const myPromisedFunc = () =>{
    console.log("myPromisedFunc()...");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
};

Promise.all([
    myPromisedFunc(),
    myPromisedFunc(),
    myPromisedFunc()
]).then(() =>{
    console.log("done");
});