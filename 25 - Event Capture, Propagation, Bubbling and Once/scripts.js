const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
	console.log(this.classList.value);
	// E.stopPropagation(); // Stop bubbling, the user has clicked the one it wanted!

	// console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
	capture: false, // When true, make it bubble down rather than up
	once: true // Listen for a click, and then unbind itself (same as running div.removeEventListener), so the event listener never runs again.
})); // For each div selected, add a click event listener that will run logText();

// "once" example
button.addEventListener('click', () => {
	console.log('Click!');
}, {
	once: true
});
