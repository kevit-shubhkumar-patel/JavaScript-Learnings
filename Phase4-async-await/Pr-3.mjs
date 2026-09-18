import { getUser, getPosts, login} from "./Pr-2.mjs";

async function loadDashboard() {

    try {

        const [log, posts, user] = await Promise.all([
            login(),
            getPosts(),
            getUser()
        ]);

        console.log(log);
        console.log(posts);
        console.log(user);

    } catch (error) {

        console.log("Failed:", error);

    }
}

loadDashboard();