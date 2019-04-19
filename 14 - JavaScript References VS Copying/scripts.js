// Start with strings, numbers and booleans
let age = 100;
const age2 = age;
console.log(age, age2); // 100, 100

age = 200;
console.log(age, age2); // 100, 200

let name = 'Wes';
const name2 = name;
console.log(name, name2); // Wes Wes

name = 'Wesley';
console.log(name, name2); // Wesley Wes

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// And we want to make a copy of it.
const team = players;

console.log(players, team); // They are the same

// You might think we can just do something like this:
team[3] = 'Lux';

// However what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// One way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// Or use the new ES6 Spread
const team4 = [...players];

const team5 = [...players];

// Now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
	name: 'Wes Bos',
	age: 80
};

// And think we make a copy:
const captain = person;
captain.number = 99;

// How do we take a copy instead?
const cap2 = Object.assign({}, person, {
	number: 99,
	age: 12
});
console.log(cap2);

// We will hopefully soon see the object ...spread

// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
	name: 'Wes',
	age: 100,
	social: {
		twitter: '@wesbos',
		facebook: 'wesbos.developer'
	}
};

console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));
