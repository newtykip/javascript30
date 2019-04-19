const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
	navigator.mediaDevices.getUserMedia({
		video: true, // Only allow video
		audio: false
	})
		.then(localMediaStream => {
			video.srcObject = localMediaStream; // Set the source to the local stream
			video.play(); // Play the video
		})
		.catch(error => {
			console.error('The user didn\'t enable their webcam.', err);
		});
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height); // Draw the image

		let pixels = ctx.getImageData(0, 0, width, height); // Take the pixels

		// pixels = redEffect(pixels); // Red Effect

		// pixels = rgbSplit(pixels); // RGB Split
		// ctx.globalAlpha = 0.8;

		pixels = greenScreen(pixels); // Green Screen

		ctx.putImageData(pixels, 0, 0); // Place the pixels back on the canvas.
	}, 16);
}

function takePhoto() {
	// Play the sound
	snap.currentTime = 0;
	snap.play();

	const data = canvas.toDataURL('image/jpeg'); // Make a URL out of the canvas
	const link = document.createElement('a'); // Create a link
	link.href = data; // Set the link's href to the URL
	link.setAttribute('download', 'handsome'); // Make the link, when clicked, download the image which we shall call handsome
	link.innerHTML = `<img src="${data}" alt="Handsome Man" />`; // Display the image on screen.
	strip.insertBefore(link, strip.firstChild); // Make the image show up before the strips's first child.
}

function redEffect(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i + 0] = pixels.data[i + 0] + 200; // R
		pixels.data[i + 1] = pixels.data[i + 1] - 50; // G
		pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // B
	}

	return pixels;
}

function rgbSplit(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i - 150] = pixels.data[i + 0]; // R
		pixels.data[i + 500] = pixels.data[i + 1]; // G
		pixels.data[i - 550] = pixels.data[i + 2]; // B
	}

	return pixels;
}

function greenScreen(pixels) {
	const levels = {}; // Make a new object for the levels

	document.querySelectorAll('.rgb input').forEach(input => {
		levels[input.name] = input.value; // Set the levels for each input to the values given
	});

	for (i = 0; i < pixels.data.length; i += 4) {
		red = pixels.data[i + 0];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha = pixels.data[i + 3];

		if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
			pixels.data[i + 3] = 0;
		}
	}

	return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
