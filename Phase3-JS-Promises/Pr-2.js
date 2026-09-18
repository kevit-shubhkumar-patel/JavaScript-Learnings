// Promise with success
const fetchUser = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            name: "Shubh",
            age: 21
        });
    }, 2000);

});

fetchUser.then((user) => {
    console.log(user);
});

const fetchUser2 = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        reject("Unable to fetch user");
    }, 2000);
});

fetchUser2.then((user) => {
    console.log(user);
})
.catch((error) => {
    console.log(error);
});