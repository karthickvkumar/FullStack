/* JavaScript - Case Senstivive

Data Type (In this we will learn how to priovide input to JavaScript)
1. Primitive Type (pre Defined Type)

a) Number - Any Numerical value include Positive, Negative, decimal, fractional 
b) String - Any text value which is enclosed inside a single or double Quote '' ""
c) Boolean - true , false 
d) null - Non exisit value 
e) undefined - It has been declared but not assigned any value

2. Object Type (User Defined Type)

a) Object - It is a collection of key and value pair 
b) Array - It is a List of data 
c) Function - It is a block of Code */

/*
To pass a input to Javascript:
Variable - It a temp storage to hold the input (data) 
syntax:
var VariableName = Value;

var - Keyword use to create variable 
VariableName - Name for the temp storage (Name of the variable)
    - Should contains only A-Z, a-z, 0-9, _ , $
    - User defined Name 
Value - The input what we are going to pass 
*/

var user_age = 25;
var user_age_result = user_age * 2;
console.log(user_age_result)

/*
To show out to User:
1. console.log()
2. alert()
3. Printing into HTML 
*/

var user_email_id = "karthick1232@gmail.com";
console.log(user_email_id);

var passResult = true;
console.log(passResult);

var upcommingValue;
console.log(upcommingValue);

var firstName = "mr.abc";
var lastName = "xyz";
var rollNumber = "2344ADC53534534534";
var contatNumber = 987558268556;

/*
To Create an Object 
syntax:
var VariableName = { 
    key1 : value,
    key2 : value
};

key - similar to Variable Name, it should be unique in a variable
*/

var studentDetails = {
    firstName: "mr.abc",
    lastName: "xyz",
    rollNumber: "2344ADC53534534534",
    contatNumber: 987558268556
};

console.log(studentDetails);

/*
To create an Array
syntax: 
var VariableName = [ value1, value2, value3, ... valueN ];

value1 - Input (Number type)
*/

var scoreList = [20, 30, 45, 10, 55];

var nameList = ["abc", "cde", "efg", "hij"];

var studentDetailList = [
    {
        firstName: "mr.abc",
        lastName: "xyz",
        rollNumber: "2344ADC53534534534",
        contatNumber: 987558268556
    },
    {
        firstName: "mr.wer",
        lastName: "poi",
        rollNumber: "434535343DEDDF5556",
        contatNumber: 784555555
    }
];

console.log(nameList);
console.log(studentDetailList);

/*
Function Syntax:
Part 1 - Function Definition 
Type inisde javascript File

function functionName(){
    -- code logic
}

function - keyword used to defined a block
functionName - It should be a meaningful name, It should be unique, A-Z, a-z, 0-9, _, $

Part 2 - Function Execution 
Type inside HTML file

onclick="functionName()"
*/

var importantMessage = "!!Flash News!!";  /// Global Scope Variable -- It can be used inside any Function limit

var importantAnnouncemnt;

function printWelcomeMessage() {
    var message = "Hello! Good Day";  /// Local Scope Variable -- It can be used only with in that function limit
    importantAnnouncemnt = "Welcome Everyone...";  /// Automatic Global
    alert(message);
    alert(importantMessage);
}

function goodbyeMessage() {
    var message = "Thank you! Bye";
    alert(message);
    alert(importantMessage);
    alert(importantAnnouncemnt);
}

/*
Different ways Input can be given by User to Program:
1. Typing the Input direclty into to the Code  -- Static 
2. prompt() -- Dynamic
3. using HTML Forms -- Dynamic
*/

function dynamicOutput() {
    var input = prompt("Enter you Name");
    alert(input);
}

/*
Operators in Javascript
1. Arithmetic Operator +, -, *, /, %, ++ (incremenmt Operator), -- (decrement operator)
2. Assingment Operator =
3. Comparaison Operator < (less than), <= , > (greater than), >= , == , != , === , !==
4. Logical Operator && (AND), || (OR), ! (NOT)

AND (&&)
condition 1 (true) && condition 2 (true) -- Combined output (true)
condition 1 (true) && condition 2 (false) -- Combined output (false)
condition 1 (false) && condition 2 (true) -- Combined output (false)
condition 1 (false) && condition 2 (false) -- Combined output (false)

OR (||)
condition 1 (true) || condition 2 (true) -- Combined output (true)
condition 1 (true) || condition 2 (false) -- Combined output (true)
condition 1 (false) || condition 2 (true) -- Combined output (true)
condition 1 (false) || condition 2 (false) -- Combined output (false)

NOT (!)
! condition (true)  --- Output (false)
! condition (false)  --- Output (true)

*/

/*
Flow Control 
1. IF ELSE Condition 
syntax: 

if(condition){
  -- If the condition (true) -- If Block -- Will execute 
}
else{
  -- If the condition (false) -- Else  Block -- Will execute
}
*/

/*
Problem: To find a given User Age is Eligible from Vote in US 
Statement: 
1. Read input (user age)
2. Process the Input (comparing the Input - greater than or equal to 18)
3. Output 
    1) If the comparision (true) -- The user is eligible to Vote 
    2) If the comparision (false) -- The user is Not eligible to Vote
*/

