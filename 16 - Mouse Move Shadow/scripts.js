const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

function shadow(e) {
	const {
		offsetWidth: width,
		offsetHeight: height
	} = hero; // Get the offsetWidth and offsetHeight.
	let {
		offsetX: x,
		offsetY: y
	} = e; // Get the offsetX and offsetY.

	if (this !== e.target) {
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2)); // Calculate how much the mouse has moved on the x axis.
	const yWalk = Math.round((y / height * walk) - (walk / 2)); // Calculate how much the mouse has moved on the y axis.

	text.style.textShadow = `
                ${xWalk}px ${yWalk}px 0 rgba(225,0,255,0.7),
                ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,244,0.7),
                ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
                ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
            `; // Set all of the styling.
}

hero.addEventListener('mousemove', shadow); // When the mouse moves over the hero element, run the shadow function.
