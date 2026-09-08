
// // 1

// var- It can be reused,reinitialize,redeclaration
// let- In this reinialization and reuse is possible but redeclarelation is not possible
// const- In this only one time declaration and iniatilization can be possible.



// // 2

// Yes we can redeclare var but can't redeclare let and const.



// //3

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);
// //There is a error because we reinitialize const z which is not possible.



// //4

// let a; // Declaring the variable

// a=10; // initializing the variable where we assinging the value to a variable



// //5

// let a;
// console.log(a); // undefined.



// // 6

// //Hoisting means accesing the variable first, and then declaring the variable is known as hoisting.
// console.log(a);
// var a = 10; 
// The output will be undefined becouse var a is hoisted but its assignment is not



// //7 

// Null means assigning the value null
// undefined means not assigning the value for variable



// // 8

// console.log(typeof null); //object
// console.log(typeof undefined); // undefined
// console.log(typeof []);// object
// console.log(typeof {}); // object 



// //9

// == -> its loosly equal check the only both side values and not data type
// ===  -> its strictly equal check both value and datatypes.



// //10
//++i -> Its a pre increement it increement its value by 1
//i++ -> Its a post increement it increement its value by 1



// //11

// let x = 10;
// let y = "5";
// console.log(x + y); // concatination 10 + 5= 105
// console.log(x - y); // 5
// console.log(x * y);// 50
// console.log(x / y);// 2



// //12

// AND -> &&  if any value false then o/p is false
// OR ->  ||  if any value is true means then o/p is true
// NOT -> ! opposite of the the value



// // 13

// console.log(5 > 3 && 10 > 5); 
// //true && true
// // true
// console.log(5 > 10 || 10 > 5);
// // false || true
//  // true
// console.log(!(5 > 3));
// // !true
// // false



// //14

// condition ? statment 1 : statment 2;
//if condtion is true means statment 1 will execute else statment 2 is execute.



// //15

// explicit : using inbuild function it directly convert into another datatype
// implicit : type conversion means JavaScript automatically converts one type to another.



// //16

// console.log(Number("123")); //123
// console.log(Number("hello"));// Nan
// console.log(Number(true));// 1
// console.log(Number(false));// 0
// console.log(Boolean(0));// false
// console.log(Boolean("hello"));// true


// //17

// NaN ->  Not a Number and occurs when a mathematical operation fails to produce a valid number
// the below example NaN becouse it triying to convert a string into a number
// console.log(Number("ASD")) 



// //18

// //if-else : is useful when checking multiple conditions
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// //switch : is useful when comparing one value against multiple specific cases
// let day = 2;
// switch(day) {
//     case 1:
//         console.log("Monday");break;
//     case 2:
//         console.log("Tuesday");break;
//     default:
//         console.log("Invalid");
// }



// //19

// let age = 20;
// if(age >= 18) {
//     console.log("Adult"); 
// } else {
//     console.log("Minor");
// }
// o/p : Adult



// //20

// nested if means one if contain another if condition
//  let age =24;
//  let check =true

//  if (age>=18){
//     if (check==true){
//         console.log("You are eligible")
//     }else{
//         console.log("check is failed")
//     }
//  }else{
//     console.log("Age is less than 18")
//  }



//21

// let a=10;
// (a%2==0) ? console.log("Even") : console.log("odd")



// //22
// //while : Checks the condition before executing
// let a = 5;
// while(a<2) {
//     console.log(a);
// }

// //do while : Executes the code at least once, then checks the condition
// let a = 5;
// do {
//     console.log(a);
// } while(a < 2);



// //23

// for(let i = 1; i <= 5; i++) {
//     console.log(i);  // 1 2 3 4 5
// }



// //24 
// for-of: Used to get values from an iterable such as an array
// let arr = [10,20,30];

// for(let a of arr) {
//     console.log(a);
// }

// for-in: Used to get keys/indexes
// let arr = [10,20,30];

// for(let a in arr) {
//     console.log(a);
// }



// //25

// let sum=0;
// for (let i=1;i<=100;i++){
//     sum=i+sum;
// }
// console.log(sum)



// //26

//slice -> its slice down specific part which we giving statring and ending index
// splice -> its can remove, add, or replace elements and it modifies the original array



// //27

// let arr = [1, 2, 3];
// arr.push(4); // 1 2 3 4
// arr.pop();// 1 2 3
// arr.unshift(0);// 0 1 2 3
// arr.shift(); // 1 2 3
// console.log(arr); // 1 2 3



// //28

// //function declaration: function declaration uses the function keyword with a function name

// function demo(a){
//     console.log(a)
// }
// demo(10);


// //function expression: A function expression stores a function inside a variable

// let demo=function(a){
//     console.log(a);
// }
// demo(10)



// //29

//Arrow function: An arrow function is a shorter syntax for writing functions.

// let demo = (a)=>{
//     console.log(a)
// }
// demo(10)



// //30

// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message); // Hello
