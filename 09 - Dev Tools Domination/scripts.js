const dogs = [{name: 'Snickers', age: 2}, {name: 'hugo', age: 8}];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular

console.log('hello');

// Interpolated

console.log('Hello I am a %s string!', '🤔');

// Styled

console.log('%c I am some great text', 'font-size: 50px; color: green; background: black;');

// Warning!

console.warn('OH NOO!');

// Error :|

console.error('AHHHHHHHHHHHHHHHHH!');

// Info

console.info('Crocodiles eat 3-4 people a year!');

// Testing

const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Clearing

console.clear();

// Viewing DOM Elements

console.dir(p);

// Grouping together

dogs.forEach(dog => {
	console.groupCollapsed(`${dog.name}`);
	console.info(`${dog.name} is ${dog.age} years old.`);
	console.info(`${dog.name} is ${dog.age * 7} years old.`);
	console.groupEnd(`${dog.name}`);
});

// Counting

console.count('Wes');
console.count('Jacob');
console.count('Wes');
console.count('Jacob');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Jacob');
console.count('Jacob');
console.count('Wes');
console.count('Steve');

// Timing

console.time('Fetching data...');
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('Fetching data...');
		console.log(data);
	});

// Tables

console.table(dogs);
