const CHAMPS = [
    "Ahri","Garen","Jinx","Yasuo","Lux","Ezreal"
];
function loadVotes() {
    const votes = localStorage.getItem('votes');
    return votes ? JSON.parse(votes) : {};
}
function renderRanking() {
    const votes = loadVotes();
    const arr = CHAMPS.map(name => ({
        name,
        votes: votes[name] || 0
    })).sort((a,b)=>b.votes-a.votes);
    document.getElementById('ranking').innerHTML = `
    <table class="ranking-table animate"><tr><th>Miejsce</th><th>Bohater</th><th>Głosy</th></tr>
    ${arr.map((c,i)=>`<tr><td>${i+1}</td><td>${c.name}</td><td>${c.votes}</td></tr>`).join('')}
    </table>`;
}
document.addEventListener('DOMContentLoaded', renderRanking);