import {getUser} from "./Pr-2.mjs";

const getUserData = async () => {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Operation Completed");
    }
}

getUserData();