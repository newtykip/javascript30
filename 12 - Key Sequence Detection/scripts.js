const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', e => {
	pressed.push(e.key); // Push the pressed key to the pressed array.
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // When the array starts to contain more letters than the amount needed for the secretCode, push out old values.

	if (pressed.join('').includes(secretCode)) {
		cornify_add();
	}
});
