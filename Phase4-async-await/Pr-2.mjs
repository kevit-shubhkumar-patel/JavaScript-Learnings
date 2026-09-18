export function login() {
    return Promise.resolve("Login successful");
}

export function getUser() {
    return Promise.resolve("User data received");
}

export function getPosts() {
    return Promise.resolve("Posts received");
}

// async function run() {
//     try{
//         const user = await login();
//         console.log(user);

//         const user2 = await getUser();
//         console.log(user2);

//         const user3 = await getPosts();
//         console.log(user3);

//     }catch(error){
//         console.log("Error :", error);
//     }finally{
//         console.log("Completed the operation");
//     }
// }

// run();