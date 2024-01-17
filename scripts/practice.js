// Practice JavaScript with simple exercise

"Jean"

console.log(typeof "Jean");

console.log("Jean",charAt());

console.log(Math.floor(Math.random() * 4));

console.log("Jean",charAt());


//-------------------------

let result=true;
let city = 'Dublin';
let firstResponse;
let secondResponse;

if(result) {
	firstResponse = 'result is true';
}

if(city) {
	secondResponse = 'Thank you for choosing a city';
} else {
	secondResponse = 'You need to fill in the name of a City';
}


console.log(firstResponse);
console.log(secondResponse);


let fruits = ['apple', 'orange', 'banana', 'pear', 'plum'];

// Print all fruits
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
    
// Reverse the list
fruits.reverse();
console.log(fruits);

// Sort the list alphabetically:
fruits.sort();
console.log(fruits); 



let flowers = ['daisy', 'bluebell', 'buttercup', 'rose', 'tulip', 'daffodil', 'orchid', 'geranium', 'heather', 'hydrangea']

let flower = (flowers[6]);


// Create the object
let person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 32,
};

// Print its properties using dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// Or using square bracket notation
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);

//object properties value
let details = {
    subject: "JavaScript",
    students: ['John', 'Paul', 'Emily', 'Lisa'],
    teacher: "Chris",
    venue:  "online",
    contact: "chris@gmail.com",
};

console.log(details.teacher);
console.log(details.contact);

//set 


// Create a set
let directions = new Set(['north', 'south', 'east', 'west']);

// Display the set
console.log(directions);

// Add an item to the set:
directions.add('northwest');

// Display it again
console.log(directions);


function sayHello () {
	console.log("Hello");
}
sayHello();

sayHello => {
	console.log("Hello shorthand");
}
sayHello();

//-------------------------Loop For----------------------------------------------------------------

//subtract

for (let v = 50; v >= 20; v-=2) {
console.log(v);
}

//multiply

for (let v = 1; v <= 50; v*=3) {
console.log(v);
}

// divide
for (let v = 500; v >= 5; v/=3) {
console.log(v);
}

//add 1
for (let v = 5; v <=10 ; v++) {
console.log(v);
}


for (let rn = 0; rn <= 40; rn = Math.floor(Math.random() * 100)) {
  console.log(rn);
}

// Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).

/*Math.random() * 100 scales this to a range between 0 (inclusive) and 100 (exclusive).

Math.floor(Math.random() * 100) then converts this to a random integer between 0 and 99 using Math.floor().*/


/* Math.abs(x): Returns the absolute value of a number x.
Math.abs(-5); // Output: 5
Math.ceil(x): Returns the smallest integer greater than or equal to a number x.
Math.ceil(4.3); // Output: 5
Math.floor(x): Returns the largest integer less than or equal to a number x.
Math.floor(4.9); // Output: 4
Math.round(x): Rounds a number to the nearest integer.
Math.round(4.3); // Output: 4
Math.round(4.6); // Output: 5
Math.max(x1, x2, ...): Returns the largest of the supplied numbers.
Math.max(2, 5, 1, 8); // Output: 8
Math.min(x1, x2, ...): Returns the smallest of the supplied numbers.
Math.min(2, 5, 1, 8); // Output: 1
Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
Math.random(); // Output: A random decimal between 0 and 1
Math.sqrt(x): Returns the square root of a number x.
Math.sqrt(16); // Output: 4
Math.pow(x, y): Returns the result of raising x to the power of y.
Math.pow(2, 3); // Output: 8
Math.PI: A property representing the mathematical constant π (pi).
Math.PI; // Output: 3.141592653589793
Math.E: A property representing the mathematical constant e.
Math.E; // Output: 2.718281828459045 */
