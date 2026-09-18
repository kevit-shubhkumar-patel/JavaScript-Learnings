function checkUser(age){
    return new Promise((resolve, reject) => {
        if (age >= 18){
            resolve("User is Eligible");
        }else{
            reject("User is not Eligible");
        }
    });
}

checkUser(21)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Checking Completed");
    });

// checkUser(15)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });