let names = [
	'Lionel Messi',
	'Cristiano Ronaldo',
	'Neymar',
	'Robert Lewandowski',
	'Kylian Mbappé',
	'Kevin De Bruyne.',
	'Virgil van Dijk.',
	'Sadio Mané',
	' Shikhar Dhawan.',
	'Ravindra Jadeja.',
	'Rohit Sharma.',
	'Cheteshwar Pujara.',
	'Ishant Sharma.',
	'Ajinkya Rahane.',
	'Virat Kohli.',
	'Manish Pandey.',
];

const getName = () => {
	let Name = document.querySelector('input').value;

	return Name;
};
const teamgenerator = () => {
	let team = [];
	let name1 = names[Math.floor(Math.random() * names.length)];
	let name2 = names[Math.floor(Math.random() * names.length)];
	let name3 = names[Math.floor(Math.random() * names.length)];
	let name4 = names[Math.floor(Math.random() * names.length)];
	team.push(name1, name2, name3, name4);
	console.log(team);
	return team;
};
let teamnames = [
	'All Stars',
	'Amigos.',
	'Avengers.',
	'Bannermen',
	'Best of the Best.',
	'Bosses.',
	'Champions',
	'All Stars',
	'Amigos.',
	'Avengers.',
	'Bannermen',
	'Best of the Best.',
	'Bosses.',
	'Champions',
	'All Stars',
	'Amigos.',
	'Avengers.',
	'Bannermen',
	'Best of the Best.',
	'Bosses.',
	'Champions',
	'All Stars',
	'Amigos.',
	'Avengers.',
	'Bannermen',
	'Best of the Best.',
	'Bosses.',
	'Champions',
	'All Stars',
	'Amigos.',
	'Avengers.',
	'Bannermen',
	'Best of the Best.',
	'Bosses.',
	'Champions',
	'All Stars',
	'Amigos.',
	'Avengers.',
	'Bannermen',
	'Best of the Best.',
	'Bosses.',
	'Champions',
];
const getTeams = () => {
	let user = getName();
	let squadname = teamnames[Math.floor(Math.random() * teamnames.length)];
	// console.log(user);
	// let totalteams = document.querySelector('.teamsneeded').value;
	let col1 = document.querySelector('.members');
	let col2 = document.querySelector('.squad');
	let squad = teamgenerator();
	col1.innerHTML = `<h1>your team</h1> <br> <h3>${user}</h3> <br><h3>${squad[1]}</h3> <br><h3>${squad[2]}</h3> <br><h3>${squad[3]}</h3>`;
	col2.innerHTML = `<h1>squad name</h1> <br> <h2>${squadname}</h2>`;
};

const generateTeams = () => {
	let squadname = teamnames[Math.floor(Math.random() * teamnames.length)];
	let row = document.querySelector('.row');
	let numb = document.querySelector('.teamsneeded').value;
	for (let i = 0; i < numb; i++) {
		const element = document.createElement('div');
		element.classList.add('col-12');
		element.classList.add('col-sm-6');
		element.classList.add('col-md-4');

		element.style.background = 'orange';

		element.innerHTML = `<h2>${teamnames[i]}</h2> <br> <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, exercitationem!</h2>`;
		row.appendChild(element);
	}
};
