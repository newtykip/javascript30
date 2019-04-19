const timeNodes = [...document.querySelectorAll('[data-time]')]; // Spread data-time into an array.

const seconds = timeNodes
	.map(node => node.dataset.time) // Get the time dataset from the node list
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':').map(parseFloat); // Get the minutes and secs, and then turn them into integers.
		return (mins * 60) + secs;
	})
	.reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600; // SecondsLeft MOD 3600 (how many are left after the number being evenly distributed)
const minutes = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(`${hours}:${minutes}:${secondsLeft}`);
