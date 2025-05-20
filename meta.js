const TIERS = [
    {champ: "Yasuo", tier: "S", comment: "Najlepszy mid pod carry, niszczy soloQ."},
    {champ: "Ahri", tier: "A", comment: "Stabilna, mobilna, łatwa do nauki."},
    {champ: "Garen", tier: "B", comment: "Łatwy, skuteczny w niskich dywizjach."},
    {champ: "Lux", tier: "A", comment: "Mega poke, dobry support/mid."},
    {champ: "Ezreal", tier: "S", comment: "ADC safe pick, mocny w late game."},
    {champ: "Jinx", tier: "S", comment: "Najlepszy hypercarry patcha 14.10."}
];
document.getElementById('meta').innerHTML = `
<table class="ranking-table animate"><tr><th>Bohater</th><th>Tier</th><th>Komentarz</th></tr>
${TIERS.map(t=>`<tr><td>${t.champ}</td><td>${t.tier}</td><td>${t.comment}</td></tr>`).join('')}
</table>
`;