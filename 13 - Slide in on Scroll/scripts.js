function debounce(func, wait = 20, immediate = true, ...restParams) {
	let timeout;
	return function () {
		const context = this;
		const args = restParams;
		const later = function () {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};

		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
			func.apply(context, args);
		}
	};
}

const sliderImages = document.querySelectorAll('.slide-in'); // Grab all of the images we need to slide in.

function checkSlide(e) {
	sliderImages.forEach(sliderImage => { // For each slider image...
		const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2); // Calculate when to slide in by getting the amount of pixels scrolled in at the bottom the user is, minusing the height of the image and dividing it by 2.
		const imageBottom = sliderImage.offsetTop + sliderImage.height; // Calculate where the bottom of the image is by getting the top offset and adding the slider image's height.
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;

		if (isHalfShown && isNotScrolledPast) { // Check if the image is half shown and we haven't scrolled past it
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide)); // When the user scrolls the window, run the checkSlide function, but not if they are in 20ms of eachother.
