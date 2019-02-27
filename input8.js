const ourPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        return resolve("Hello, world!");
    }, 1000);
});

ourPromise.then(data => {
    console.log(data);
});

const ourPromise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        return reject(new Error("Goodby, world!"));
    }, 1000);
});

ourPromise2.catch(err => {
    console.log(err);
});

