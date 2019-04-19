const panels = document.querySelectorAll('.panel'); // Grab all the panels.

function toggleOpen() {
	this.classList.toggle('open'); // Add or remove the 'open' class from the element.
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	} // If the property's name contains 'flex', add or remove the 'open-active' class from the element. We do this because Safari takes the element name as 'flex', whilst other browsers seem to take it as 'flex-grow'.
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); // Add an event listener on each panel which triggers when the element was clicked, to toggle the open element.
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); // Add an event listener on each panel which triggers when the transition for the 'open' class ends, to toggle the active element.
