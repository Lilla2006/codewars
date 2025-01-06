document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    console.log(username);
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
            console.log(error);
        });
}

function displayUserCard(user) {
    const userCardsContainer = document.getElementById('userCardsContainer');
    const formatter = new Intl.ListFormat('hu', { style: 'long', type: 'conjunction' });
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
        <h3>${user.username}</h3>
        <p><strong>Neve:</strong> ${user.name || 'Nincs adat'}</p>
        <p><strong>Klán:</strong> ${user.clan || 'Nincs adat'}</p>
        <p><strong>Nyelvek:</strong> ${user.languages?.length ? formatter.format(user.languages) : 'Nincs adat'}</p>
        <p><strong>JavaScript:</strong> ${user.languages.indexOf('javascript') !== -1 ? 'Igen' : 'Nem'}</p>
        <p><strong>Rang:</strong> ${user.rank || 'Nincs adat'}</p>
    `;
    
    userCardsContainer.appendChild(card);
}
