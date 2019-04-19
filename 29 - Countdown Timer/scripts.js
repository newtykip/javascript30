let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
	clearInterval(countdown); // Clear any currently running countdowns

	const now = Date.now();
	const then = now + (seconds * 1000);

	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		if (secondsLeft < 0) { // When the countdown finishes...
			clearInterval(countdown); // ...stop running the setInterval...
			return; // ...and return
		}

		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;

	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

	document.title = display; // Set the window's title
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();

	endTime.textContent = `Be back at ${hour}:${minutes}`;
}

function startTimer() {
	const seconds = parseInt(this.dataset.time, 10);

	timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const secs = this.minutes.value * 60;
	this.reset(); // Clear the textbox.
	timer(secs);
});
