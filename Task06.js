// // 1
function studentResult(name,department,sub1,sub2,sub3,sub4,sub5){
    let total = sub1+sub2+sub3+sub4+sub5;
    let average = total/5;
    let result;
    let grade;

    if (average >= 50){
        result = "Pass";
    } else{
        result = "Fail";
    }

    if (average >= 90){
        grade = "A";
    } else if (average >= 75){
        grade = "B";
    } else if (average >= 60){
        grade = "C";
    } else if (average >= 50){
        grade = "D";
    } else{
        grade = "Fail";
    }
    console.log("----------Student Results-----------")
    console.log("Student name: ",name);
    console.log("Department: ",department);
    console.log("Subject1: ",sub1)
    console.log("Subject2: ",sub2)
    console.log("Subject3: ",sub3)
    console.log("Subject4: ",sub4)
    console.log("Subject5: ",sub5)
    console.log("Total marks: "+total);
    console.log("Average: "+average);
    console.log("Result: "+result);
    console.log("Grade: "+grade);
}
studentResult("Suraj","Computer Science",80,90,95,88,92);



// // 2
let employee={
    name:"Suraj R",
    role:"Developer",
    salary:38000,
    experience:0
};

function calculateSalary(employee){
    let basicSalary = employee.salary;
    let bonus = 0;
    if (employee.experience >= 5){
        bonus = basicSalary * 15/100;
    } else if(employee.experience >= 2){
        bonus = basicSalary * 10/100;
    }

    let finalSalary = basicSalary+bonus;
    onsole.log("----Employee Salary Details----");
    console.log("Name: ",employee.name);
    console.log("Role: ",employee.role);
    console.log("Basic salary: ",basicSalary);
    console.log("Bonus: ",bonus);
    console.log("Final salary: ",finalSalary);
}
calculateSalary(employee);



// // 3 
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let above2000=products.filter(product => product.price > 2000);
let electronics=products.filter(product => product.category === "electronics");
let below1000=products.find(product => product.price < 1000);
let totalPrice=products.reduce((total, product) => total + product.price, 0);
let moreThan50000=products.some(product => product.price > 50000);
let everyAbove500=products.every(product => product.price >500);

console.log("Products above 2000:", above2000);
console.log("Electronics:", electronics);
console.log("First product below 1000:", below1000);
console.log("Total price:", totalPrice);
console.log("Any product above 50000:", moreThan50000);
console.log("Every product above 500:", everyAbove500);



// // 4
let employees1=[
    {
        id:101,
        name:"Suraj R",
        role:"Python fullstack developer",
        salary:40000
    },
    {
        id:102,
        name:"Sujith R",
        role:"Frontend Developer",
        salary:55000
    },
    {
        id:103,
        name:"Sudeep r",
        role:"Backend Developer",
        salary:65000
    },
    {
        id:104,
        name:"Jayanthi",
        role:"Manual Tester",
        salary:60000
    },
    {
        id:105,
        name:"Ramesh",
        role:"Software Engineer",
        salary:65000
    },
    {
        id:106,
        name:"Priyanka",
        role:"Data Analyst",
        salary:70000
    }
];
let employeeNames=employees1.map(employee => employee.name);
console.log("Employee Names:", employeeNames);

let highSalaryEmployees1=employees1.filter(employee => employee.salary > 40000);
console.log("Employees earning above 40000:", highSalaryEmployees1);

let employee103=employees1.find(employee => employee.id === 103);
console.log("Employee with ID 103:", employee103);

let totalsalary=employees1.reduce((total, employee) => {
    return total + employee.salary;
}, 0);
console.log("Total Salary:", totalsalary);

let highestPaid=employees1.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee: highest;
});
console.log("Highest Paid Employee:", highestPaid);

let sortedEmployees=[...employees1].sort((a,b) => b.salary-a.salary);
console.log("Employees sorted by salary:");
console.log(sortedEmployees);

let namesOnly=employees1.map(employee => employee.name);
console.log("Names Only:", namesOnly);



// // 5
let cart = [
    { name:"Laptop", price:50000, quantity:1 },
    { name:"Mouse", price:1000, quantity:2 },
    { name:"Keyboard", price:2000, quantity:1 }
];

function calculateCart(cart) {
    let total = cart.reduce(function(sum, item) {
        let itemTotal = item.price * item.quantity;
        console.log(item.name + " Item Total: ₹" + itemTotal);
        return sum + itemTotal;
    }, 0);

    let discount = 0;
    if (total > 50000) {
        discount = total * 10 / 100;
    }

    let finalAmount = total - discount;
    console.log("Total Cart Value: " + total);
    console.log("Discount: " + discount);
    console.log("Final Payable Amount: " + finalAmount);
}
calculateCart(cart);



// // 6
let students = [
    { name:"Arun", age:21, mark:85 },
    { name:"Priya", age:22, mark:92 },
    { name:"Karthi", age:20, mark:67 },
    { name:"Dinesh", age:23, mark:45 }
];

let studentNames=students.map(student => student.name);
console.log("Student Names:", studentNames);

