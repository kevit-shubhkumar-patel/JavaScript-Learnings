const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 1000);
});

Promise.race([p1, p2])
    .then((result) => {
        console.log(result);
    });