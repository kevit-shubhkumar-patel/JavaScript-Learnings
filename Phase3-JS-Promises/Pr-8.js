const p1 = Promise.reject("Server 1 failed");

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 2 response"), 1000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 3 response"), 2000);
});

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });