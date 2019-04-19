const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	.then(blob => blob.json()) // Convert blob to JSON
	.then(data => cities.push(...data)); // Spread the response into cities

function findMatches(word, cities) {
	return cities.filter(place => {
		const regex = new RegExp(word, 'gi'); // Make a new Regex expression which searches for 'word', with a global and insensitive flag.
		return place.city.match(regex) || place.state.match(regex); // Filter the cities to only ones which match with 'word' or filter the states to match with 'word'.
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const matchArray = findMatches(this.value, cities); // Run find matches with 'word' being this.value, and cities being cities.

	const html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi'); // Make a new Regex expression which searches for this.value, with a global and insensitive flag.
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // Replace the regex with a highlighted span.
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); // Replace the regex with a highlighted span.
		return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
	}).join(''); // Make it so each result is given an element on the display.
	suggestions.innerHTML = html; // Set the html.
}

const searchInput = document.querySelector('.search'); // Grab everything with the search class
const suggestions = document.querySelector('.suggestions'); // Grab everything with the suggestions class

searchInput.addEventListener('change', displayMatches); // When the search input is updated, display new matches.
searchInput.addEventListener('keyup', displayMatches); // When key up, display new matches.
