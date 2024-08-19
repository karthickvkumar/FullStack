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
    firstName : "mr.abc",
    lastName : "xyz",
    rollNumber : "2344ADC53534534534",
    contatNumber : 987558268556
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
        firstName : "mr.abc",
        lastName : "xyz",
        rollNumber : "2344ADC53534534534",
        contatNumber : 987558268556
    },
    {
        firstName : "mr.wer",
        lastName : "poi",
        rollNumber : "434535343DEDDF5556",
        contatNumber : 784555555
    }
];

console.log(nameList);
console.log(studentDetailList);