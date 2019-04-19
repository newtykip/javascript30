const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value; // Set the Utterance's script

function toggle(startOver = true) {
	speechSynthesis.cancel(); // Cancel out any speech currently running
	if (startOver) {
		speechSynthesis.speak(msg);
	} // Unless specified otherwise, start speaking the message again.
}

function populateVoices() {
	voices = this.getVoices(); // Get all of the available voices

	voicesDropdown.innerHTML = voices
		.filter(voice => voice.lang.includes('en')) // Filter the list of voices to only be english voices
		.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`) // Map over every voice gathered
		.join(''); // Join all of the voices together
}

function setVoice() {
	msg.voice = voices.find(voice => voice.name === this.value); // Loop over every voice available and find the one where the name attribute is the same as the option selected.
	toggle(); // Run the toggle function
}

function setOption() {
	msg[this.name] = this.value; // Change the corresponding value to the new value.
	toggle(); // Run the toggle function.
}

speechSynthesis.addEventListener('voiceschanged', populateVoices); // Get all of the available voices
voicesDropdown.addEventListener('change', setVoice); // When a new voice is selected from the dropdown, change the voice.
speakButton.addEventListener('click', toggle); // When the speak button is pressed, run toggle();
stopButton.addEventListener('click', () => toggle(false)); // Make the voice stop when the stopButton is clicked.

options.forEach(option => option.addEventListener('change', setOption)); // For each option, if it changes, run setOption();
