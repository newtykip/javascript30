const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
	return Math.round(Math.random() * ((max - min) + min));
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];

	if (hole === lastHole) {
		return randomHole(holes);
	}

	lastHole = hole;

	return hole;
}

function peep() {
	const time = randomTime(300, 1000);
	const hole = randomHole(holes);

	hole.classList.add('up'); // Add the up class

	setTimeout(() => {
		hole.classList.remove('up'); // Remove the up class
		if (!timeUp) {
			peep();
		} // If the game is running, peep afterwards
	}, time);
}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	peep();
	setTimeout(() => timeUp = true, 10000); // eslint-disable-line no-return-assign
}

function bonk(e) {
	if (!e.isTrusted) {
		return;
	} // If someone is cheating, return.

	this.classList.remove('up'); // Put the mole down

	score++; // Add to the score
	scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
