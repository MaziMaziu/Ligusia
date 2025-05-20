const MOCK_API = [
    {name:"Aatrox", title:"Darkin Blade", role:"Top"},
    {name:"Ahri", title:"Nine-Tailed Fox", role:"Mid"},
    {name:"Ashe", title:"Frost Archer", role:"ADC"},
    {name:"Thresh", title:"Chain Warden", role:"Support"},
    {name:"Lee Sin", title:"Blind Monk", role:"Jungle"}
];

document.getElementById('load-api').addEventListener('click', ()=>{
    document.getElementById('api-result').innerHTML = "<ul>" +
      MOCK_API.map(c=>`<li><b>${c.name}</b> – ${c.title} (<i>${c.role}</i>)</li>`).join('')
      + "</ul>";
});