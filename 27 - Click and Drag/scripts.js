const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

function mouseDown(e) {
	isDown = true;
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;

	slider.classList.add('active'); // Add active class
}

function mouseLeave() {
	isDown = false;
	slider.classList.remove('active'); // Remove active class
}

function mouseUp() {
	isDown = false;
	slider.classList.remove('active'); // Remove active class
}

function mouseMove(e) {
	if (!isDown) {
		return;
	} // Stop the function

	e.preventDefault();

	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3;

	slider.scrollLeft = scrollLeft - walk;
}

// Event listeners
slider.addEventListener('mousedown', mouseDown);
slider.addEventListener('mouseleave', mouseLeave);
slider.addEventListener('mouseup', mouseUp);
slider.addEventListener('mousemove', mouseMove);
