/* Get our elements */

const player = document.querySelector('.player'); // Get player element
const video = player.querySelector('.viewer'); // Get viewer
const progress = player.querySelector('.progress'); // Get progress
const progressBar = player.querySelector('.progress__filled'); // Get progress bar
const toggle = player.querySelector('.toggle'); // Get play/toggle button
const skipButtons = player.querySelectorAll('[data-skip]'); // Get skip buttons
const ranges = player.querySelectorAll('.player__slider'); // Get time slider

/* Build out functions */

function togglePlay() {
    if (video.paused) video.play(); // If the video is paused, play it.
    else video.pause(); // If the video is playing, pause it.
}

function updateButton() {
    var icon;

    if (this.paused == true) icon = '▶'; // If the video is paused, set the icon to a play button.
    else icon = '❚❚'; // If the video is playing, set the icon to a pause button.

    toggle.textContent = icon; // Update the icon on the page.s
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip) // Set the video's time to the dataset's value, or the dataset's value and the video's current time.
}

function handleRangeUpdate() {
    video[this.name] = this.value; // Get the name of the object, and find it in the video's UI. Then, set it to the object's value.
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100; // Calculate the percentage of the video complete by getting the current time, dividing it by the video's duration and multiplying it by 100, so that it is a percentage.

    progressBar.style.flexBasis = `${percent}%`; // Set the progress bar's flex basis style to the percentage.
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; // Calculate the scrub time by getting the percentage of the progress bar clicked, and multiplying it by the video's duration.

    video.currentTime = scrubTime;
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay); // Make it so if you click the video, it either resumes or pauses.
video.addEventListener('play', updateButton); // When the video is played, update the button.
video.addEventListener('pause', updateButton); // When the video is paused, update the button.
video.addEventListener('timeupdate', handleProgress); // When the video emits the time update event, update the progress bar.

toggle.addEventListener('click', togglePlay); // Make it so if you click the toggle button, it either resumes or pauses the video.

skipButtons.forEach(button => button.addEventListener('click', skip)); // For each button, make sure the skip function runs when it is clicked.

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); // For each range, make sure that the update function runs when it is changed.
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); // For each range, make sure that the update function runs when the mouse moves.

let mousedown = false;
progress.addEventListener('click', scrub); // When the progress bar is clicked, scrub to that time.
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // When the mouse moves on the progress bat, scrub to that time if the mouse is down.
progress.addEventListener('mousedown', () => mousedown = true); // When the mouse is down on the progress bar, set mousedown to true.
progress.addEventListener('mouseup', () => mousedown = false); // When the mouse isn't down on the progress bar, set mousedown to false.
