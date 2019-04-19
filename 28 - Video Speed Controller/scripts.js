const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
	const y = e.pageY - this.offsetTop;
	const percent = y / this.offsetHeight;
	const min = 0.5;
	const max = 5;
	const height = `${Math.round(percent * 100)}%`;
	const playbackRate = (percent * (max - min)) + min;

	bar.style.height = height; // Fill in the bar.
	bar.textContent = `${playbackRate.toFixed(2)}x`; // Change the playback rate.
	video.playbackRate = playbackRate; // Update the video's speed.
}

speed.addEventListener('mousemove', handleMove);
