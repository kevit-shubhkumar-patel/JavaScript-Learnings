async function updatePost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Learning REST APIs"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to update post");
        }

        const data = await response.json();

        console.log("Updated post:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

updatePost();