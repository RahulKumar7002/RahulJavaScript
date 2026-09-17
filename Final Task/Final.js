const apiUrl = "https://dummyjson.com/users";

let employees = [];
let selectedDepartment = "All";

const employeeContainer = document.getElementById("employeeContainer");
const employeeCount = document.getElementById("employeeCount");
const directoryCount = document.getElementById("directoryCount");

const totalSalary = document.getElementById("totalSalary");
const averageSalary = document.getElementById("averageSalary");
const highestEmployee = document.getElementById("highestEmployee");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");


// Fetch Employees
function fetchEmployees() {

    message.innerHTML = "Loading employees...";

    fetch(apiUrl)
        .then(function(response) {

            if (!response.ok) {
                throw new Error("Failed to fetch employee data");
            }

            return response.json();
        })
        .then(function(data) {

            employees = data.users.map(function(user) {

                let department;

                if (user.company.department === "Engineering") {
                    department = "IT";
                }
                else if (user.company.department === "Human Resources") {
                    department = "HR";
                }
                else if (user.id % 4 === 0) {
                    department = "Finance";
                }
                else {
                    department = "Marketing";
                }

                let salary = 30000 + ((user.id * 7350) % 50001);

                return {
                    id: user.id,
                    name: user.firstName + " " + user.lastName,
                    age: user.age,
                    email: user.email,
                    department: department,
                    phone: user.phone,
                    image: user.image,
                    salary: salary
                };
            });

            displayEmployees(employees);

            message.innerHTML = "Employee data loaded successfully.";

            setTimeout(function() {
                message.innerHTML = "";
            }, 2000);
        })
        .catch(function(error) {

            message.innerHTML = "Unable to load employee data.";
            console.log(error);

        })
        .finally(function() {

            console.log("Fetch operation completed.");

        });
}


// Display Employees
function displayEmployees(list) {

    employeeContainer.innerHTML = "";

    employeeCount.innerHTML = list.length;
    directoryCount.innerHTML = list.length;

    if (list.length === 0) {

        employeeContainer.innerHTML = `
            <div class="no-employees">
                No employees found.
            </div>
        `;

        calculateSalary(list);
        return;
    }


    list.forEach(function(employee) {

        const card = document.createElement("div");
        card.className = "employee-card";

        card.innerHTML = `
            <div class="employee-top">

                <img 
                    src="${employee.image}" 
                    alt="${employee.name}"
                    class="employee-image"
                >

                <div class="employee-main">

                    <div class="employee-title">

                        <h3 class="employee-name">
                            ${employee.name}
                        </h3>

                        <span class="department-badge">
                            ${employee.department}
                        </span>

                    </div>

                    <div class="employee-info">

                        <div class="info-row">
                            <span>Age</span>
                            <strong>${employee.age}</strong>
                        </div>

                        <div class="info-row">
                            <span>Email</span>
                            <strong>${employee.email}</strong>
                        </div>

                        <div class="info-row">
                            <span>Phone</span>
                            <strong>${employee.phone}</strong>
                        </div>

                    </div>

                    <div class="salary-row">

                        <span>Salary</span>

                        <strong>
                            ₹${employee.salary.toLocaleString("en-IN")}
                        </strong>

                    </div>

                    <button class="delete-button" data-id="${employee.id}">
                        Delete
                    </button>

                </div>

            </div>
        `;

        employeeContainer.appendChild(card);


        const deleteButton = card.querySelector(".delete-button");

        deleteButton.addEventListener("click", function() {
            deleteEmployee(employee.id);
        });

    });


    calculateSalary(list);
}


// Search and Filter
function searchEmployees() {

    const searchText = searchInput.value.toLowerCase().trim();

    let filteredEmployees = employees.filter(function(employee) {

        const name = employee.name.toLowerCase();
        const email = employee.email.toLowerCase();

        return name.includes(searchText) ||
               email.includes(searchText);
    });


    if (selectedDepartment !== "All") {

        filteredEmployees = filteredEmployees.filter(function(employee) {
            return employee.department === selectedDepartment;
        });
    }


    displayEmployees(filteredEmployees);
}


// Department Filter
function filterDepartment(department) {

    selectedDepartment = department;

    searchEmployees();
}


// Add Employee
function addEmployee() {

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim();
    const department = departmentInput.value;
    const salary = Number(salaryInput.value);


    // every() validation
    const fields = [name, email, department];

    const validFields = fields.every(function(field) {
        return field !== "";
    }) && Number.isFinite(age) && age !== 0 && Number.isFinite(salary) && salary !== 0;


    if (!validFields) {

        errorMessage.innerHTML = "Please fill all fields.";
        return;
    }


    // if / else validation
    if (age < 18 || age > 70) {

        errorMessage.innerHTML = "Age must be between 18 and 70.";
        return;
    }


    if (salary < 10000) {

        errorMessage.innerHTML = "Salary must be at least ₹10,000.";
        return;
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        errorMessage.innerHTML = "Please enter a valid email address.";
        return;
    }


    // some() duplicate email check
    const emailExists = employees.some(function(employee) {

        return employee.email.toLowerCase() === email.toLowerCase();

    });


    if (emailExists) {

        errorMessage.innerHTML = "Email already exists.";
        return;
    }


    const newEmployee = {

        id: employees.length + 1000,
        name: name,
        age: age,
        email: email,
        department: department,
        salary: salary,
        phone: "Not Available",
        image: "https://dummyjson.com/icon/100"
    };


    // Spread operator
    employees = [...employees, newEmployee];


    errorMessage.innerHTML = "";

    clearForm();

    selectedDepartment = "All";
    searchInput.value = "";

    displayEmployees(employees);


    message.innerHTML = "Employee added successfully.";

    setTimeout(function() {
        message.innerHTML = "";
    }, 2000);
}


