const myPromisedFunc = () =>{
    console.log("myPromisedFunc()...");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
};

myPromisedFunc()
    .then(() => {
        return myPromisedFunc();
    })
    .then(() => {
        return myPromisedFunc();
    })
    .then(() => {
        console.log("done");
    });