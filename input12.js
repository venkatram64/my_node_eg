const promiseFunc = timeout => {
    return new Promise((resolve, reject) => {
        if(timeout % 2 == 0){
            return setTimeout(() => {
                return resolve(timeout);
            }, timeout);
        }
        return reject(new Error("even numbers only"));
    });
};

promiseFunc(500)
    .then(value => {
        console.log(`${value} as even`)
    })