function getProfile() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Profile loaded"), 2000);
    });
}

function getMessages() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Messages loaded"), 1000);
    });
}

function getNotifications() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Notifications loaded"), 1500);
    });
}

async function loadData() {
    try {
        const [profile, messages, notifications] = await Promise.all([
            getProfile(),
            getMessages(),
            getNotifications()
        ]);
    
        console.log(profile);
        console.log(messages);
        console.log(notifications);
    }catch (error) {
        console.log("Error:", error);
    }finally{
        console.log("Data loading operation completed");
    }
}

loadData();