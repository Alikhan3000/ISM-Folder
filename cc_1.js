//task 1
let employeeName = "Ali";
const employeeID = 2040;
var isActive = true;

console.log(employeeName, typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);

//task 2
let productName = "Vinegar";
const productPrice = 3.99;
var isAvailable = true;

console.log(productName, typeof productName);
console.log(productPrice, typeof productPrice);
console.log(isAvailable, typeof isAvailable);

//task 3
let accountBalance = 500;

accountBalance -= 450;
console.log(accountBalance);

accountBalance *= 10;
console.log(accountBalance);

accountBalance /=500;
console.log(accountBalance);

accountBalance += 3.99;
console.log(accountBalance)

//task 4
let customerName = "Ben";

let welcome_message = "Good day, " +  customerName +  "! We are happy to see you again!";
console.log(welcome_message);

//task 5

let isLoggedIn = false; // user is not logged in initially 

if (isLoggedIn) 
{console.log("You have successfully logged in");} //this message is shown when user is logged in isLoggedIn = true

else {
console.log("You have to log in");  // this message is shown when user have to log in isLoggedIn = false
}