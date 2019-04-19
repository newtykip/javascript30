function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Selects the audio element with the keycode that is grabbed by the listener.
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // Selects the key that has been pressed on the window.

	// If an audio element can't be found, stop the function from running.
	if (!audio) {
		return;
	}

	audio.currentTime = 0; // Rewind to the beginning of the audio element, so that it can run multiple times at once.
	audio.play(); // Play the audio.

	key.classList.add('playing'); // Add 'playing' class.
}

function removeTransition(e) {
	// Skip it if it is not a transform.
	if (e.propertyName !== 'transform') {
		return;
	}

	this.classList.remove('playing'); // Remove 'playing' class.
}

const keys = document.querySelectorAll('.key'); // Grab all elements with the class 'key'.

keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // When the transition ends, run removeTransition();
window.addEventListener('keydown', playSound); // When a key is pressed, run playSound().
