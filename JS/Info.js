//Declare firstName, lastName, country, city, age, casado, year variable and assign value to it

let firstName = 'Angel';
let lastName = 'Rivera';
let country = 'Mexico';
let city = 'Playa del Carmen';
let age = 18;
let isMarried = true;
let year = 2024;

//d use the typeof operator to check different data types
console.log(typeof firstName); // string
console.log(typeof lastName);  // string
console.log(typeof country);    // string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number

// Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10); // false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false

// Boolean value is either true or false.
console.log(4 > 3 && 10 > 5) //true - true --> true
console.log(4 > 3 || 10 > 5) // true
console.log(4 < 9) //true

console.log(4 > 3 && 10 < 5); // true - false --> false
console.log(4 < 3 || 10 < 5) // false
console.log(4 > 9) //true

// Comparison expressions
console.log(4 > 3);       // true
console.log(4 >= 3);      // true
console.log(4 < 3);       // false
console.log(4 <= 3);      // false
console.log(4 == 4);      // true
console.log(4 === 4);     // true
console.log(4 != 4);      // false
console.log(4 !== 4);     // false
console.log(4 != '4');    // false
console.log(4 == '4');    // true
console.log(4 === '4');   // false

// Date object activities
const now = new Date();

console.log(' What is the year today?')
console.log("Year today:", now.getFullYear());
console.log(' What is the month today as a number?')
console.log("Month today as number:", now.getMonth() + 1);
console.log(' What is the date today?')
console.log("Date today:", now.getDate());
console.log(' What day is today as a number?')
console.log("Day today as number:", now.getDay());
console.log(' What are the hours now?')
console.log("Hours now:", now.getHours());
console.log(' What are the minutes now?')
console.log("Minutes now:", now.getMinutes());
console.log('Find out the numbers of seconds elapsed from January 1, 1970, to now')
console.log("Seconds elapsed from Jan 1, 1970:", now.getTime() / 1000);

// Calculate area of a triangle
let base = prompt("Enter base of the triangle:");
let height = prompt("Enter height of the triangle:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

// Calculate perimeter of a triangle
let sideA = prompt("Enter side a of the triangle:");
let sideB = prompt("Enter side b of the triangle:");
let sideC = prompt("Enter side c of the triangle:");
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log(`The perimeter of the triangle is ${perimeter}`);