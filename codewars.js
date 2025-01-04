document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    fetchUserData(username);
});

function fetchUserData(username) {
    const url = `https://www.codewars.com/api/v1/users/${username}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayUserCard(data);
        })
        .catch(error => {
            alert('Hiba történt a felhasználói adatok betöltésekor.');
            console.error(error);
        });
}

function displayUserCard(user) {
    const userCardsContainer = document.getElementById('userCardsContainer');
    
    const card = document.createElement('div');
    card.classList.add('user-card');
    
    card.innerHTML = `
        <h3>${user.username}</h3>
        <p><strong>Neve:</strong> ${user.name || 'Nincs adat'}</p>
        <p><strong>Klán:</strong> ${user.clan || 'Nincs adat'}</p>
        <p><strong>Nyelvek:</strong> ${user.languages.join(', ') || 'Nincs adat'}</p>
        <p><strong>JavaScript:</strong> ${user.languages.includes('javascript') ? 'Igen' : 'Nem'}</p>
        <p><strong>Rang:</strong> ${user.rank || 'Nincs adat'}</p>
    `;
    
    userCardsContainer.appendChild(card);
}