let above80=students.filter(student => student.mark > 80);
console.log("Students above 80:", above80);

let priya=students.find(student => student.name === "Priya");
console.log("Student names Priya:", priya);

let totalMarks=students.reduce((total, student) => {
    return total + student.mark;
},0);

let averageMark=totalMarks/students.length;
console.log("Average Mark:", averageMark);

let anyoneFailed=students.some(student => student.mark < 50);
console.log("Anyone Failed:", anyoneFailed);

let everyoneAbove40=students.every(student => student.mark > 40);
console.log("Everyone scored above 40:", everyoneAbove40);

let sortedStudents=[...students].sort((a,b) => b.mark-a.mark);
console.log("Students sorted by marks:", sortedStudents);




// // 7
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubledNumbers=numbers.map(number => number * 2);
console.log("Numbers * 2:",doubledNumbers);

let evenNumbers=numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let greaterThan15=numbers.filter(number => number > 15);
console.log("Numbers greater than 15:", greaterThan15);

let firstGreaterThan20=numbers.find(number => number > 20);
console.log("First number greater than 20:", firstGreaterThan20);

let total=numbers.reduce((sum,number) => sum + number, 0);
console.log("Total:", total);

let anyGreaterThan40=numbers.some(number => number > 40);
console.log("Any number greater than 40:", anyGreaterThan40);

let everyPositive=numbers.every(number => number > 0);
console.log("Every number is positive:", everyPositive);

let sortedNumbers=[...numbers].sort((a,b) => b-a);
console.log("Highest to lowest:", sortedNumbers);



// // 8 
let sentence=prompt("Enter a sentence:");
let totalCharacters=sentence.length;
let uppercase=sentence.toUpperCase();
let lowercase=sentence.toLowerCase();
let containsJavaScript=sentence.includes("JavaScript");
let firstCharacter=sentence.slice(0,1);
let lastCharacter=sentence.slice(-1);
let words=sentence.trim().split(" ");
let numberOfWords=words.length;
let replacedSentence=sentence.replace("JavaScript", "Python");
let sentenceArray=sentence.split(" ");

console.log("-------String Analyzer-------");
console.log("Original Sentence:", sentence);
console.log("Total Characters:", totalCharacters);
console.log("Uppercase:", uppercase);
console.log("Lowercase:", lowercase);
console.log("Contains Javascript:", containsJavaScript);
console.log("First Character:", firstCharacter);
console.log("Last Character", lastCharacter);
console.log("Number of Words:", numberOfWords);
console.log("After Replacement:", replacedSentence);
console.log("Sentence Array:", sentenceArray);



// //  Final Mini Project — Employee Dashboard

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

// Display all employees
console.log("---- EMPLOYEE LIST ----");
employees.forEach(employee => {
    console.log(
        "ID:", employee.id,
        "| Name:", employee.name,
        "| Department:", employee.department,
        "| Salary:", employee.salary,
        "| Experience:", employee.experience
    );
});

// Search employee by name
let searchName = "Priya";
let searchedEmployee = employees.find(employee =>
    employee.name.toLowerCase() === searchName.toLowerCase()
);
console.log("\n---- SEARCH RESULT ----");
console.log(searchedEmployee);

// Filter employees by department
let department = "IT";
let departmentEmployees = employees.filter(employee =>
    employee.department === department
);

console.log("\n---- IT EMPLOYEES ----");
console.log(departmentEmployees);

// Show employees earning more than ₹50,000
let highSalaryEmployees = employees.filter(employee =>
    employee.salary > 50000
);
console.log("\n---- EMPLOYEES EARNING ABOVE ₹50,000 ----");
console.log(highSalaryEmployees);

// Calculate total company salary
let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);
console.log("\n---- TOTAL COMPANY SALARY ----");
console.log("Total Company Salary:", totalSalary);

// Find the highest-paid employee
let highestSalaryEmployee = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary
        ? employee
        : highest;

});
console.log("\n---- HIGHEST PAID EMPLOYEE ----");
console.log(highestSalaryEmployee);

// Find employees with more than 3 years' experience
let experiencedEmployees = employees.filter(employee =>
    employee.experience > 3
);
console.log("\n---- EMPLOYEES WITH MORE THAN 3 YEARS EXPERIENCE ----");
console.log(experiencedEmployees);


// Low → High
let lowToHigh = [...employees].sort((a, b) =>
    a.salary - b.salary
);
console.log("\n---- SALARY LOW → HIGH ----");
console.log(lowToHigh);

// High → Low
let highToLow = [...employees].sort((a, b) =>
    b.salary - a.salary
);
console.log("\n---- SALARY HIGH → LOW ----");
console.log(highToLow);


// 9. Statistics
let totalEmployees = employees.length;
let averageSalary = totalSalary / totalEmployees;
console.log("\n---- EMPLOYEE STATISTICS ----");
console.log("Total Employees:", totalEmployees);
console.log("Total Salary:", totalSalary);
console.log("Highest Salary:", highestSalaryEmployee.salary);
console.log("Average Salary:", averageSalary);
