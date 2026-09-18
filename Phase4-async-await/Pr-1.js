function getUser(){
    return Promise.resolve("Failed to get user");
}

async function run(){
    try{
        const user = await getUser();
        console.log(user);
    }catch (error){
        console.log("Error :", error);
    }finally{
        console.log("Operation Completed");
    }
}

run();