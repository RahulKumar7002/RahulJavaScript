// Task 1 — var, let, const
// Create three variables:
// var → student name
// let → student age
// const → college name
// Requirements:
// Print all three values.
// Change the var value.
// Change the let value.
// Try changing the const value and observe the error.
// Try redeclaring the var variable.
// Try redeclaring the let variable and observe the error.
let studentName = "John Doe"; 
var studentAge = 20;
const collegeName = "Navkis University";
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);
studentName = "Jane Smith";
studentAge = 21;
console.log("Updated Student Name:", studentName);
console.log("Updated Student Age:", studentAge);
// collegeName = "New College"; 
// console.log("Updated College Name:", collegeName);
// let studentName ="Rahul";
// console.log("Redeclared Student Name:", studentName);
// var studentAge = 22;
// console.log("Redeclared Student Age:", studentAge);


//  Task 2 — User Information
// Get the following information from the user using prompt():
// Name
// Age
// City
// Print the result in the console.
// Expected:
// Name: Naveen
// Age: 22
// City: Trichy

// let userName = prompt("Enter your name:");
// let userAge = prompt("Enter your age:");
// let userCity = prompt("Enter your city:");
// console.log("Name:", userName);
// console.log("Age:", userAge);
// console.log("City:", userCity); 


// Task 3 — Welcome Message
// Get the user's name using prompt().
// Display:
// Welcome Naveen!
// Use alert().
// let userNameForWelcome = prompt("Enter your name for welcome message:");
// alert("Welcome " + userNameForWelcome + "!");


// Task 4 — Age Calculator
// Ask the user for their birth year.
// Calculate their approximate age using:
// Current Year - Birth Year
// Print the age in the console.
// Example:
// Birth Year: 2000
// Age: 26
// let birthYear = prompt("Enter your birth year:");
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;
// console.log("Birth Year:", birthYear);
// console.log("Age:", age);


//  Data Type Tasks
// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.
let stringVar = "Hello";
let intVar = 100;
let floatVar = 25.5;   
let boolTrueVar = true;
let boolFalseVar = false;
let undefinedVar;
let nullVar = null; 
console.log("Data Type of stringVar:", typeof stringVar);
console.log("Data Type of intVar:", typeof intVar);
console.log("Data Type of floatVar:", typeof floatVar);     
console.log("Data Type of boolTrueVar:", typeof boolTrueVar);
console.log("Data Type of boolFalseVar:", typeof boolFalseVar);
console.log("Data Type of undefinedVar:", typeof undefinedVar);
console.log("Data Type of nullVar:", typeof nullVar);


// Task 6 — Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent
// Print:
// Complete object
// Name
// Age
// Qualification
// isStudent

let studentData = {
    name: "Alice Johnson",
    age: 22, 
    city: "New York",
    qualification: "Bachelor's Degree",
    isStudent: true }
    console.log("Complete Student Data:", studentData);
console.log("Name:", studentData.name);
console.log("Age:", studentData.age);
console.log("Qualification:", studentData.qualification);
console.log("Is Student:", studentData.isStudent);  

//  FruitArray
// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya
// Print:
// First fruit
// Second fruit
// Last fruit
// Total number of fruits
// Hint:
// array.length
// array.length - 1
let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Number of Fruits:", fruits.length);



// Arithmetic Operator Tasks
// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// Print every result separately.

let a = 20;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

//  Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497
let shirtPrice = 999;
let pantPrice = 1499;
let shoesPrice = 1999;
let totalPrice = shirtPrice + pantPrice + shoesPrice;
console.log("Total Price:", totalPrice);


// Simple Marks Calculation
// Create marks for 3 subjects:
// Tamil = 80
// English = 75
// Maths = 90
// Calculate:
// Total marks
// Average marks
let tamilMarks = 80;
let englishMarks = 75;
let mathsMarks = 90;        
let totalMarks = tamilMarks + englishMarks + mathsMarks;
let averageMarks = totalMarks / 3;
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);    


// Increment & Decrement Tasks
// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);
// Write your expected output first, then run it.

let aa= 10;
let bb= a++;    
console.log("Value of a after post increment:", aa); // Expected: 11
console.log("Value of b after post increment:", bb); // Expected: 10 


//  Pre Increment
// Predict the output:
// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);

let aaa = 10;
let bbb = ++aaa;    
console.log("Value of a after pre increment:", aaa);    


