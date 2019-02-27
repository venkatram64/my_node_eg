
const ourPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        return reject(new Error("Goodby, world!"));
    }, 1000);
});

ourPromise.then(
    data => {
        console.log(success);
    },
    err => {
        console.log(err);
    }
)

