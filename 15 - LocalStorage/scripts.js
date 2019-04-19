const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // Either get the items from the localStorage, or make an empty array.

function addItem(e) {
	e.preventDefault(); // Stop the page from refreshing.

	const text = (this.querySelector('[name=item]')).value; // Get the text from the item being added.
	const item = {
		text,
		done: false
	};

	items.push(item); // Add the item to the array.
	localStorage.setItem('items', JSON.stringify(items)); // Add the items to the localStorage.
	populateList(items, itemsList); // Add the item to the list, so it is viewable.
	this.reset(); // Clear the form textbox.
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => {
		return `
                        <li>
                            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
                            <label for="item${i}">${plate.text}</label>
                        </li>
                    `;
	}).join('');
}

function toggleDone(e) {
	if (!e.target.matches('input')) {
		return;
	} // Skip this unless it is an input.

	const el = e.target;
	const i = el.dataset.index;
	items[i].done = !items[i].done; // Invert done

	localStorage.setItem('items', JSON.stringify(items)); // Update the items in the localStorage.
	populateList(items, itemsList); // Repopulate the list.
}

addItems.addEventListener('submit', addItem); // Listen for the submit event and when it is triggered, run the addItem function.
itemsList.addEventListener('click', toggleDone); // When there is a click in the items list, toggleDone.

populateList(items, itemsList); // Populate the list on page load.
