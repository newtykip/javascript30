const canvas = document.querySelector('#draw'); // Grab all elements with the id 'draw'.
const ctx = canvas.getContext('2d'); // Make the canvas 2d.

// Make the canvas the same size as the page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round'; // Make the lines join with a round stroke.
ctx.lineCap = 'round'; // Make the cap of the pen round.

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
	if (!isDrawing) {
		return;
	} // Stop the function from running when the user's mouse isn't down.

	console.log(e);

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Update the color.
	ctx.beginPath(); // Start the drawing
	ctx.moveTo(lastX, lastY); // Move the brush to the lastX and lastY coordinates.
	ctx.lineTo(e.offsetX, e.offsetY); // Make the line draw to where the mouse is moved.
	ctx.stroke(); // Draw the line.

	[lastX, lastY] = [e.offsetX, e.offsetY]; // Update lastX and lastY.

	hue++; // Change the color.
	if (hue >= 360) {
		hue = 0;
	} // Don't allow hue to be higher than 360.

	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}

	if (direction) {
		ctx.lineWidth++;
	}

	if (!direction) {
		ctx.lineWidth--;
	}
}

canvas.addEventListener('mousedown', e => {
	isDrawing = true; // When the mouse is down, make it draw.
	[lastX, lastY] = [e.offsetX, e.offsetY]; // Update lastX and lastY.
});

// When the mouse moves, run the draw function.
canvas.addEventListener('mousemove', draw);

// When the mouse is up, stop it from drawing.
canvas.addEventListener('mouseup', () => isDrawing = false); // eslint-disable-line no-return-assign

// When the mouse leaves the window, stop it from drawing.
canvas.addEventListener('mouseout', () => isDrawing = false); // eslint-disable-line no-return-assign
