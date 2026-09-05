//Task-1

for(let i=1;i<=10;i++)
{
    console.log(i)
}

//task-2
for(let j=10;j>=1;j--)
{
    console.log(j)
}

//Task-3
for(let k=1;k<=20;k++)
{
    if(k%2==0){
        console.log(k)
    }
    
}
//Task-4
for(let k=1;k<=20;k++)
{
    if(k%2!==0){
        console.log(k)
    }
    
}
    
//Task-5
let num=Number(prompt("Enter a number:"))
for(let a=1;a<=10;a++)
{
    console.log(`${num} X ${a} = ${num*a}`)
}
    
//Task-6
let count=10
while(count!=0)
{
    console.log(count)
    count--
}
//Task-7

let sum=0
let index=1
while(index<=10)
{
    sum+=index
    index++

}
console.log("Total sum:",sum)

//Task 8
let index1=1
do{
    console.log(index1)
    index1++
}while(index1<=5)
    

//Task-9
   let index2 = 10;

do {
    console.log(index2);
    index2++;
} while (index2 <= 5);

// Output: 10
// The do while loop executes the code at least once
// before checking the condition.
// Here, a is 10, so 10 is printed first.
// Then a becomes 11.
// The condition 11 <= 5 is false, so the loop stops.

//Task-10

let name1="javascript"
for (let char of name1){
    console.log(char)
}

//Task-11
let fruits = ["apple", "orange", "banana", "mango", "grapes"]
for (let char1 of fruits){
    console.log(char1)
}

//Task 12
let students = ["Arun", "Priya", "Ram", "Anitha", "Rani"];

for (let student of students) {
    console.log(student)
}

//Task 13
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
}
for (let data in employee){
    console.log(data ,employee[data] )

}

//Task 14
let products = {
    productName: "Laptop",
    price: 60000,
    brand: "Lenovo",
    category: "Electronics",
    stock: 10
};

for (let key in products) {
    console.log(key, products[key]);
}

//TAsk 15

function welcome(){
    console.log("Welcome to JavaScript")
}
welcome()
welcome()
welcome()

//Task 16
function greet(name) {
    console.log(`Hello ${name}`)
}
greet("Naveen");
greet("Arun");
greet("Priya");

//Task 17
function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("meghana", 23, "IT");
student("Priya", 24, "HR");
student("charan", 26, "Finance");

//Task 18
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

//Task 19
function salary(amount) {
    return amount;
}

let employeeSalary = salary(80000);
console.log(employeeSalary);

//Task 20
function bonus(salary, bonusAmount)
{
    let Total=salary+bonusAmount
    console.log("Salary:",salary)
    console.log("Bonus:",bonusAmount)
    console.log("Total:",Total)
}
bonus(50000,5000)

//Task 21
function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");

//Task 22
function multiply(number) {
    return number * number;
}

console.log(multiply(2))
console.log(multiply(3))
console.log(multiply(4))
console.log(multiply(5))
console.log(multiply(6))

//Task 23
let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


// Task 24 
let product= (a, b) => {
    return a * b;
}

console.log(product(5, 10));

//Task 25
function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

    // b and c cannot be accessed here
    // because let and const are block scope.
}

test();

// var can be accessed outside the if block because it global scope.
// let and const cannot be accessed outside the if block.

//Task 26
console.log(hoistedA);

var hoistedA = 10;

// Output: undefined
// var is hoisted and initialized with undefined.


//Task 27 
// console.log(hoistedB);

// let hoistedB = 20;

// Output: ReferenceError
// let is hoisted but cannot be accessed before declaration.

// Task 28 
// console.log(hoistedC);

// const hoistedC = 30;

// Output: ReferenceError
// const is hoisted but cannot be accessed before declaration.


// Difference:
// var    -> undefined when accessed before declaration
// let    -> ReferenceError
// const  -> ReferenceError

//Task 29
(function messege(){
    console.log("Welcome to JavaScript")
})();

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

//Task 30
function welcomeMsg() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMsg);

// welcomeMessage is the callback function.
// execute is the higher-order function.

//Task 31

//model-1
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let user = cashback();

console.log(user.next().value);
console.log(user.next().value);
console.log(user.next().value);
console.log(user.next().value);
//model-2
function* cashback1() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGenerator1 = cashback1()
for (let value of cashbackGenerator1) {
    console.log(value);
}

//Task 32(Final Mini project)

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
]
for (let employee of employees) {
    console.log("Employee:", employee);
}

for (let employee of employees) {
        for (let key in employee) {
           console.log(key + ":", employee[key]);
    }

}


function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
    
    
}
for(employee of employees)
{
    let sal=displayEmployee(employee.name,employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
   
   
}

function getsalary(employee)
{
    return employee.salary
}
for(let employee of employees)
{
    let empsalary=getsalary(employee)
    console.log(employee.name + "Salary:",empsalary)
}
for(employee of employees)
{
    if(employee.salary>=40000)
    {
        console.log(employee.name + " has salary >= 40000")
    }
}
let calculateannualsalary=(salary)=>{
    return 12*salary

}
console.log(calculateannualsalary(50000))


function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits = employeeBenefits();
for (let benefit of benefits) {
    console.log("Employee Benefit:", benefit);
}