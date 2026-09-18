const userPromise = Promise.resolve("User data");
const postsPromise = Promise.resolve("Posts data");
const notificationPromise = Promise.resolve("Notifications");

Promise.all([
    userPromise,
    postsPromise,
    notificationPromise
])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log(error);
});