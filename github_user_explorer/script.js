const usernameInput = document.querySelector("#username");
const fetchBtn = document.querySelector("#fetchBtn");
const status = document.querySelector("#status");
const profile = document.querySelector("#profile");

fetchBtn.addEventListener("click", async () => {
    try {
        status.textContent = "Fetching data...";
        status.style.color = "black";

        const username = usernameInput.value.trim();

        if (username === "") {
            status.textContent = "Please enter a GitHub username.";
            status.style.color = "red";
            return;
        }

        const url = `https://api.github.com/users/${username}`;

        const response = await fetch(url);

        // fetch() doesn't throw an error for 404
        if (!response.ok) {
            throw new Error("GitHub user not found");
        }

        const data = await response.json();

        console.log(data);

        status.textContent = "Data fetched successfully!";
        status.style.color = "green";

        profile.innerHTML = `
            <img src="${data.avatar_url}" width="100">
            <h2>${data.name || data.login}</h2>
            <p><strong>Username:</strong> ${data.login}</p>
            <p><strong>Bio:</strong> ${data.bio || "No bio available"}</p>
            <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Following:</strong> ${data.following}</p>
        `;

    } catch (error) {
        status.textContent = "Error occurred while fetching data.";
        status.style.color = "red";

        profile.innerHTML = "";

        console.log(`Error occurred: ${error.message}`);
    }
});