// Animacja wejścia sekcji + random fact
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.animate').forEach(el => {
        setTimeout(() => el.classList.add('visible'), 200 + Math.random()*400);
    });

    // Losowa ciekawostka LoL
    const facts = [
        "Najwięcej pentakilli zdobywa bohater Master Yi.",
        "Pierwszy światowy czempion Worlds: Fnatic (2011).",
        "Najdroższa skórka: Elementalist Lux (3250 RP).",
        "Najczęściej banowany bohater w historii: Yasuo.",
        "Najmłodszy bohater lore: Annie (8 lat).",
        "Najwięcej skórek ma bohater Miss Fortune.",
        "Najbardziej znienawidzony bohater: Teemo!",
        "Twórcy LoL to byli pracownicy Blizzarda.",
        "W LoL jest ponad 160 bohaterów i 1400 skórek.",
        "Pierwsza polska transmisja Worlds: 2015 rok."
    ];
    const factBox = document.getElementById('random-fact');
    if(factBox) {
        factBox.innerHTML = `<h2>Ciekawostka o LoL</h2><p>${facts[Math.floor(Math.random()*facts.length)]}</p>`;
    }
});