


// 1. What is a variable in JavaScript?
// A variable is a container used to store data or values.


// 2. What are the three keywords used to create variables?
// var, let, const


// 3. Write the syntax to create a variable using var.
var variableName = value;


// 4. Write the syntax to create a variable using let.
//let variableName = value;


// 5. Write the syntax to create a variable using const.
//const variableName = value;


// 6. What is declaration?
// Declaration means creating a variable without assigning a value.

let age;


// 7. What is initialization?
// Initialization means assigning a value when creating a variable.

let marks = 90;


// 8. What is reassignment?
// Reassignment means changing the value of an existing variable.

let number = 100;
number = 200;


// 9. What is redeclaration?
// Redeclaration means declaring the same variable again.

var x = 10;
var x = 20;


// 10. Which keyword allows redeclaration?
// var


// 11. Which keyword allows reassignment?
// var and let


// 12. Which keyword requires initialization when declared?
// const


// 13. Identify the declaration and initialization.

let age1 = 25;

// Declaration: let age1
// Initialization: = 25


// 14. What is the value of a?

var a = 100;
console.log(a);

// Output: 100


// 15. Change the value of this variable to 200.

let number1 = 100;
number1 = 200;
console.log(number1);


// 16. What will be the output?

var a1 = 10;
console.log(a1);



// 17. What will be the output?

var a2 = 10;
a2 = 20;
console.log(a2);



// 18. What will be the output?

var a3 = 10;
var a3 = 30;
console.log(a3);



// 19. Write a var variable named name with value "John".

var name = "John";
console.log(name);


// 20. Create a var variable named price with value 500.

var price = 500;
console.log(price);


// 21. Reassign price from 500 to 1000.

var price1 = 500;
price1 = 1000;
console.log(price1);


// 22. What will be the output?

var x1 = 50;
x1 = 100;
console.log(x1);



// 23. Can a var variable be reassigned?
// Yes, var can be reassigned.


// 24. Can a var variable be redeclared?
// Yes, var can be redeclared.


// 25. Write an example of var redeclaration.

var value = 10;
var value = 20;
console.log(value);


// 26. Create a let variable named age with value 25.

let age2 = 25;
console.log(age2);


// 27. What will be the output?

let age3 = 20;
age3 = 30;
console.log(age3);



// 28. Can a let variable be reassigned?
// Yes, let can be reassigned.


// 29. Can a let variable be redeclared?
// No, let cannot be redeclared in the same scope.


// 30. Find the error.

// let name1 = "John";
// let name1 = "David";

// Error:
// Identifier 'name1' has already been declared.


// 31. Create a let variable called city and assign "Chennai".

let city = "Chennai";
console.log(city);


// 32. Change the value of city to "Salem".

city = "Salem";
console.log(city);


// 33. What will be the output?

let x2 = 10;
x2 = 50;
console.log(x2);


// 34. Write a let variable called salary with value 25000.

let salary = 25000;
console.log(salary);


// 35. Reassign salary to 30000.

salary = 30000;
console.log(salary);


// 36. Create a const variable called pi with value 3.14.

const pi = 3.14;
console.log(pi);


// 37. Can a const variable be reassigned?
// No, const cannot be reassigned.


// 38. Can a const variable be redeclared?
// No, const cannot be redeclared.


// 39. What is wrong with this code?

// const age4;
// age4 = 25;

// Error:
// const variable must be initialized when declared.


// Correct example:

const age4 = 25;
console.log(age4);


// 40. What happens here?

// const price2 = 500;
// price2 = 1000;

// Error:
// Assignment to constant variable.


// 41. Create a const variable called country with value "India".

const country = "India";
console.log(country);


// 42. What will be the output?

const x3 = 100;
console.log(x3);


// 43. Which keyword should you use if the value should not be reassigned?
// const


// 44. What is the difference between let and const?
// let can be reassigned.
// const cannot be reassigned.
// const must be initialized when declared.


// Example:

let marks = 50;
marks = 60;

const total = 100;
// total = 200;  // Error



// 45. What is the difference between var and const?
// var can be reassigned and redeclared.
// const cannot be reassigned or redeclared.
// const must be initialized when declared.



// 46. Write JavaScript code to print Hello World.

console.log("Hello World");


// 47. Write JavaScript code to print number 500.

console.log(500);


// 48. What is the purpose of console.warn()?
// console.warn() is used to display a warning message.

console.warn("This is a warning");


// 49. What is the purpose of console.error()?
// console.error() is used to display an error message.

console.error("This is an error");


// 50. What is the purpose of each?


// alert()
// Displays a popup message.

alert("Hello World");


// prompt()
// Takes input from the user.

prompt("Enter your name");


// confirm()
// Displays a confirmation box with OK and Cancel.

confirm("Are you sure?");


// document.writeln()
// Writes content directly to the webpage.

document.writeln("Hello World");


// console.log()
// Displays information in the browser console.

console.log("Hello World");