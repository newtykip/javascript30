const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span'); // Create a span
highlight.classList.add('highlight'); // Add the highlight class to the span
document.body.append(highlight); // Append the highlight span

function highlightLink() {
	const linkCoords = this.getBoundingClientRect(); // Get the link's coordinates
	console.log(linkCoords);
	const coords = {
		width: linkCoords.width,
		height: linkCoords.height,
		top: linkCoords.top + window.scrollY, // Calculate the new top
		left: linkCoords.left + window.scrollX // Calculate the new left
	};

	highlight.style.width = `${linkCoords.width}px`; // Update the highlight's width.
	highlight.style.height = `${linkCoords.height}px`; // Update the highlight's height.

	highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`; // Update the animation based on the link's size.
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink)); // For each trigger, when the mouse enters the element, highlight the link.
