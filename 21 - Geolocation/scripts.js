/* WARNING: THIS CODE HAS NOT BEEN TESTED AS IT HAS BEEN MADE WITH WINDOWS!
               MAY NOT WORK AS EXPECTED! */

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => { // Watch the user's position
	speed.textContent = data.coords.speed; // Update the speed.
	arrow.style.transform = `rotate(${data.coords.heading}deg)`; // Update the compass.
}, err => {
	console.log(err);
	alert('You had to give me access to your location. 😢'); // eslint-disable-line no-alert
});
