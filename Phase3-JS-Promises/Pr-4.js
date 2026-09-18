function login() {
    return new Promise((resolve, reject) => {
        resolve("Login successful");
    });
}

// function getUser() {
//     return new Promise((resolve, reject) => {
//         resolve("User data received");
//     });
// }


function getUser() {
    return new Promise((resolve, reject) => {
        reject("Failed to get user");
    });
}

function getPosts() {
    return new Promise((resolve, reject) => {
        resolve("Posts received");
    });
}



login()
    .then((message) => {
        console.log(message);
        return getUser();
    })
    .then((user) => {
        console.log(user);
        return getPosts();
    })
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.log("Error:", error);
    });