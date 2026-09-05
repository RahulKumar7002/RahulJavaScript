//task-1
var name1="Rahul"
let age=22
const city="Hassan"
let college="Navkis"
console.log(name1)
console.log(age)
console.log(city)
console.log(college)
name1="ramya"
age=23
console.log(name1)
console.log(age)
//const city="hyd" //error
var name="Suraj"
console.log(name1)
//let age=24 error for redeclare
//const college="xyz" error:college has already declared

//task-2

console.log("Hello rahul")
alert("Hello rahul");
let confirmation=confirm("Do you want to submit")
console.log(confirmation)
let username=prompt("what is your name")
console.log(username)
document.writeln("hello meghana");


//Task-3
let name1=prompt("Enter your name:");
let age1=prompt("Enter your age:");
let city1=prompt("Enter your city:");
let qualification=prompt("Enter your qualification:");
console.log("your name is:",name1)
console.log("your age is:",age1)
console.log("your city is:",city1)
console.log("your qualificaation is:",qualification)

//Task-4
let language = "JavaScript";
let number = 100;
let decimal = 99.5;
let trueValue = true;
let falseValue = false;
let undefinedValue = undefined;
let nullValue = null;

console.log(language, typeof language);
console.log(number, typeof number);
console.log(decimal, typeof decimal);
console.log(trueValue, typeof trueValue);
console.log(falseValue, typeof falseValue);
console.log(undefinedValue, typeof undefinedValue);
console.log(nullValue, typeof nullValue);


// Task -5 


let students = ["ram", "Priya", "nsni", "Divya", "Rahul"];

console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);


// Task 6 
// ==================================================

let employee = {
    name: "Rahul",
    age: 25,
    role: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["BCA", "MCA"]
};

console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working status:", employee.isWorking);



// Task 7 

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);



// Task 8 

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log("Total price:", totalPrice);


// Task 9 


let a1 = 10;
let b1 = a1++;

console.log(a1);//11
console.log(b1);//10



let a2 = 10;
let b2 = ++a2;

console.log(a2);//11
console.log(b2);//11


let a3 = 10;
let b3 = a3--;

console.log(a3);//9
console.log(b3);//10


let a4 = 10;
let b4 = --a4;

console.log(a4);//9
console.log(b4);//9





// Task 10 

let num = 10;

num += 5;
console.log("After += 5:", num);

num -= 3;
console.log("After -= 3:", num);

num *= 2;
console.log("After *= 2:", num);

num /= 4;
console.log("After /= 4:", num);

num %= 3;
console.log("After %= 3:", num);

num **= 2;
console.log("After **= 2:", num);


// Task 11 


console.log(10 > 5);//T
console.log(10 < 5);//F
console.log(10 >= 10);//T
console.log(10 <= 9);//F

console.log(5 == "5");//T
console.log(5 === "5");//F

console.log(10 != "10");//F
console.log(10 !== "10");//T




// Task 12 


console.log(true && true);//T
console.log(true && false);//F
console.log(false && true);//F
console.log(false && false);//F





// Task 13 


console.log(true || true);//T
console.log(true || false);//T
console.log(false || true);//T//F
console.log(false || false);





// Task 14 


console.log(!true);//F
console.log(!false);//T
console.log(!(5 > 10));//T
console.log(!(10 > 5));//F




// Task 15 


console.log(5 == "5" && !(5 === 5) || 6 > 7);
//FALSE

console.log(10 > 5 && 8 < 12 || 4 === "4");
//TRUE

console.log(7 === 7 && 10 != "10" || 5 >= 5);
//TRUE

console.log(15 < 10 || 20 > 15 && 5 == "5");
//TRUE

//TASK-16
let votingage=20;
votingage >=18 ? console.log("Eligible to vote") : console.log("Not Eligible")

//Task-17
let password=true;
password ? console.log("Login Successful") : console.log("wrong Password")

//task-18
let name3="meghana"
let age3="22"
let city3="Nellore"
console.log("My name is "+ name3 +". I am "+ age3 +" years old. I live in "+ city3 +".")
console.log(`My name is ${name3} . I am ${age3} years old. I live in ${city3} .`)

//task-19
let value1 = String(100);
let value2 = String(true);
let value3 = String(undefined);
let value4 = String(null);
let value5 = String([1, 2]);

console.log(value1, typeof value1);
console.log(value2, typeof value2);
console.log(value3, typeof value3);
console.log(value4, typeof value4);
console.log(value5, typeof value5);

// Task 20 — Number Conversion


console.log(Number());//0
console.log(Number(""));//0
console.log(Number("123"));//123
console.log(Number("a1"));//NAN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(undefined));//NAN
console.log(Number(null));//0

// Task 21 

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

//Task-22
let age4=Number(prompt("Enter your age:"))
if(age4>=18){
    console.log("You can vote")
}
else{
    console.log("You can't vote")
}
    
//Task-23
let usernumber=Number(prompt("Enter a number:"))
if(usernumber>0)
{
    console.log("Number is Positive")
   
}
else if(usernumber<0)
{
    console.log("Number is Negative")
}
else 
{
    console.log("Number is zero")
    
}

//Task-24

let  marks=Number(prompt("enter your marks:"))
if (marks>=90 && marks<=100){
    console.log("A Grade")
}
else if (marks>=80 && marks<=89){
    console.log("B Grade")
}
else if (marks>=70 && marks<=79){
    console.log("C Grade")
}
else if (marks>=60 && marks<=69){
    console.log("D Grade")
}
else if(marks<60) {
    console.log("Fail")
}
else{
    console.log("Invalid Marks Enter correct marks")
}

//Task -25
let person_age=Number(prompt("enter your age:"))
let person_height=Number(prompt("enter your height:"))
let person_weight=Number(prompt("enter your weight:"))
if(person_age>=18)
{
    if(person_height>=160)
    {
       if(person_weight>=60)
       {
        console.log("Congratulations ! You are Selected")
       }
       else
       {
        console.log("your weight is not eligible")
       }
    }
    else
    {
      console.log("Your age is not Eligible")
    }


}
else{
    console.log("Your age is not Eligible")
    

}

//Task -26
let traffilight=prompt("enter a light color:")
switch(traffilight){
    case "red":
        console.log("Stop")
        break

    case "yellow":
        console.log("Ready")
        break

   case "green":
        console.log("Go")
        break;
 
   default:
    console.log("Invalid color")
}

//Task-27
let day=Number(prompt("enter a number between 1 to 7:"))
switch(day)
{
       case 1:
         console.log("Monday")
         break;
        case 2:
          console.log("Tuesday")
          break;
        case 3:
          console.log("Wednesday")
          break;
        case 4:
          console.log("Thursday")
          break;
        case 5:
           console.log("Friday")
           break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default: 
           console.log("Invalid Number")
}


let studentName = prompt("Enter student name:");
let studentAge = Number(prompt("Enter student age:"));
let studentCity = prompt("Enter student city:");



let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));


let total = tamil + english + maths;
let average = total / 3;

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}


let voting;

if (studentAge >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}
console.log(`
Name: ${studentName}
Age: ${studentAge}
City: ${studentCity}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);



