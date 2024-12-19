function fetchPosts(username) {
    // Simulated posts based on the username
    const mockPosts = {
        'user1': ['Post 1 from user1', 'Post 2 from user1'],
        'user2': ['Post 1 from user2', 'Post 2 from user2'],
        'user3': ['Post 1 from user3', 'Post 2 from user3'],
    };

    return new Promise((resolve, reject) => {
        if (mockPosts[username]) {
            resolve(mockPosts[username]);
        } else {
            reject('No posts found for this username.');
        }
    });
}

document.getElementById('idCardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;

    console.log(`Name: ${name}, Username: ${username}`); // Debugging statement

    fetchPosts(username).then(posts => {
        const idCardDisplay = document.getElementById('idCardDisplay');
        idCardDisplay.innerHTML = `<h2>${name}</h2><p>Posts:</p><ul>${posts.map(post => `<li>${post}</li>`).join('')}</ul>`;
    }).catch(error => {
        console.error('Error fetching posts:', error);
        alert('Failed to fetch posts. Please check the username.');
    });
});
