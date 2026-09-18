const p1 = Promise.resolve("User data");
const p2 = Promise.reject("Posts failed");
const p3 = Promise.resolve("Notifications");

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log(results);
    });