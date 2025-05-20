const champions = [
    {
        name: "Ahri",
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
    },
    {
        name: "Garen",
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"
    },
    {
        name: "Jinx",
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
    },
    {
        name: "Yasuo",
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
    },
    {
        name: "Lux",
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg"
    },
    {
        name: "Ezreal",
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg"
    }
];

function loadVotes() {
    const votes = localStorage.getItem('votes');
    return votes ? JSON.parse(votes) : {};
}

function saveVotes(votes) {
    localStorage.setItem('votes', JSON.stringify(votes));
}

function renderChampions() {
    const list = document.getElementById('champion-list');
    if (!list) return;
    const votes = loadVotes();
    list.innerHTML = '';
    champions.forEach(champ => {
        const voteCount = votes[champ.name] || 0;
        const div = document.createElement('div');
        div.className = 'champion animate';
        div.innerHTML = `
            <img src="${champ.img}" alt="${champ.name}" />
            <h3>${champ.name}</h3>
            <button data-champ="${champ.name}">Głosuj</button>
            <div class="vote-count">Głosy: <span id="vote-${champ.name}">${voteCount}</span></div>
        `;
        list.appendChild(div);
    });

    // Obsługa głosowania
    document.querySelectorAll('.champion button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-champ');
            const votes = loadVotes();
            votes[name] = (votes[name] || 0) + 1;
            saveVotes(votes);
            document.getElementById('vote-' + name).textContent = votes[name];
            e.target.disabled = true;
            e.target.textContent = "Dziękujemy!";
        });
    });
}

document.addEventListener('DOMContentLoaded', renderChampions);