function CheckVotingEligiblity() {
    var age = prompt("Enter the Person Age");
    if (age >= 18) {
        alert("The user is eligible to Vote");
    }
    else {
        alert("The user is Not eligible to Vote");
    }
}

/*
2. Multiple IF Else Condition 
syntax:

if(Condition 1){

}
else if(Condition 2){

}
else if(Condition 3){

}
else{

}

Problem: Find the Ticket discount percentage and category based on Person Age 
category: 
1) Less than or equal to 3 -- Kids, 50% of Ticket discount in fair
2) Greater than 3 and less than 60 -- Adult, 100% of Ticket fair 
3) Greater than or equal to 60 -- Senior, 75% of Ticket discount in fair
*/

function CheckTicketDiscount() {
    var age = prompt("Enter the Person Age");
    if (age <= 3) {
        alert("Kids, 50% of Ticket discount in fair");
    }
    else if (age > 3 && age < 60) {
        alert("Adult, 100% of Ticket fair ");
    }
    else if (age >= 60) {
        alert("Senior, 75% of Ticket discount in fair");
    }
    else {
        alert("Type only Numeric value");
    }
}

/*
Loop - To run a block of code to N number of times 
syntax:

for(initialization; condition; increment/decrement){
 -- code block that needs to be run multiple time
}

initialization - Starting point of a Loop
condition - Ending point of a Loop 
increment/decrement - continue the loop
*/

for (var count = 1; count < 20; count++) {
    console.log("The loop is running for", count);
}

/*
Problem: To find all even numbers for the given number of limit 
1. Input - Number value 
2. Processing : Come with logic for the Problem 
   Number % 2 == Remainder - 0 == Even Number 
3. Output 
*/

function findingEvenNumber() {
    var lastNumber = prompt("Enter the Last Number");
    for (var count = 0; count <= lastNumber; count++) {
        var remainder = count % 2;
        if (remainder == 0) {
            console.log(count, "is a Even Number")
        }
    }
}

/*
Switch Case - Similar to multiple if else condition 
syntax:

switch(expression){
    case value: 
        code logic 
        break;
    case value:
        code logic 
        break;
    . 
    .
    default:
        code logic  
}

expression - The raw actual value 
*/

/*
Problem - To perform basic arithmetic operation 
Input - 3 (number1, mathemical operator, number2)
Processing - process the 2 numbers based on given mathemical operator
Output - show result of mathemical operation 
*/

function basicCalculator() {
    try {
        var stingFormatedFirstNumber = prompt("Enter the First Number");
        var firstNumber = parseInt(stingFormatedFirstNumber);
        var operator = prompt("Enter any one operator +, -, *, /");
        var stringFormatedSecondNumber = prompt("Enter the Second Number");
        var secondNumber = parseInt(stringFormatedSecondNumber);

        switch (operator) {
            case "+":
                var result = firstNumber + secondNumber;
                alert(result);
                break;
            case "-":
                var result = firstNumber - secondNumber;
                alert(result);
                break;
            case "*":
                var result = firstNumber * secondNumber;
                alert(result);
                break;
            case "/":
                var result = firstNumber / secondNumber;
                alert(result);
                break;
            default:
                alert("Please enter only valid operator");
        }
    }
    catch (exception) {
        alert("Something went wrong pls contact the Admin of site");
    }

}

/*
Error - Mistake in the program 
Exception Handling or Debugging - To solve the error in tha program 

Types of Error
1. Syntax Error - Mistake in the program syntax (Using incorrect syntax in code)
2. Run Time Error - Mistake inside the code block(incorrect syntax, incorrect spelling)
3. Logical Error - Mistake in the program logic (no red line, expected output will be incorrect)


Exception Handling / Error Handling (Runtime error)
syntax:

try{

}
catch(exception){

}

Debugging - Pausing the code exection line by line
*/

/*
Parse Int Method → It will return a String into Whole number
var actualNumber = parseInt("20");
actualNumber -- 20
*/

/*
Scope - It provides a way to access the variable
Three different types of Scopes:
1. Local Scope - Variable that are created inside a function can be accessable only with in the Function level
2. Global Scope - Variable that are created outside of a function can be accessable with in any Function level 
3. Automatic Global Scope - Variable will be created outside of a function but its value will be assinged inside a function | It can be accessable with in any function level
*/

/*
Storage - Manually Storing a value into the Browser memory using javascript
Local Storage - Once you stored something into the browser memory, it will be remains Permanently
Session Storage - Once you stored something into the browser memory, it will be remains Temporary (Until the user is closing the browser tab)
*/
/*
Local Storage:
 - Permanent Storage 
 - Max size of storage limit is inbetween 5MB to 13MB depends on browsers 

 Synatax:
 To store a value into local storage:

 localStorage.setItem("key", value);
 key - similar to variable name it should given in only string 
 value - String, Number, Boolean | Object , Array (need to process before storing)

To read a value from local storage:
localStorage.getItem("key");

To clear a Specific value / Entire value from local storage
localStorage.removeItem("key");
localStorage.clear();

 */

