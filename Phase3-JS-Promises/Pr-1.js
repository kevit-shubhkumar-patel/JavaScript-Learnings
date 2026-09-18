const promise = new Promise((resolve, reject) => {
    resolve("Operation Successful!");
});

promise.then((result) => {
    console.log(result);
});

const promise2 = new Promise((resolve, reject) => {

    reject("Something went wrong!");

});

promise2.catch((error) => {
    console.log(error);
});