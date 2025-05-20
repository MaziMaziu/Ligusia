const posts = [
    {
        id: 1,
        title: "Jak wspinać się w rankedach?",
        date: "2025-05-20",
        author: "MaziMaziu",
        intro: "Poznaj sprawdzone metody na szybki awans w soloQ.",
        content: "<p>Najważniejsze porady to: graj meta postaciami, dbaj o farmę i warduj mapę. Komunikacja i pozytywne nastawienie to klucz!</p>"
    },
    {
        id: 2,
        title: "Mistrzostwa Świata 2025 – zapowiedź",
        date: "2025-05-19",
        author: "Redaktor LoL",
        intro: "Worlds coraz bliżej! Kto według nas ma szansę na finał?",
        content: "<p>Na faworytów wyrastają T1, G2 oraz JDG. Polskie akcenty w drużynach – check!</p>"
    }
];

function renderBlogList() {
    const list = document.getElementById('blog-list');
    const article = document.getElementById('blog-article');
    list.innerHTML = posts.map(p => `
        <div class="blog-preview animate">
            <h2>${p.title}</h2>
            <div class="blog-meta">${p.date} | <b>${p.author}</b></div>
            <p>${p.intro}</p>
            <button onclick="showPost(${p.id})">Czytaj więcej</button>
        </div>
    `).join('');
    article.style.display = "none";
    list.style.display = "block";
}
window.showPost = function(id) {
    const p = posts.find(pp=>pp.id===id);
    if(p){
        document.getElementById('blog-list').style.display = "none";
        const article = document.getElementById('blog-article');
        article.innerHTML = `<h2>${p.title}</h2>
        <div class="blog-meta">${p.date} | <b>${p.author}</b></div>
        <div>${p.content}</div>
        <button onclick="renderBlogList()">Wróć</button>`;
        article.style.display = "block";
    }
}
document.addEventListener('DOMContentLoaded', renderBlogList);