//  Post Decrement
// Predict:
// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);
let aaaa = 20;
let bbbb = aaaa--;    
console.log("Value of a after post decrement:", aaaa);  


//  Pre Decrement
// Predict:
let ab = 20;

let ba = --a;

console.log(ab);
console.log(ba);

//  Challenge Tasks
// Task 15 — Find the Final Values
// Without running the code, find the output:
let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log("Final value of a:", a); // Expected: 7
console.log("Final value of b:", b); // Expected: 5
console.log("Final value of c:", c); // Expected: 7      
console.log("Final value of d:", d); // Expected: 5



//  Assignment Operators
// Given:
// let num = 10;
// Perform each operation separately:
// +=
// -=
// *=
// /=
// %=
// **=
// Example:
// num += 5;
// console.log(num);

const num = 10;
let num1 = num;
num1 += 5;
console.log("After += 5:", num1);   
const num2 = num;
let num3 = num2;
num3 -= 3;  
console.log("After -= 3:", num3);
const num4 = num;
let num5 = num4;
num5 *= 2;  
console.log("After *= 2:", num5);   
 const num6 = num;
let num7 = num6;
num7 /= 2;      
console.log("After /= 2:", num7);
const num8 = num;
let num9 = num8;        
num9 %= 3;
console.log("After %= 3:", num9);
const num10 = num;                              
let num11 = num10;
num11 **= 3;
console.log("After **= 3:", num11);
const num12 = num;
let num13 = num12;
num13 **= 2;
console.log("After **= 2:", num13);



//  Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// Student name
// Student age
// City
// First subject
// Last subject
// Total subjects
// Complete object
let studentProfile = {
    name: "Michael Scott",
    age: 35,
    city: "Scranton",
    college: "Dunder Mifflin University",
    subjects: ["Accounting", "Management", "Sales", "Marketing", "Business Ethics"],
    isStudent: true
};
console.log("Student Name:", studentProfile.name);
console.log("Student Age:", studentProfile.age);        
console.log("City:", studentProfile.city);
console.log("First Subject:", studentProfile.subjects[0]);
console.log("Last Subject:", studentProfile.subjects[studentProfile.subjects.length - 1]);
console.log("Total Subjects:", studentProfile.subjects.length);
console.log("Complete Student Profile:", studentProfile);
console.log("Is Student:", studentProfile.isStudent);
console.log("College:", studentProfile.college);
console.log("Subjects:", studentProfile.subjects);


//  Final Challenge — User + Calculator
// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().
// Restriction: Use only the concepts you have taught so far:
// var, let, const, prompt(), console.log(), data types, arrays, objects, arithmetic operators, increment/decrement, and assignment operators.


let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
let power = num1 ** num2;
let results = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
    modulus: modulus,   
    power: power
};
console.log("Results of Operations:");
console.log("Addition:", results.addition);
console.log("Subtraction:", results.subtraction);
console.log("Multiplication:", results.multiplication);
console.log("Division:", results.division);
console.log("Modulus:", results.modulus);
console.log("Power:", results.power);
console.log("Complete Results Object:", results);
console.log("Data Type of Results Object:", typeof results);
console.log("Data Type of Addition Result:", typeof results.addition);
console.log("Data Type of Subtraction Result:", typeof results.subtraction);
console.log("Data Type of Multiplication Result:", typeof results.multiplication);
console.log("Data Type of Division Result:", typeof results.division);
console.log("Data Type of Modulus Result:", typeof results.modulus);
console.log("Data Type of Power Result:", typeof results.power);
console.log("Data Type of num1:", typeof num1);
console.log("Data Type of num2:", typeof num2);
console.log("Data Type of results object:", typeof results);
console.log("Data Type of results.addition:", typeof results.addition);
console.log("Data Type of results.subtraction:", typeof results.subtraction);
console.log("Data Type of results.multiplication:", typeof results.multiplication);
console.log("Data Type of results.division:", typeof results.division);
console.log("Data Type of results.modulus:", typeof results.modulus);
console.log("Data Type of results.power:", typeof results.power);
console.log("Data Type of results object:", typeof results);
console.log("Data Type of results.addition:", typeof results.addition);
console.log("Data Type of results.subtraction:", typeof results.subtraction);
console.log("Data Type of results.multiplication:", typeof results.multiplication);
console.log("Data Type of results.division:", typeof results.division);
console.log("Data Type of results.modulus:", typeof results.modulus);
console.log("Data Type of results.power:", typeof results.power);   






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































