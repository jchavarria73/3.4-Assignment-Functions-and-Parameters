let x = multiply(10, 6); // Function
document.getElementById("function").innerHTML = x;
    
function multiply(x, y) {   
  return x * y; // Function Return
}

function adder(num1, num2){
    console.log(num1 + num2);
}

adder(10,8); // Passing Parameters In, Output: 18

function add(a, b) {
    return a + b;
  }
  
  const sum = add(8, 4); // Passing Parameters Out
  console.log(sum); // Output: 12


const person = { // Object Properties
  firstName: "Jose",
  lastName: "Chavarria",
  age: 21,
  eyeColor: "brown",
  fullName: function () {   // Object Method
    return this.firstName + " " + this.lastName;
  }
};
  
document.getElementById("object").innerHTML = 
person.firstName + " " + person.lastName + " " + // Accessing Object Properties
"has" + " " + person.eyeColor + " " + "eyes";

document.getElementById("method").innerHTML = 
person.fullName(); // Accessing Object Method

function clickFunction() {
document.getElementById("event").innerHTML = "To get to the other slide!"; // onclick Event
document.getElementById("onclick").innerHTML = "Get it?";
}

function displayDate() {    
document.getElementById("date").innerHTML = Date(); // Event (Date)
}

let text = "Pepperoni Pizza"
document.getElementById("length").innerHTML = text.length; // String Method: Length

function myFunction() {
  let text = document.getElementById("replace").innerHTML;
  document.getElementById("replace").innerHTML =
  text.replace("red","blue");   // String Method: Replace
}

document.getElementById("integer").innerHTML = // Number Object Method: Number.isInteger()
Number.isInteger(5);

// 3.1 Video Lesson
const name = "Jose";
const youtuber = 'MrBeast';

function logger() {
    console.log('Pizza Time');
    console.log('Pizza Time');
    console.log('Pizza Time');
    console.log('Pizza Time');
}

logger();

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(10, 30);

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);
toUpper(youtuber);