function storeUserMessageLocal() {
    var message = prompt("Enter your message");
    localStorage.setItem("userMessage", message);
    alert("Message has been stored");
}

function readLocalMessage() {
    var message = localStorage.getItem("userMessage");
    if (message != null) {
        alert(message);
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

/*
Sesssion Storage:
 - Temporary Storage 
 - Max size of storage limit is inbetween 5MB to 13MB depends on browsers 

 Synatax:
 To store a value into session storage:

sessionStorage.setItem("key", value);
 key - similar to variable name it should given in only string 
 value - String, Number, Boolean | Object , Array (need to process before storing)

To read a value from session storage:
sessionStorage.getItem("key");

To clear a Specific value / Entire value from session storage
sessionStorage.removeItem("key");
sessionStorage.clear();

 */

function storeUserMessageSession() {
    var message = prompt("Enter your message");
    sessionStorage.setItem("userMessage", message);
    alert("Message has been stored");
}

function storeObject() {
    var employeeDetails = {
        name: "abc",
        age: 30,
        contact: "+78924525265",
        location: "India"
    };

    // Object -> String Format Object -> Stored -> String Format Object -> Object 

    // RULE 
    // #1 To store Object/Array into localStorage -- It should be converted into String value
    // #2 To read an Already stored Object/Array from localStorage -- It should be coneverted back to Object/Array  

    // To convert Object/Array into String 
    // JSON.stringify(value);

    var convertedDetails = JSON.stringify(employeeDetails);

    localStorage.setItem("employeeDetails", convertedDetails);

    var result = localStorage.getItem("employeeDetails");

    // To restore String Format Object into Actual Object 
    // JSON.parse(value)
    var restoredValue = JSON.parse(result);
    console.log(restoredValue);

    alert("Object has been into local storage");
}

/*
Timer - To run the code based on Time that we have given
1) setTimeout - It will run a code after the given time (Run only one time while reloading the page)
2) setInterval - It will run a code after the given time (Run repeatedly within the given time interval)

syntax:

setTimeout(function(){
    code logic for delay execution
}, timeInMilliSecond)

Callback Function - Similar to a Function but it will not have Name 
function(){

}

timeInMilliSecond - 1 second = 1000 milliSecond
*/

function delayWelcomeMessage() {
    alert("Function has been Clicked");

    setTimeout(function () {
        var message = "Good Evening!"
        alert(message);
    }, 5000);
}

//readLocalMessage(); // Function Invocation / Function Call

/*
 setInterval
 syntax:
 setInterval(function(){

 }, TimeInMilliSecond)
 */
var timer;

function keepOnRunning() {
    alert("Function has been Clicked");

    timer = setInterval(function () {
        var message = "Good Morning!"
        alert(message);
    }, 3000);
}

/*
To stop the setInterval 
syntax:
clearInterval(timeID);
*/

function stopSetInterval(){
    clearInterval(timer);
}

// Object
var employee = {
    name : "mr.abc",
    age: 24,
    city: "New York",
    contact: "+17894683523"
};

console.log(employee)

/*Operation in Object
1. Read a particular value from Object 
2. Modifying a particular value in Object
3. Add a new value into Object
4. Deleting a particular value from Object */

/*To Read a particular value from Object 
syntax:
object_variableName.key */

console.log(employee.city);

/*Modifying a particular value in Object
syntax:
object_variableName.key = new Value; */

employee.name = "John Smith";
console.log(employee);

/*Add a new value into Object
syntax:
object_variableName.newKey = value;*/

employee.surname = "William";
employee.bloodgroup = "B+";
console.log(employee);

/*Deleting a particular value from Object
syntax:
delete object_variableName.key;*/

delete employee.contact;
console.log(employee);

Array 
var employeeList = [
    {
        name : "absc",
        id: 101
    },
    {
        name : "decd",
        id: 105
    },
    {
        name : "osdf",
        id: 107
    }
];
console.log(employeeList);

/*
Operation in Array
1. Read a particular value from Array 
2. Modifying a particular value in Array
3. Add a new value into Array
4. Deleting a particular value from Array
*/

/*Read a particular value from Array
syntax:
array_variableName[index]; 

1) If index is a known Value */

console.log(employeeList[2])

/*2) If index is unknown value 

To find the index from that Array 
var VariableName = array_variableName.findIndex(function(value){
 return condition_to_match_value
});
*/
var index = employeeList.findIndex(function(value){
    return value.id === 105;
});

console.log(employeeList[index]);

/*
Modifying a particular value in Array
syntax:
array_variableName[index] = new Value
*/

employeeList[0] = {
    name: "karthick",
    id : 201
}

console.log(employeeList);

/*
Add a new value into Array
syntax:
1) To insert a new value at bottom of an Array 

array_variableName.push(value);

2) To insert a new value at top of an Array 

array_variableName.unshift(value);
*/

employeeList.push({ 
    name: "zyan",
    id: 305
});

employeeList.unshift({
    name: "arun",
    id: 1
});

console.log(employeeList)