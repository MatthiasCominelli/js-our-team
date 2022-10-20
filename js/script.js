
// Array di membri
const members = 
[
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
    },
    {
        foto: 'img/angela-caroll-chief-editor.jpg',
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
    },
    {
        foto: 'img/walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
    },
    {
        foto: 'img/angela-lopez-social-media-manager.jpg',
        nome: ' Angela Lopez',
        ruolo: 'Social Media Manager',
    },
    {
        foto: 'img/scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer',
    },
    {
        foto: 'img/barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
    },
];
console.log(members);
const card = document.querySelector('.team-container');

for (let i = 0; i < members.length; i++)
{
    const user = members[i]
    divGenerator(card, user.foto, user.nome, user.ruolo);
}

// Funzioni

function divGenerator(card, img, username,job)
{
    card.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="
            ${img}"
            />
        </div>
        <div class="card-text">
            <h3>${username}</h3>
            <p>${job}</p>
        </div>
    </div>`
}