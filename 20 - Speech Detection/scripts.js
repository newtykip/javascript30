window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition(); // Make an instance
recognition.interimResults = true;

let p = document.createElement('p'); // Make a p element
const words = document.querySelector('.words'); // Find the words class
words.append(p); // Append the p element to the words class

recognition.addEventListener('result', e => { // When the user speaks
	const transcript = [...e.results] // Convert the transcript to an array
		.map(result => result[0]) // Get the first result
		.map(result => result.transcript) // Get the transcript
		.join(''); // Join them together

	p.textContent = transcript;

	if (e.results[0].isFinal) { // When it is the final result
		p = document.createElement('p'); // Create another p element
		words.append(p); // And append it
	}

	/*
            ==================================
            USECASE EXAMPLE ==================
            ==================================
            This is an example of how this speech recognition could be used.
            For example, when the user says "unicorn", it could console.log
            a unicorn emoji. Though this is basic, you could make it so when
            the user says "get the weather", it makes a request to a weather
            API to get the data. This could also be used in many other
            interesting usecases, which I shall explore in my improved
            version.

            if (transcript.includes('unicorn')) {
                console.log('🦄');
            }
            */
});

recognition.addEventListener('end', recognition.start); // After a break, start again

recognition.start(); // Start the recognition
