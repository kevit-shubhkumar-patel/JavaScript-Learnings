async function createUser() {

    try {

        const user = {
            name: "Shubh",
            email: "shubh@example.com"
        };

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)
            }
        );

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        const data = await response.json();

        console.log("Created user:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

createUser();

