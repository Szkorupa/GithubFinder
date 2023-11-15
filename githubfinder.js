async function searchGithub() {
    const username = document.getElementById('Username').value;
    const resultDiv = document.getElementById('result');

    // Wyczyszczenie poprzednich wyników
    resultDiv.innerHTML = '';

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (response.ok) {
            resultDiv.innerHTML = `
                <img src="${data.avatar_url}" alt="Profile picture">
                <h2>Username: ${data.login}</h2>
                <p>${data.bio || 'No bio available'}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                <p>Public Repos: ${data.public_repos}</p>
                <p>Profile Link: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
            `;
        } else {
            resultDiv.innerHTML = `<h3>User not found</h3>`;
        }
    } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        resultDiv.innerHTML = `<p>Something went wrong</p>`;
    }
}
