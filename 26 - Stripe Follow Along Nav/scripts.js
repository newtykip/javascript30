const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
	this.classList.add('trigger-enter'); // Add the trigger-enter class

	setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); // After 150ms, add the trigger-enter-active class.

	background.classList.add('open');

	const dropdown = this.querySelector('.dropdown'); // Get the dropdown
	const dropdownCoords = dropdown.getBoundingClientRect(); // Get the dropdown's coords
	const navCoords = nav.getBoundingClientRect(); // Get the nav's coords.

	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top, // Offset the dropdowncoords top by the navcoords top
		left: dropdownCoords.left - navCoords.left // Offset the dropdowncoords left by the navcoords left
	};

	background.style.setProperty('width', `${coords.width}px`); // Set the width of the background
	background.style.setProperty('height', `${coords.height}px`); // Set the height of the background
	background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`); // Make the background wrap around the content
}

function handleLeave() {
	this.classList.remove('trigger-enter', 'trigger-enter-active'); // Remove both the trigger-enter and trigger-enter-active classes in one shot.
	background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
