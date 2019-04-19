const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]'); // Get all of the checkboxes.

let lastChecked;

function handleCheck(e) {
	let inBetween = false;

	if (e.shiftKey && this.checked) { // If they held the shift key down and they are checking the checkbox...
		checkboxes.forEach(checkbox => { // For each checkbox...
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			} // If the checkbox is the current checkbox, or the last checked checkbox, invert inBetween.

			if (inBetween) {
				checkbox.checked = true;
			} // Make it so every box between the two checked boxes are checked.
		});
	}

	lastChecked = this; // Make the element the last checked.
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); // Make every checkbox, when clicked, run handleCheck();
