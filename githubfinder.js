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
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" alt="Profile picture">
                <p>${data.bio || 'No bio available'}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p>User not found</p>`;
        }
    } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        resultDiv.innerHTML = `<p>Something went wrong</p>`;
    }
}
