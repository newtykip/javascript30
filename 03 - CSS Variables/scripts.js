const inputs = document.querySelectorAll('.controls input'); // Selects all inputs.

function handleUpdate() {
	const suffix = this.dataset.sizing || ''; // Grabs the value of data-sizing from the element, or if it doesn't have data-sizing, then set it to nothing.

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // Set the CSS variable being edited to the value given from the input, and add the suffix.
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Listen for changes to each input.
inputs.forEach(input => input.addEventListener('mouseMove', handleUpdate)); // Listen for mouse movement on each element.