// Clear Form
function clearForm() {

    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    departmentInput.value = "";
    salaryInput.value = "";
}


// Delete Employee
function deleteEmployee(id) {

    const employee = employees.find(function(item) {
        return item.id === id;
    });


    if (!employee) {
        return;
    }


    // filter() to remove employee
    employees = employees.filter(function(item) {
        return item.id !== id;
    });


    searchEmployees();


    message.innerHTML = employee.name + " deleted successfully.";

    setTimeout(function() {
        message.innerHTML = "";
    }, 2000);
}


// Salary Calculations
function calculateSalary(list) {

    if (list.length === 0) {

        totalSalary.innerHTML = "₹0";
        averageSalary.innerHTML = "₹0";

        highestEmployee.innerHTML = `
            <div>
                <span>No employee data available</span>
            </div>
        `;

        return;
    }


    // reduce() - Total Salary
    const total = list.reduce(function(sum, employee) {

        return sum + employee.salary;

    }, 0);


    const average = total / list.length;


    // reduce() - Highest Salary
    const highest = list.reduce(function(highestEmployee, employee) {

        if (employee.salary > highestEmployee.salary) {
            return employee;
        }

        return highestEmployee;

    });


    totalSalary.innerHTML = "₹" + total.toLocaleString("en-IN");

    averageSalary.innerHTML =
        "₹" + Math.round(average).toLocaleString("en-IN");


    highestEmployee.innerHTML = `
        <div>
            <span>HIGHEST PAID EMPLOYEE</span>
            <h3>${highest.name}</h3>
        </div>

        <strong>
            ₹${highest.salary.toLocaleString("en-IN")}
        </strong>
    `;
}


// Sorting Functions
function sortEmployees(type) {

    const searchText = searchInput.value.toLowerCase().trim();

    let sortedEmployees = employees.filter(function(employee) {

        const matchesSearch = employee.name.toLowerCase().includes(searchText) ||
            employee.email.toLowerCase().includes(searchText);

        const matchesDepartment = selectedDepartment === "All" ||
            employee.department === selectedDepartment;

        return matchesSearch && matchesDepartment;
    });


    if (type === "nameAZ") {

        sortedEmployees.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

    }
    else if (type === "nameZA") {

        sortedEmployees.sort(function(a, b) {
            return b.name.localeCompare(a.name);
        });

    }
    else if (type === "salaryHigh") {

        sortedEmployees.sort(function(a, b) {
            return b.salary - a.salary;
        });

    }
    else if (type === "salaryLow") {

        sortedEmployees.sort(function(a, b) {
            return a.salary - b.salary;
        });

    }
    else if (type === "ageLow") {

        sortedEmployees.sort(function(a, b) {
            return a.age - b.age;
        });

    }
    else if (type === "ageHigh") {

        sortedEmployees.sort(function(a, b) {
            return b.age - a.age;
        });
    }


    displayEmployees(sortedEmployees);
}


// Date and Time
function updateDateTime() {

    const now = new Date();

    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }


    const formattedDate =
        date.toString().padStart(2, "0") +
        "/" +
        month.toString().padStart(2, "0") +
        "/" +
        year;


    const formattedTime =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0") +
        " " +
        ampm;


    document.getElementById("dateTime").innerHTML =
        formattedDate + "<br>" + formattedTime;
}


// Search Button
searchButton.addEventListener("click", function() {
    searchEmployees();
});


// Search while typing
searchInput.addEventListener("keyup", function() {
    searchEmployees();
});


// Department Buttons
document.getElementById("allButton").addEventListener("click", function() {
    filterDepartment("All");
});

document.getElementById("itButton").addEventListener("click", function() {
    filterDepartment("IT");
});

document.getElementById("hrButton").addEventListener("click", function() {
    filterDepartment("HR");
});

document.getElementById("financeButton").addEventListener("click", function() {
    filterDepartment("Finance");
});

document.getElementById("marketingButton").addEventListener("click", function() {
    filterDepartment("Marketing");
});


// Sorting Buttons
document.getElementById("sortNameAZButton").addEventListener("click", function() {
    sortEmployees("nameAZ");
});

document.getElementById("sortNameZAButton").addEventListener("click", function() {
    sortEmployees("nameZA");
});

document.getElementById("sortSalaryHighButton").addEventListener("click", function() {
    sortEmployees("salaryHigh");
});

document.getElementById("sortSalaryLowButton").addEventListener("click", function() {
    sortEmployees("salaryLow");
});

document.getElementById("sortAgeLowButton").addEventListener("click", function() {
    sortEmployees("ageLow");
});

document.getElementById("sortAgeHighButton").addEventListener("click", function() {
    sortEmployees("ageHigh");
});


// Add Employee Button
document.getElementById("addEmployeeButton")
    .addEventListener("click", function() {

        addEmployee();

    });


// Start
fetchEmployees();

updateDateTime();

setInterval(updateDateTime, 1000);