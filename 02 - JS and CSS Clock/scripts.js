const secondHand = document.querySelector('.second-hand'); // Selects the seconds hand.
const minsHand = document.querySelector('.min-hand'); // Selects the minutes hand.
const hourHand = document.querySelector('.hour-hand'); // Selects the hours hand.

function setDate() {
	const now = new Date(); // Make a new date object.

	const seconds = now.getSeconds(); // Get the seconds.
	const secondsDegrees = ((seconds / 60) * 360) + 90; // Calculate the amount of degrees to rotate the seconds hand.
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Rotate the seconds hand by the amount calculated.

	const mins = now.getMinutes(); // Get the minutes.
	const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90; // Calculate the amount of degrees to rotate the minutes hand.
	minsHand.style.transform = `rotate(${minsDegrees}deg)`; // Rotate the minutes hand by the amount calculated.

	const hour = now.getHours(); // Get the hours.
	const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90; // Calculate the amount of degrees to rotate the hours hand.
	hourHand.style.transform = `rotate(${hourDegrees}deg)`; // Rotate the hours hand by the amount calculated.
}

setInterval(setDate, 1000);

setDate();
