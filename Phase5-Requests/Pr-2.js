async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        console.log("Name:", data.name);
        console.log("Email:", data.email);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUser();