// JAVASCRIPT OBJECTS

// ------------------------------ Chapter 1: "ALERTS" ------------------------------

// Exercise 1
// alert("Hi there!");


// Exercise 2
// alert("Error! Please enter a valid password.");


// Exercise 3
// alert("Welcome to JS Land...\nHappy Coding!");


// Exercise 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs");


// Exercise 5
// console.log("Hello... I can run JS through my web browser's console");


// Exercise 6 & 7 (Go to index.html)





// ------------------------------ Chapter 2: "VARIABLES FOR STRINGS" ------------------------------

// Exercise 1
// var username;


// Exercise 2
// var myName = "Farah Syed";


// Exercise 3
// a
// var message;

// b
// message = "Hello World";

// c
// alert(message);


// Exercise 4
// var studentName = "John Doe";
// var age = "15 years old";
// var certification = "Certified Mobile Application Development";
// alert(studentName);
// alert(age);
// alert(certification);


// Exercise 5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");


// Exercise 6
// var email = "farahsyed44@gmail.com";
// alert("My email address is" + " " + email);


// Exercise 7
// var book = "A smarter way to learn JavaScript";
// alert("I'm trying to learn from the Book" + " " + book);


// Exercise 8
// document.write("Yah! I can wirte HMTL content through JavaScript<br />");


// Exercise 9
// var sym = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(sym);
// document.write(sym + "<br />");





// ------------------------------ Chapter 3: "VARIABLES FOR NUMBERS" ------------------------------

// Exercise 1
// var age = 32;
// alert("I am" + " " + age + " " + "years old");


// Exercise 2
// var visitCount = localStorage.getItem("page_view");
// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }
// alert("You have visited this site" + " " + visitCount + " " + "time(s)");


// Exercise 3
// var birthYear = 1990;
// document.write("My birth year is" + " " + birthYear + "<br />Data type of my declared variable is number<br />");


// Exercise 4
// var visitorName = prompt("Enter your full name", "John Doe");
// var productTitle = prompt("Enter product title", "T-shirt");
// var quantity = prompt("Specify the number of products you want to order", "5");
// document.write("<strong>" + visitorName + "</strong> " + "ordered" + " <strong>" + quantity + " " + productTitle + "</strong>(s) " + "on XYZ Clothing store<br />");





// ------------------------------ Chapter 4: "VARIABLE NAMES: LEGAL & ILLEGAL" ------------------------------

// Exercise 1
// var a = 2, b = 4, c = 6;
// // OR
// var step1 = "HTML",
//   step2 = "CSS",
//   step3 = "JavaScript";


// Exercise 2
// // 5 Legal variable names:
// var fullName;
// var age;
// var $email;
// var contact1;
// var _myVar;

// // 5 Illegal variable names:
// // var Full name;
// // var My-age;
// // var My.email;
// // var 1Contact;
// // var var;


// Exercise 3
// document.write("<h1>“Rules for naming JS variables”</h1><p>Variable names can only contain numbers, $ and _. For example $my_1stVariable<br />Variables must begin with a letter, $ or _. For example $name, _name or name<br />Variable names are case sensitive<br />Variable names should not be JS keywords</p>");





// ------------------------------ Chapter 5: "MATH EXPRESSIONS" ------------------------------

// Exercise 1
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var result;

// if (isNaN(num1) || isNaN(num2)) {
//   document.write("Please type a number to perform Mathematical operation<br /><br />");
// }
// else {
//   var result = num1 + num2;
//   document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
// }


// Exercise 2
// var num1 = +prompt("Enter first number");
// var opt = prompt("Specify an operator");
// var num2 = +prompt("Enter second number");

// if (isNaN(num1) || isNaN(num2)) {
//   document.write("Please type a number to perform Mathematical operation<br /><br />");
// }
// else if (opt === "-") {
//   var result = num1 - num2;
//   document.write("Subtraction of" + " " + num2 + " " + "from" + " " + num1 + ", " + "is" + " " + result + "<br /><br />");
// }
// else if (opt === "*") {
//   var result = num1 * num2;
//   document.write("Multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
// }
// else if (opt === "/") {
//   var result = num1 / num2;
//   document.write("Division of" + " " + num1 + " " + "by" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
// }
// else if (opt === "%") {
//   var result = num1 % num2;
//   document.write("Remainder of" + " " + num1 + " " + "by" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
// }
// else {
//   document.write("Mathematical operation cannot be performed!<br /><br />");
// }


// Exercise 3
// var num;
// document.write("Value after variable declaration is:" + " " + num + "<br />");

// var num = 2;
// document.write("Initial value:" + " " + num + "<br />");

// var num = ++num;
// document.write("Value after increment is:" + " " + num + "<br />");

// var num = 7 + num;
// document.write("Value after addition is:" + " " + num + "<br />");

// var num = --num;
// document.write("Value after decrement is:" + " " + num + "<br />");

// var result = num % 3;
// document.write("The remainder is:" + " " + result + "<br /><br />");


// Exercise 4
// var ticket = 600;
// document.write("Total cost to buy a movie ticket is:" + " " + 5 * ticket + " " + "PKR.<br /><br />");


// Exercise 5
// var tableOf = 2;
// document.write("<h1>Table of " + tableOf + " " + "</h1>" + tableOf + " x 1 =" + " " + tableOf + "<br />" + tableOf + " x 2 =" + " " + tableOf * 2 + "<br />" + tableOf + " x 3 =" + " " + tableOf * 3 + "<br />" + tableOf + " x 4 =" + " " + tableOf * 4 + "<br />" + tableOf + " x 5 =" + " " + tableOf * 5 + "<br />" + tableOf + " x 6 =" + " " + tableOf * 6 + "<br />" + tableOf + " x 7 =" + " " + tableOf * 7 + "<br />" + tableOf + " x 8 =" + " " + tableOf * 8 + "<br />" + tableOf + " x 9 =" + " " + tableOf * 9 + "<br />" + tableOf + " x 10 =" + " " + tableOf * 10 + "<br /><br />");


// Exercise 6
// var celsiusTemp = 32;
// fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
// document.write(celsiusTemp + "°C is" + " " + fahrenheitTemp + "°F<br />");

// var fahrenheitTemp = 32;
// celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
// document.write(fahrenheitTemp + "°F is" + " " + celsiusTemp + "°C<br /><br />");


// Exercise 7
// var item1Price = 500;
// var item2Price = 700;
// var item1Quantity = 5;
// var item2Quantity = 4;
// var shippingCharges = 100;
// var total = item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges;
// // var total = 500 * 5 + 700 * 4 + 100; //Static

// document.write("<h1>Shopping Cart</h1>" + "Price of item 1 is" + " " + item1Price + "<br />" + "Quantity of item 1 is" + " " + item1Quantity + "<br />" + "Price of item 2 is" + " " + item2Price + "<br />" + "Quantity of item 2 is" + " " + item2Quantity + "<br />" + "Shipping charges" + " " + shippingCharges + "<br /><br />Total cost of your order is" + " " + total + " PKR.<br /> <br />");


// Exercise 8
// var totalMarks = 900;
// var marksObtained = 850;
// var percent = (marksObtained / totalMarks) * 100
// document.write("<h1>Mark Sheet</h1>" + "Total Marks:" + " " + totalMarks + "<br />Marks Obtained:" + " " + marksObtained + "<br />Percentage:" + " " + percent + "%<br /><br />");


// Exercise 9
// // 1 U.S. Dollar(USD) into PKR
// var usd = 104.80;

// // 1 Saudi Arabian Riyal(SAR) into PKR
// var sar = 28;

// var total = usd * 10 + sar * 25;
// document.write("<h1>Currency in PKR</h1>" + "Total Currency in PKR:" + " " + total + "<br /><br />");


// Exercise 10
// var num = 10;
// document.write(((5 + num) * 10) / 2 + "<br /><br />");


// Exercise 11
// var currentYear = 2022;
// var birthYear = 1996;
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1>" + "Current Year:" + " " + currentYear + "<br />Birth Year:" + " " + birthYear + "<br />Your age is:" + " " + age + " " + "years<br /><br />They are either 25 or" + " " + age + " " + "years old.<br /><br />");


// Exercise 12
// var r = 20;
// var π = 3.142;
// var C = 2 * π * r;
// var A = π * Math.pow(r, 2);
// document.write("<h1>The Geometrizer</h1>" + "Radius of a circle:" + " " + r + "<br />The circumference is:" + " " + C + "<br />The area is:" + " " + A + "<br /><br />");


// Exercise 13
// var snack = "Croissant";
// var age = 20;
// var maxAge = 25;
// var amountPerDay = 1;
// var snacksForLife = (maxAge - age) * (amountPerDay * 365);
// document.write("<h1>The Lifetime Supply Calculator</h1>" + "Favorite Snack:" + " " + snack + "<br />Current Age:" + " " + age + "<br />Estimated Maximum Age:" + " " + maxAge + "<br />Amount of Snacks per day:" + " " + amountPerDay + "<br />You will need" + " " + snacksForLife + " " + snack + "s " + "to last you until ripe old age of" + " " + maxAge + ".<br /><br /><br />");





// ------------------------------ Chapters 6-9: "MATH EXPRESSIONS" ------------------------------

// Exercise 1
// var a = 10;
// document.write("Result:<br />The value of a is" + " " + a + "<br /><br /> The value of ++a is:" + " " + ++a + "<br />Now the value of a is:" + " " + a + "<br /><br />The value of a++ is:" + " " + a++ + "<br />Now the value of a is:" + " " + a + "<br/ ><br />The value of --a is:" + " " + --a + "<br />Now the value of a is:" + " " + a + "<br /><br />The value of a-- is:" + " " + a-- + "<br />Now the value of a is:" + " " + a + "<br /><br />");


// Exercise 2
// var a = 2;
// var b = 1;

// var result = --a;
// a = 1;
// b = 1;
// result = 1;

// var result = --a - --b;
//             // 1  -  0
// a = 1;
// b = 0;
// result = 1;

// var result = --a - --b + ++b;
//             // 1  -  0  +  1
// a = 1;
// b = 1;
// result = 2;

// var result = --a - --b + ++b + b--;
//             // 1  -  0 +   1 +  1
// a = 1;
// b = 1; //Now the value of b is 0
// result = 3;


// Exercise 3
// var username = prompt("Enter your name")
// alert("Welcome," + " " + username + "!\nWe are delighted to have you.")


// Exercise 5
// var tableOf = prompt("Please enter a number to display multiplication table", "5");
// if (!tableOf) {
//     tableOf = 5
// }
// document.write("<h1>Table of " + tableOf + " " + "</h1>" + tableOf + " x 1 =" + " " + tableOf + "<br />" + tableOf + " x 2 =" + " " + tableOf * 2 + "<br />" + tableOf + " x 3 =" + " " + tableOf * 3 + "<br />" + tableOf + " x 4 =" + " " + tableOf * 4 + "<br />" + tableOf + " x 5 =" + " " + tableOf * 5 + "<br />" + tableOf + " x 6 =" + " " + tableOf * 6 + "<br />" + tableOf + " x 7 =" + " " + tableOf * 7 + "<br />" + tableOf + " x 8 =" + " " + tableOf * 8 + "<br />" + tableOf + " x 9 =" + " " + tableOf * 9 + "<br />" + tableOf + " x 10 =" + " " + tableOf * 10 + "<br /><br />");


// Exercise 6
// var subject1 = prompt("Enter a subject name");
// var subject2 = prompt("Enter another subject name");
// var subject3 = prompt("Enter a last subject name");
// var totalInEach = 100;
// var totalMarks = 300;

// var sub1Marks = +prompt("Enter obtained marks in" + " " + subject1);
// var sub2Marks = +prompt("Enter obtained marks in" + " " + subject2);
// var sub3Marks = +prompt("Enter obtained marks in" + " " + subject3);

// var percentInSub1 = (sub1Marks / totalInEach) * 100;
// var percentInSub2 = (sub2Marks / totalInEach) * 100;
// var percentInSub3 = (sub3Marks / totalInEach) * 100;

// var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
// var percent = (obtainedMarks / totalMarks) * 100;

// document.write("<table><thead><tr><th>Subject</th><th>Total Marks</th><th>Obatained Marks</th><th>Percentage</th></tr></thead><tbody><tr><td>" + subject1 + "</td><td>" + totalInEach + "</td><td>" + sub1Marks + "</td><td>" + percentInSub1 + "%</td></tr><tr><td>" + subject2 + "</td><td>" + totalInEach + "</td><td>" + sub2Marks + "</td><td>" + percentInSub2 + "%</td></tr><tr><td>" + subject3 + "</td><td>" + totalInEach + "</td><td>" + sub3Marks + "</td><td>" + percentInSub3 + "%</td></tr></tbody><tfoot><tr><td></td><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th><th>" + percent + "%</th></tr></tfoot></table>");





// ------------------------------ Chapters 9-11: "USER INPUT & CONDITIONAL STATEMENT" ------------------------------

// Exercise 1
// var city = prompt("Enter a city name");

// if (city == "Karachi" || city == "karachi") {
//   alert("Welcome to the city of lights");
// }


// Exercise 2
// var gender = prompt("Gender");

// if (gender === "Male" || gender === "male") {
//   alert("Good Morning, Sir");
// }
// else if (gender === "Female" || gender === "female") {
//   alert("Good Morning, Ma'am");
// }


// Exercise 3
// var red = "Must Stop";
// var yellow = "Ready to Move";
// var green = "Move now";

// var signalColor = prompt("Enter a color of road traffic signal");

// if (signalColor === "Red" || signalColor === "red") {
//   alert(red);
// }
// else if (signalColor === "Yellow" || signalColor === "yellow") {
//   alert(yellow);
// }
// else if (signalColor === "Green" || signalColor === "green") {
//   alert(green);
// }
// else {
//   alert("Invalid Entry! Please Try again");
// }


// // Exercise 4
// var fuelInCar = prompt("How many Litres of fuel is left in your car");

// if (fuelInCar < 0.25) {
//   alert("Please refill the fuel in your car");
// }
// else {
//   alert("No need to refill the fuel now");
// }


// Exercise 5
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true"); //Displayed
// }

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");  //Not displayed
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true"); //Displayed
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true"); //Displayed
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals" + " " + totalCost);   //Displayed
// }

// if (true) {
//   alert("True"); //Displayed
// }
// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat"); //Displayed
// }


// Exercise 6
// var marksObtainedInSub1 = +prompt("Marks Obtained in Subject 1 out of 100");
// var marksObtainedInSub2 = +prompt("Marks Obtained in Subject 2 out of 100");
// var marksObtainedInSub3 = +prompt("Marks Obtained in Subject 3 out of 100");

// var totalMarks = 300;
// var marksObtained = marksObtainedInSub1 + marksObtainedInSub2 + marksObtainedInSub3;

// if (marksObtainedInSub1 <= 100 && marksObtainedInSub2 <= 100 && marksObtainedInSub3 <= 100) {
//   var percentage = (marksObtained / totalMarks) * 100;
// }
// else {
//   alert("Calculation cannot be performed! Enter marks within the total marks")
// }

// var grade;
// var remarks;

// if (percentage > 80 || percentage === 80) {
//   grade = "A-One";
//   remarks = "Excellent";
// } else if (percentage > 70 || percentage === 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage > 60 || percentage === 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else if (percentage < 60) {
//   grade = "Fail";
//   remarks = "Sorry";
// }
// document.write("<h1>Mark Sheet</h1> Total Marks:" + " " + totalMarks + "<br />Marks Obtained:" + " " + marksObtained + "<br />Percentage:" + " " + percentage + "%<br />Grade:" + " " + grade + "<br />Remarks:" + " " + remarks + "<br /><br />");


// Exercise 7
// var secretNum = 5;
// var userNum = +prompt("Guess the secret number");

// if (userNum === secretNum) {
//   alert("Bingo! Correct answer");
// }
// else if (userNum == --secretNum) {
//   alert("Close enough to the correct answer");
// }
// else {
//   alert("Better luck next time");
// }


// Exercise 8
// var num = +prompt("Enter a number to check if it is divisible by 3");

// if (num%3 == 0 && num > 2) {
//   alert("Yes," + " " + num + " " + "is divisible by 3");
// }
// else {
//   alert("No," + " " + num + " " + "is not divisible by 3");
// }


// Exercise 9
// var n = +prompt("Enter a number to check if it is even or odd");

// if (n%2 == 0) {
//   alert(n + " " + "is an even number");
// }
// else if (!n%2 == 0) {
//   alert(n + " " + "is an odd number")
// }
// else {
//   alert("Please enter a number")
// }


// Exercise 10
// var temp = +prompt("Enter the current temperature of your city");

// if (temp > 40) {
//   alert("It is too hot outside.")
// }
// else if (temp > 30) {
//   alert("The weather today is Normal.")
// }
// else if (temp > 20) {
//   alert("Today's weather is cool.")
// }
// else if (temp > 10) {
//   alert("OMG! Today's weather is so Cool.")
// }
// else if (temp <= 10) {
//   alert("Oh! It is cold as ice.")
// }
// else {
//   alert("Please enter a number");
// }


// Exercise 11
// var num1 = +prompt("First number");
// var num2 = +prompt("Second number");
// var opt = prompt("Select an Operation (+, -, *, /, %)");

// if (isNaN(num1) || isNaN(num2)) {
//   alert("Invalid entry!");
// }
// else if (opt === "+") {
//   var result = num1 + num2;
//   alert(result);
// }
// else if (opt === "-") {
//   var result = num1 - num2;
//   alert(result);
// }
// else if (opt === "*") {
//   var result = num1 * num2;
//   alert(result);
// }
// else if (opt === "/") {
//   var result = num1 / num2;
//   alert(result);
// }
// else if (opt === "%") {
//   var result = num1 % num2;
//   alert(result);
// }
// else {
//   alert("Please specify an operation!")
// }





// -------------------- Chapters 12-13: "IF ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS" --------------------

// Exercise 1
// var char = prompt("Enter a character");
// var result = char.charCodeAt();

// if (result >= 48 && result <= 57) {
//   alert(char + " " + "is a number");
// }
// else if (result >= 65 && result <= 90) {
//   alert(char + " " + "is an Uppercase letter");
// }
// else if (result >= 97 && result <= 122) {
//   alert(char + " " + "is a Lowercase letter");
// }
// else {
//   alert(char + " " + "is neither a number nor an alphabet");
// }


// Exercise 2
// var int1 = +prompt("Enter first integer");
// var int2 = +prompt("Enter second integer");

// if (int1 > int2 || int1 < int2) {
//   var result = Math.max(int1, int2)
//   alert(result);
// }
// else if (int1 = int2) {
//   alert("Both are equal");
// }


// Exercise 3
// var num = +prompt("Enter a number");

// if (num > 0) {
//   alert("The value is positive");
// }
// else if (num < 0) {
//   alert("The value is negative");
// }
// else if (num == 0) {
//   alert("It is a Zero");
// }
// else {
//   alert("It is probably not a number");
// }


// Exercise 4
// var vowel = prompt("Enter a vowel");

// if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" || vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U") {
//   alert(true);
// }
// else {
//   alert(false);
// }


// Exercise 5
// var password = prompt("Enter your password");
// var confirmPass;

// if (password === "") {
//   password = prompt("Please enter your password");
// }
// else {
//   var confirmPass = prompt("Confirm your password");
// }

// if (password !== "" && confirmPass == undefined) {
//   confirmPass = prompt("Confirm your password");
// }

// if (typeof password !== "undefined" && password === confirmPass) {
//   alert("Correct! The password you entered matches the original password");
// }
// else {
//   alert("Incorrect password");
// }


// Exercise 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting);
// }
// else {
// greeting = "Good evening";
// document.write(greeting);
// }


// Exercise 7
// var time = +prompt("Enter current time in 24 hours clock format", 1900);

// if (time >= 0000 && time < 1200) {
//   alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//   alert("Good Evening");
// }
// else if (time >= 2100 && time <= 2359) {
//   alert("Good Night");
// }
// else {
//   alert("Invalid entry! Try again")
// }





// ------------------------------ Chapters 13-16: "ARRAYS" ------------------------------

//  Exercise 1
// var stdNames = [];


// Exercise 2
// var stdNames = new Array();


// Exercise 3
// var cities = new Array("London", "Tokyo", "Amsterdam", "Madrid");
// // OR
// var cities = ["London", "Tokyo", "Amsterdam", "Madrid"];


// Exercise 4
// var numbers = new Array(1, 2, 3, 4);
// // OR
// var numbers = [1, 2, 3, 4];


// Exercise 5
// var boolean = new Array(true, false);
// // OR
// var boolean = [true, false]


// Exercise 6
// var mixed = new Array(4);
// mixed[0] = "Karachi";
// mixed[1] = 1;
// mixed[3] = true;
// // OR
// var mixed = ["Karachi", 1, , true];


// Exercise 7
// document.write("<h2>Qualifications:</h2>")

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for (var i = 0; i < qualifications.length; i++) {
//     document.write(i+1 + ") " + qualifications[i] + "<br />")
// }


// Exercise 8
// var stdNames = ["Michael", "John", "Tony"];

// var scores = [320, 230, 480];

// var totalMarks = 500;

// for (var i = 0; i < scores.length; i++) {
// document.write("Score of " + stdNames[i] + " is " + scores[i] + ". Percentage: " + (scores[i] / totalMarks) * 100 + "%<br />");
// }


// Exercise 9
// var colors = ["red", "green", "blue"];
// console.log(colors);

// // a.
// var addToStart = prompt("Enter a color name you want to add to the beginning");
// colors.unshift(addToStart);
// console.log(colors);

// // b.
// var addToEnd = prompt("Enter a color name you want to add to the end");
// colors.push(addToEnd);
// console.log(colors);

// // c.
// var addValue1 = prompt("Enter first color");
// var addValue2 = prompt("Enter second color");
// colors.unshift(addValue1, addValue2)
// console.log(colors);

// // d.
// colors.shift();
// console.log(colors);

// // e.
// colors.pop();
// console.log(colors);

// // f.
// var addIndex = prompt("At which index do you want to add a color?");
// var addColor = prompt("Which color do you want to add?");
// colors.splice(addIndex, 0, addColor);
// console.log(colors);

// // g.
// var deleteIndex = prompt("At which index do you want to delete the color/s?");
// var deleteNum = prompt("How many colors do you want to delete?");
// colors.splice(deleteIndex, deleteNum);
// console.log(colors);


// Exercise 10
// var stdScores = [320, 230, 480, 120];
// document.write("<h2>Scores of Students</h2>" + stdScores);

// stdScores.sort();
// document.write("<h2>Ordered Scores of Students</h2>" + stdScores);
// // OR
// function bubbleSort(stdScores) {
//     for (var i = 0; i < stdScores.length - 1; i++) {
//         for (var j = 0; j < stdScores.length - 1 - i; j++) {
//             if (stdScores[j] > stdScores[j + 1]) {
//                 [stdScores[j], stdScores[j + 1]] = [stdScores[j + 1], stdScores[j]];
//             }
//         }
//     }
//     return stdScores;
// }
// // console.log(bubbleSort(stdScores));
// document.write("<h2>Ordered Scores of Students</h2>" + bubbleSort(stdScores));


// Exercise 11
// var cities = ["Karachi", " Lahore", " Islamabad", " Quetta", " Peshawar"];
// document.write("<h2>Cities List:</h2>" + cities);

// var selectedCities = cities.slice(2, 5);
// document.write("<h2>Selected Cities List:</h2>" + selectedCities + "<br />");


// Exercise 12
// var arr = ["This", " is", " my", " cat"];

// document.write("<h2>Array:</h2>" + arr);

// document.write("<h2>String:</h2>");
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i]);
// }
// OR
// var text = arr.join(" ");
// document.write(text);


// Exercise 13     // FIFO - First In First Out
// var devices = ["keyboard", " mouse", " printer", " monitor"];
// document.write("<h3>Devices:</h3>" + devices + "<br /><br />")

// for (var i = 0; i = devices.length; i++) {
//     var firstElement = devices.shift();
//     document.write("Out:<br />" + firstElement + "<br />");
// }


// Exercise 14     // LIFO - Last In Last Out
// var devices = [" keyboard", " mouse", " printer", " monitor"];
// document.write("<h3>Devices:</h3>" + devices + "<br /><br />")

// for (var i = 0; i = devices.length; i++) {
//     var lastElement = devices.pop();
//     document.write("Out:<br />" + lastElement + "<br />");
// }


// Exercise 15
// var mobCompanies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<label for='companies'>Phone Manufacturers:<select name='manufacturers' id='companies'><option value='#' selected disabled>Select an option</option>");
// for (var i = 0; i < mobCompanies.length; i++) {
//     document.write("<option value='" + mobCompanies[i] + "'>" + mobCompanies[i] + "</option>");
// }
// document.write("</select></label>");





// ------------------------------ Chapters 17-20: "ARRAYS AND LOOP" ------------------------------

// Exercise 1
// var emptyArr = [
//     [], 
//     [], 
//     [], 
//     []
// ];


// Exercise 2
// var matrixArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];


// Exercise 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br />");
// }


// Exercise 4
// var tableNum = +prompt("Enter a number to display its Multiplication Table");
// var tableLength = +prompt("Enter a length for your table");

// if (!tableNum || tableNum == (isNaN) || !tableLength || tableLength == (isNaN)) {
//     document.write("Invalid Entry!")
// } else {
// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNum + " x " + i + " = " + tableNum * i + "<br />");
// }
// }


// Exercise 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i <= 4; i++) {
//     document.write(fruits[i] + "<br />");
// }
// document.write("<br />");

// for (var i = 0; i <= 4; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br />");  
// }


// Exercise 6
// document.write("<h2>Counting:</h2>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h2>Reverse Counting:</h2>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<h2>Even Numbers:</h2>");
// for (var i = 0; i <= 20; i++) {
//     if (i%2 == 0) {
//         document.write(i + ", ");
//     }
// }

// document.write("<h2>Odd Numbers:</h2>");
// for (var i = 1; i <= 20; i++) {
//     if (i%2 !== 0) {
//         document.write(i + ", ");
//     }
// }

// document.write("<h2>Series:</h2>");
// for (var i = 1; i <= 20; i++) {
//     if (i%2 == 0) {
//         document.write(i + "k, ");
//     }
// }


// Exercise 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var isAvailable = false;

// var userSearch = prompt("Welcome to ABC Bakery, What do you want to order?");
// for (var i = 0; i <= A.length; i++) {
//     if (userSearch === A[i]) {
//         isAvailable = true;
//         alert(A[i] + " is available at index " + [i] + " in our bakery");
//         break
//     }
// }
// if (!isAvailable) {
//     alert("We are Sorry! " + userSearch + " is not available in our bakery");
// }


// Exercise 8
// var A = [24, 53, 78, 91, 12];

// document.write("Array items:" + " ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br />The largest number is" + " " + Math.max(...A) + "<br /><br />");


// Exercise 9
// var A = [24, 53, 78, 91, 12];

// document.write("Array items:" + " ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br />The smallest number is" + " " + Math.min(...A) + "<br /><br />");


// Exercise 10
// document.write("<h2>Multiples of 5</h2>");
// for (var i = 1; i <= 100; i++) {
//     if (i%5 == 0) {
//         document.write(i + ", ");
//     }
// }





// ------------------------------ Chapters 21-25: "STRING METHODS" ------------------------------

// Exercise 1
// var firstName = prompt("Enter First name");
// var lastName = prompt("Enter Last name");
// var capFirst = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// var capLast = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
// var fullName = alert("Welcome," + " " + capFirst + " " + capLast);


// Exercise 2
// var favModel = prompt("Enter your favorite mobile phone model");
// var length = favModel.length;
// var arr = favModel.split(" ");

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
// }
// var titleCase = arr.join(" ");
// document.write("My favorite phone is:" + " " + titleCase + "<br />Length of string:" + length);


// Exercise 3
// var nationality = "Pakistani";
// var indexNum = nationality.indexOf("n");
// document.write("String:" + " " + nationality + "<br />Index of 'n':" + " " + indexNum + "<br />");


// Exercise 4
// var greeting = "Hello World";
// var lastIndex = greeting.lastIndexOf("l");
// document.write("String:" + " " + greeting + "<br />Last index of 'l':" + " " + lastIndex + "<br />");


// Exercise 5
// nationality = "Pakistani";
// var atIndex3 = nationality.charAt(3);
// document.write("String:" + " " + nationality + "<br />Character at index 3:" + " " + atIndex3 + "<br />");


// Exercise 6
// var firstName = prompt("Enter First name");
// var lastName = prompt("Enter Last name");
// var capFirst = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// var capLast = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
// var fullName = alert("Welcome," + " " + capFirst.concat(" " + capLast));


// Exercise 7
// var city = "Hyderabad";
// var replacement = city.replace("Hyder", "Islam");
// document.write("City:" + " " + city + "<br />After replacement:" + " " + replacement + "<br />");


// Exercise 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replacedMsg = message.replace(/and/g , "&");
// document.write(replacedMsg + "<br />");


// Exercise 9
// var string = "472";
// document.write("Value:" + " " + string + "<br />Type:" + " " + typeof string + "<br />");
// var toNum = Number(string);
// document.write("Value:" + " " + toNum + "<br />Type:" + " " + typeof toNum);


// Exercise 10
// var favSport = prompt("Enter your favorite sport");
// var upperCase = favSport.toUpperCase();
// document.write("User input:" + " " + favSport + "<br />Upper case:" + " " + upperCase + "<br /><br />");


// Exercise 11
// var nickname = prompt("Enter your Nickname");
// var arr = nickname.split(" ");

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
// }
// var titleCase = arr.join(" ");

// document.write("User input:" + " " + nickname + "<br />Title case:" + " " + titleCase + "<br /><br />");


// Exercise 12
// var num = 35.36;
// var numToString = parseInt(num.toString().replace(".",""), 10);

// document.write("Number:" + " " + num + "<br />Result:" + " " + numToString + "<br /><br />");


// Exercise 13
// var username = prompt("Enter username");

// if (!username) {
//         alert("Please enter a username");
//         window.location.reload();
// }
// for (var i = 0; i < username.length; i++) {
//         var asciiCode = username[i].charCodeAt();

//         if (asciiCode === 33 || asciiCode === 44 || asciiCode === 46 || asciiCode === 64) {
//             alert("Please enter a valid username");
//             window.location.reload();
//             break;
//         }
// }
// OR

// var username = prompt("Enter username");
// var asciiCodes = [33, 44, 46, 64];

// if (!username) {
//     alert("Please enter a username");
//     window.location.reload();
// }
// for (var i = 0; i < username.length; i++) {
//         if (username.length < 3 || asciiCodes.includes(username.charAt(i).charCodeAt())) {
//             alert("Please enter a valid username");
//             window.location.reload();
//             break;
//         }
// }


// Exercise 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var isAvailable = false;

// var userSearch = prompt("Welcome to ABC Bakery, What so you want to order?").toLowerCase().trim();
// for (var i = 0; i <= A.length; i++) {
//     if (userSearch === A[i]) {
//         isAvailable = true;
//         alert(A[i] + " is available at index " + [i] + " in our bakery");
//         break;
//     }
// }
// if (!isAvailable) {
//     alert("We are Sorry! " + userSearch + " is not available in our bakery");
// }


// Exercise 15
// var password = prompt("Enter password");

// if (password.length >= 6) {
//     if (isNaN(password.charAt(0))) {
//         for (var i = 0; i < password.length; i++) {
//             var flag = false;
//             if (password.match(/[a-zA-Z]/g) && password.match(/[0-9]/g)) {
//                 var flag = true;
//                 break;
//             }
//         }
//         if (flag == false) {
//             alert("Password should contain atleast one alphabet and one number");
//             window.location.reload();
//         }
//     }
//     else {
//         alert("Password cannot begin with a number\nPlease enter a valid Password");
//         window.location.reload();
//     }
// }
// else {
//     alert("Password must be at least 6 characters long");
//     window.location.reload();
// }


// Exercise 16
// var university = "University of Karachi";
// var arr = university.split("");

// for (var i = 0; i < arr.length; i++){
// document.write(arr[i] + "<br />");
// }


// Exercise 17
// var userInput = prompt("Enter your Country", "Pakistan");
// var lastChar = userInput.charAt(userInput.length-1);

// document.write("User input:" + " " + userInput + "<br />Last character of input:" + " " + lastChar);


// Exercise 18
// var string = "The quick brown fox jumps over the lazy dog";
// var lowerCase = string.toLowerCase();
// var match = (lowerCase.match(/the /g)).length;

// document.write("Text:" + " " + string + "<br />There are" + " " + match + " " + "occurence(s) of the word 'the'");





// ------------------------------ Chapters 26-30: "MATH METHODS" ------------------------------

// Exercise 1
// var posInteger = prompt("Enter a positive integer");
// var flag = false;

// if (posInteger > 0) {
//     flag = true;
//     // a
//     document.write("Number:" + " " + posInteger + "<br />");

//     // b
//     document.write("Round off value:" + " " + Math.round(posInteger) + "<br />");

//     // c
//     document.write("Floor value:" + " " + Math.floor(posInteger) + "<br />");

//     // d
//     document.write("Ceil value:" + " " + Math.ceil(posInteger) + "<br />");
// }

// if (flag == false) {
//     alert("Please enter a positive value!");
// }


// Exercise 2
// var negFloat = prompt("Enter a negative floating point");
// var flag = false;

// if (negFloat < 0 && negFloat % 1 !== 0) {
//     flag = true;
//     // a
//     document.write("Number:" + " " + negFloat + "<br />");

//     // b
//     document.write("Round off value:" + " " + Math.round(negFloat) + "<br />");

//     // c
//     document.write("Floor value:" + " " + Math.floor(negFloat) + "<br />");

//     // d
//     document.write("Ceil value:" + " " + Math.ceil(negFloat) + "<br />");
// }

// if (flag == false) {
//     alert("Please enter a negative floating value!");
// }


// Exercise 3
// var num = -4;
// var absoluteNum = Math.abs(num);

// document.write("The absolute value of" + " " + num + " " + "is" + " " + absoluteNum + "<br />");


// Exercise 4
// var rdmDiceValue = Math.floor(Math.random() * 6 + 1);

// document.write("Random dice value:" + " " + rdmDiceValue + "<br />");


// Exercise 5
// var rdmCoinValue = Math.floor(Math.random() * 2 + 1);

// document.write(rdmCoinValue + "<br />");

// if (rdmCoinValue == 1) {
//     document.write("Random coin value: Tails<br />");
// }
// else {
//     document.write("Random coin value: Heads<br />");
// }


// Exercise 6
// var rdmNumber = Math.floor(Math.random() * 100 + 1);

// document.write("Random number between 1 and 100:" + " " + rdmNumber + "<br />");


// Exercise 7
// var userWeight = prompt("Enter your weight (in Kilograms)");
// var parse = parseFloat(userWeight);

// document.write("Your weight is:" + " " + parse + " " + "Kilograms");


// Exercise 8
// var rdmSecretNum = Math.floor(Math.random() * 10 + 1);
// var userNum = +prompt("Enter a number between 1 and 10");

// var popperEmoji = String.fromCodePoint(0x0001F389);
// var frowningEmoji = String.fromCodePoint(0x0001F641);

// if (userNum === rdmSecretNum) {
// alert("Congratulations!" + " " + popperEmoji + " " + "You got it right");
// }
// else {
//     alert(frowningEmoji + " " + "Try again!");
// }





// ------------------------------ Chapters 31-34: "DATE METHODS" ------------------------------

// Exercise 1
// let currentDate = new Date();
// console.log(currentDate);


// Exercise 2
// let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
// let currentMonth = new Date().getMonth();

// alert(`Current month: ${months[currentMonth]}`);


// Exercise 3
// let daysOfWeek = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
// let currentDay = new Date().getDay();

// alert(`Today is ${daysOfWeek[currentDay]}`);


// Exercise 4
// let currentDay = new Date().getDay();

// (currentDay === 0 || currentDay === 6) ? alert(`It's Fun Day!`) 
// : alert(`Today is another chance to get better`);


// Exercise 5
// let currentDate = new Date().getDate();

// (currentDate < 16) ? alert(`First fifteen days of the month`) 
// : alert(`Last days of the month`);


// Exercise 6
// let currentDate = new Date();
// let milliSeconds = new Date().getTime();
// let minutes = Math.floor((new Date().getTime()) / (1000 * 60));

// console.log(`Current Date: ${currentDate}
// Elapsed milliseconds since Januray 1, 1970: ${milliSeconds}
// Elapsed minutes since Januray 1, 1970: ${minutes}`);


// Exercise 7
// let currentHour = new Date().getHours();

// (currentHour < 12) ? alert(`It's ${currentHour} AM`)
// : (currentHour === 12) ? alert(`It's ${currentHour} PM`)
// : alert(`It's ${currentHour -= 12} PM`);


// Exercise 8
// let laterDate = new Date(2021, 0, 0);
// console.log(`Later Date: ${laterDate}`);
// // OR
// var lastDayOfYear = new Date(2020, 11 + 1, 0);
// console.log(`Later Date: ${lastDayOfYear}`);
// // OR
// function lastDay(y = 2022, m = 11) {
//     return new Date(y, m + 1, 0);
// }
// console.log(`Later Date: ${lastDay(2020, 11)}`);


// Exercise 9
// let startingDate = new Date(2022, 3, 2, 18, 50, 33, 0); // Parameters could equally be: `Apr 2, 2022, 18:50:33`
// let currentDate = new Date();
// let startingMilliSecs = startingDate.getTime();
// let currentMilliSecs = currentDate.getTime();
// let diff = currentMilliSecs - startingMilliSecs;

// console.log(`${Math.floor(diff / (1000 * 60 * 60 * 24))} days have passed since 1st Ramadan, 1443 AH (2022)`);


// Exercise 10
// let refDate = new Date(2015, 11, 5, 22, 50, 16);
// let yearStart = new Date(2015, 0);
// let diff = refDate - yearStart;

// console.log(`On reference date: ${refDate},\n${Math.round(diff / (1000))} seconds have passed since`);


// Exercise 11
// let currentDate = new Date();
// let changeDate = new Date();

// let subtractHour = changeDate.setHours(changeDate.getHours() - 1);
// let anHourAhead = new Date(subtractHour);

// console.log(`Current date: ${currentDate}\n1 hour ago, it was ${anHourAhead}`);


// Exercise 12
// let currentDate = new Date();
// let changeDate = new Date();

// let subtractYear = changeDate.setFullYear(changeDate.getFullYear() - 100);
// let aYearAhead = new Date(subtractYear);

// console.log(`Current date: ${currentDate}\n100 years back, it was ${aYearAhead}`);


// Exercise 13
// let userAge = +prompt(`Enter your age`);
// let subtractYears = new Date().setFullYear(new Date().getFullYear() - userAge);
// let birthYear = new Date(subtractYears).getFullYear();

// alert(`Your age is ${userAge}\nYour birth year is ${birthYear}`);


// Exercise 14
// let yourName = prompt(`To generate your K-Electric bill\nEnter your full name`);
// let arr = yourName.split(` `);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
// }
// let customerName = arr.join(` `);

// let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
// let currentMonth = new Date().getMonth();

// let noOfUnits = 410;
// let chargesPerUnit = 16;

// let netAmount = noOfUnits * chargesPerUnit;
// let latePaymentSurcharge = 350;
// let grossAmount = netAmount + latePaymentSurcharge;

// document.write(`<h1>K-Electric bill</h1>
// Customer Name: <b>${customerName}</b><br />
// Month: <b>${months[currentMonth]}</b><br />
// Number of units: <b>${noOfUnits}</b><br />
// Charges per unit: <b>${chargesPerUnit}</b><br /><br />
// Net Amount Payable (within Due Date): <b>${netAmount.toFixed(2)}</b><br />
// Late Payment Surcharge: <b>${latePaymentSurcharge}</b><br />
// Gross Amount Payable (after Due Date): <b>${grossAmount.toFixed(2)}</b><br />`);





// ------------------------------ Chapters 35-38: "FUNCTION" ------------------------------

// Exercise 1
// function currentDate() {
//     let now = new Date();
//     return now;
// }
// console.log(currentDate());


// Exercise 2
// function fullName(first = "", last = "") {
//     first = prompt("Enter First Name");
//     last = prompt("Enter Last Name");
//     let fullName = `${first} ${last}`;
//     return fullName;
// }
// alert(`Hi ${fullName()}! Welcome to our website`);


// // Exercise 3
// function sum(val1, val2) {
//     val1 = +prompt("Enter a number");
//     val2 = +prompt("Enter another number");
//     let sum = val1 + val2;
//     return sum;
// }
// alert(`The sum is ${sum()}`);


// Exercise 4
// function calc(val1, opt, val2) {
//     val1 = +prompt("Enter a number");
//     opt = prompt("Specify an operator");
//     val2 = +prompt("Enter another number");
//     let calculation = eval(val1 + opt + val2);
//     return calculation;
// }
// alert(`Answer: ${calc()}`);


// Exercise 5
// function square(val = 0) {
//     val = +prompt("Enter a number");
//     let square = val * val;
//     return square;
//     // OR
//     // let square = Math.pow(val, 2);
//     // return square;
//     // OR
//     // let square = val ** 2;
//     // return square;
// }
// alert(`Square: ${square()}`);


// Exercise 6
// function factorialOf(num) {
//     num = +prompt("Enter a number");

//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     for (let i = num - 1; i >= 1; i--) {
//         num *= i;
//     }
//     return num;
// }
// alert(`Factorial: ${factorialOf()}`);


// Exercise 7
// function counting(startNum, endNum) {
//     startNum = +prompt("Enter Start Number");
//     endNum = +prompt("Enter End Number");

//     if (startNum < endNum) {
//         for (let i = startNum; i <= endNum; i++) {
//             console.log(i);
//         }
//     } else if (endNum < startNum) {
//         for (let i = startNum; i >= endNum; i--) {
//             console.log(i);
//         }
//     } else if (startNum === endNum) {
//         console.log(startNum);
//     } else {
//         alert(`Please enter a number`);
//     }
// }
// counting();


// Exercise 8
// function hypotenuse(base, perpendicular) {
//     base = +prompt("Enter base value");
//     perpendicular = +prompt("Enter perpendicular value");

//     function calculateSquare() {
//         square = {
//         baseSquare: base ** 2,
//         perpSquare: perpendicular ** 2,
//         }
//         return square;
//     }
//     let hypotenuse = +Math.sqrt(calculateSquare().baseSquare + calculateSquare().perpSquare).toFixed(2);
//     return hypotenuse;
// }
// console.log(`Hypotenuse is ${hypotenuse()}`);
// // OR
// function hypotenuse(base, perpendicular) {
//     base = +prompt("Enter base value");
//     perpendicular = +prompt("Enter perpendicular value");

//     // return +Math.hypot(base, perpendicular).toFixed(2);
//     // OR
//     return +Math.sqrt(base * base + perpendicular * perpendicular).toFixed(2);
// }
// console.log(`Hypotenuse is ${hypotenuse()}`);


// Exercise 9
// // Arguments as value
// function areaOfRectangle(width, height) {

//     let a = width * height;
//     return a;
// }
// console.log(`Area of Rectangle = ${areaOfRectangle(4, 5)} square units`);
// // OR
// console.log(`Area of Rectangle = ${areaOfRectangle(prompt("Enter width"), prompt("Enter height"))} square units`);

// // Arguments as variables
// function areaOfRectangle(width, height) {

//     let a = width * height;
//     return a;
// }
// let width = prompt("Enter width");
// let height = prompt("Enter height");

// console.log(`Area of Rectangle = ${areaOfRectangle(width, height)} square units`);


// Exercise 10
// function palindrome(str) {
//     str = prompt("Enter String");
//     let re = /[\W_]/g;
//     let lowRegStr = str.toLowerCase().replace(re, '');
//     let reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
// }
// if (palindrome()) {
//     alert(`It's a palindrome`);
// } else {
//     alert(`It's not a palindrome`);
// }


// Exercise 11
// function titleCase(str) {
//     str = prompt(`Enter string`).split(" ");
//     for (let i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
//     }
//     let titleCase = str.join(` `);
//     return titleCase;
// }
// alert(titleCase());


// Exercise 12
// function longestWord(string) {
//     string = prompt("Enter string").split(" ");
//     let longest = 0;
//     let word = null;
//     for (let i = 0; i < string.length - 1; i++) {
//         if (longest < string[i].length) {
//             longest = string[i].length;
//             word = string[i];
//         }
//     }
//     return word;
// }
// alert(longestWord());


// Exercise 13
// function noOfOccurences(string, letter) {
//     var string = prompt("Enter String");
//     var letter = prompt("Enter a letter");
//     var occurence = (string.match(new RegExp(letter, "g")) || []).length;
//     return occurence;
// }
// alert(noOfOccurences());


// Exercise 14
// var radius = +prompt("Enter radius");

// function calcCircumference(radius) {
//     var cirCircumference = +(2 * Math.PI * radius).toFixed(2);
//     return cirCircumference;
// }
// console.log("The circumference is" + " " + calcCircumference(radius) + "cm");

// function calcArea(radius) {
//     var area = +(Math.PI * (radius ** 2)).toFixed(2);
//     return area;
// }
// console.log("The area is" + " " + calcArea(radius));





// ------------------------------ Chapters 39-42: "FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS" ------------------------------

// Exercise 1
// var a = +prompt("Enter a number");
// var b = +prompt("Enter its power");
// function calcPower(a, b) {
//     return a ** b;
// }
// console.log(calcPower(a, b));


// Exercise 2
// var year = +prompt("Enter a year");

// function leap(year) {
//     if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//         return alert("Its a leap year");

//     } else {

//         return alert("Not a leap year");
//     }
//     // OR
//     // var leapYear = new Date(year, 1, 29).getDate() === 29;
//     // if (leapYear) {
//     //     return alert("Its a leap year");
//     // } else {
//     //     return alert("Not a leap year");
//     // }
// }

// leap(year);


// Exercise 3
// var a = +prompt("Enter length of side a");
// var b = +prompt("Enter length of side b");
// var c = +prompt("Enter length of side c");

// function s() {
//     var s = (a + b + c) / 2;
//     return s;
// }
// console.log(s(a, b, c));

// function areaOfTriangle(s) {
//     var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
//     return area;
// }
// console.log(areaOfTriangle(s(a, b, c)));


// Exercise 4
// var english = +prompt("Enter marks obtained in English");
// var urdu = +prompt("Enter marks obtained in Urdu");
// var maths = +prompt("Enter marks obtained in Maths");
// var marksObtained = english + urdu + maths;
// var totalMarks = 300;

// function mainFunction() {
//     function percentage() {
//         var percent = +((marksObtained / totalMarks) * 100).toFixed(2) + "%";
//         return percent;
//     }
//     alert("Percentage is " + percentage());
//     function average() {
//         var average = marksObtained / 3;
//         return average;
//     }
//     alert("Average is " + average());
// }
// mainFunction();


// Exercise 5
// var sentence = prompt("Enter String");
// var char = prompt("Enter a character");

// function indexNo() {
//     var indexNum = sentence.search(char);
//     return indexNum;

//     // // OR
//     // for (var i = 0; i < sentence.length; i++) {
//     //     if (sentence[i] === char) {
//     //         var indexNum = sentence.search(sentence[i]);
//     //         return indexNum;
//     //     }
//     // }
// }
// alert("Index no of '" + char + "' is " + indexNo());


// Exercise 6
// var sentence = prompt("Enter a sentence").toLowerCase();

// if (!sentence || sentence.length > 25) {
//     alert("Sentence can be maximum 25 characters long");
// } else {
//     function delVowels() {

//         for (var i = 0; i < sentence.length; i++) {
//             var char = sentence[i];
//             if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//                 console.log("Given sentence: " + sentence);
//                 var delVowels = sentence.replace(/[aeiou]/g, "");
//                 console.log("Deleted vowels from given sentence: " + delVowels);
//                 break;
//             }
//         }
//     }
// }
// delVowels();


// Exercise 7
// var str = prompt("Enter String");
// function findOccurances(str) {
//     var words = str.split(" ");
//     var count = 0;
//     for (var i = 0; i < words.length; i++) {
//         for (var j = 0; j < words[i].length; j++) {
//             var char = words[i].slice(j, j + 1).toLowerCase();
//             var nextChar = words[i].slice(j + 1, j + 2).toLowerCase();
//             switch (char) {
//                 case "a":
//                 case "e":
//                 case "i":
//                 case "o":
//                 case "u":
//                     switch (nextChar) {
//                         case "a":
//                         case "e":
//                         case "i":
//                         case "o":
//                         case "u":
//                             count++;
//                     }
//             }
//         }

//     }
//     return count;
// }

// var count = findOccurances(str);
// alert(count);


// Exercise 8
// var distance = parseInt(prompt("Enter distance in Km"));

// function kmToFeet() {
//     return distance * 3280.8;
// }

// function kmToMeters() {
//     return distance * 1000;
// }

// function kmToinches() {
//     return distance * 39370;
// }

// function kmToCentimeter() {
//     return distance * 100000;
// }

// console.log("Distance converted in Feet is " + kmToFeet() + " ft");
// console.log("Distance converted in Meters is " + kmToMeters() + " m");
// console.log("Distance converted in Inches is " + kmToinches() + " in");
// console.log("Distance converted in Centimeters is " + kmToCentimeter() + " cm");


// Exercise 9
// function overTimePay() {
//     var hours;
//     var count = 1;
//     var overTime = 0;

//     while (count <= 10) {
//         hours = +prompt("Enter no of hours employee " + count + " has worked");

//         if (hours > 40) {
//             overTime = overTime + (hours - 40);

//             console.log("Employee  " + count + "  has worked  " + hours + "  hours");
//             console.log("Overtime pay is Rs " + (hours - 40) * 12);
//         }
//         else {
//             console.log("no of hours worked is " + hours + " which is less than 40 hours, so no over time pay for employee " + count);
//         }
//         count++;
//     }
//     console.log("Total Overtime pay is Rs " + overTime * 12);
//     return 0;
// }
// overTimePay();


// Exercise 10
// function currencyNotes() {

//     var amount = +prompt("Enter the amount to be withdrawn (in hundreds):");

//     var notesOf100 = Math.floor(amount / 100);
//     var notesOf50 = Math.floor((amount % 100) / 50);
//     var notesOf10 = Math.floor(((amount % 100) % 50) / 10);
//     var remainingAmount = Math.floor(((amount % 100) % 50) % 10);

//     switch (remainingAmount) {
//         case 0:
//             alert("You will have " + notesOf100 + " hundred notes, " + notesOf50 + " fifty notes, " + notesOf10 + " ten notes.");
//         break;
//         default:
//             alert("You will have " + notesOf100 + " hundred notes, " + notesOf50 + " fifty notes, " + notesOf10 + " ten notes and " + remainingAmount + " remaining.");
//         }
// }
// currencyNotes();





// ------------------------------ Chapters 43-48: "EVENTS" ------------------------------

// Exercise 1
// document.write("<a href='JavaScript:void(0)' onclick = 'alertBox()'>Click here</a>");
// function alertBox() {
//     alert("This is a link Event");
// }


// Exercise 2
// document.write('<h2>Mobile Phone lookup</h2>' +
// '<div style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center;">' +
// '<div onclick="mobileMsg()" style="border: 2px solid black; width: 200px; height: 250px; display: flex; justify-content: center; align-items: center;"><figure><img src="./images/iPhone X - Silver.png" width="215px" alt="Mobile Image"><figcaption>iPhone X - Silver</figcaption></figure></div>' +
// '<div onclick="mobileMsg()" style="border: 2px solid black; width: 200px; height: 250px; display: flex; justify-content: center; align-items: center;"><figure><img src="./images/iPhone 7 - Gold straight.png" width="200px" alt="Mobile Image"><figcaption>iPhone 7 - Gold</figcaption></figure></div>' +
// '<div onclick="mobileMsg()" style="border: 2px solid black; width: 200px; height: 250px; display: flex; justify-content: center; align-items: center;"><figure><img src="./images/iPhone 7 - rosegold.png" width="215px" alt="Mobile Image"><figcaption>iPhone 7 - Rose Gold</figcaption></figure></div>' +
// '<div onclick="mobileMsg()" style="border: 2px solid black; width: 200px; height: 250px; display: flex; justify-content: center; align-items: center;"><figure><img src="./images/iPhone 11 Pro - Pinegreen.png" width="200px" alt="Mobile Image"><figcaption>iPhone 11 Pro - Pinegreen</figcaption></figure></div>' +
// '<div onclick="mobileMsg()" style="border: 2px solid black; width: 200px; height: 250px; display: flex; justify-content: center; align-items: center;"><figure><img src="./images/iPhone 11 Pro Max - Blue.png" width="190px" alt="Mobile Image"><figcaption>iPhone 11 Pro Max - Blue</figcaption></figure></div>' +
// '</div><br /><br />');

// function mobileMsg() {
//     alert("Thanks for purchasing a phone from us");
// }


// Exercise 3
// document.write('<table id="table">' +
//         '<thead><th>Index</th><th>Name</th><th>Class</th></thead>' +
//         '<tbody><tr><td>0</td><td>Finn</td><td>10</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>1</td><td>Ella</td><td>8</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>2</td><td>Jude</td><td>6</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>3</td><td>Kai</td><td>9</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>4</td><td>Ivy</td><td>7</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>5</td><td>Sam</td><td>10</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>6</td><td>Leo</td><td>10</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>7</td><td>Eve</td><td>5</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>8</td><td>Ada</td><td>7</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//             '<tr><td>9</td><td>Zara</td><td>8</td><td><button onclick="deleteTableRow(this)">Delete</button></td></tr>' +
//         '</tbody></table>');

// var table = document.getElementById("table");
// function deleteTableRow(element) {
//     element.parentNode.parentNode.remove();
// }
// // OR
// var table = document.getElementById('table');
// for (var i = 1; i < table.rows.length; i++) {
//     table.rows[i].cells[3].onclick = function () {
//         var c = confirm("Do you want to delete this row");
//         if (c === true) {
//             index = this.parentElement.rowIndex;
//             table.deleteRow(index);
//         }
//         console.log(index);
//     }
// }


// Exercise 4
// document.write(`<img src="./Images/Strawberry.jpg" onmouseover="imageToggle('mouseover', this)"
//         onmouseout="imageToggle('mouseout', this)" width="600px" alt="">`);

// function imageToggle(condition, e) {
//     if (condition === "mouseover") {
//         e.src = "./Images/Strawberry-2.jpg";
//     } else {
//         e.src = "./Images/Strawberry.jpg";
//     }
// }


// Exercise 5
// document.write(`<h1>Counter <span id="counter">0</span></h1>
//     <button id="increase" onclick="counter('increase')">+</button>
//     <button id="decrease" onclick="counter('decrease')">-</button>
//     <button id="reset" onclick="counter('reset')">Reset</button>`);

// var count = 0;
// function counter(condition) {
//     var counter = document.getElementById("counter");
//     if (condition === "increase") {
//         ++count;
//     } else if (condition === "decrease") {
//         if (count > 0) {
//             --count;
//         }
//     } else {
//         count = 0;
//     }
//     counter.innerHTML = count;
// }





// ------------------------------ Chapters 49-52: "EVENTS" ------------------------------

// Exercise 1
// document.write(`<form id="form">
//         <fieldset style="max-width: 400px">
//         <legend><h2>Sign up</h2></legend>
//         <input type="text" placeholder="Full Name" name="Full Name" maxlength="15" required><br /><br />
//         <input type="email" placeholder="Email" name="email" required><br /><br />
//         <input type="password" placeholder="Password" name="password" minlength="6" maxlength="8" required><br /><br />
//         <input type="password" placeholder="Confirm password" name="password" minlength="6" maxlength="8" required><br /><br />
//         <label for="agree">
//             <input type="checkbox" name="terms-&-conditions" id="agree" required>
//             I agree to the <a href="#">Terms & Conditions</a>
//         </label><br /><br />
//         <button type="button" onclick="getValues()">Create account</button><br /><br />
//         <small>Already have an account?&nbsp;&nbsp;<a href="#">Log In</a></small>
//     </fieldset>
// </form>`);

// var form = document.getElementById("form");

// function getValues() {
//     if (!(form[1].value && form[2].value && form[3].value && form[4].value)) {
//         alert("Please fill out all fields");
//     } else {
//         document.write("<h1>Successfully Signed up!</h1><h2>Your Details:</h2>");
//         for (var i = 1; i < form.length - 3; i++) {
//             document.write("<b>" + form[i].placeholder + ":</b> " + form[i].value + '<br />');
//         }
//     }
// }


// Exercise 2
// document.write(`<div id="product">
//         <h1>Popular products</h1>
//         <figure>
//             <img src="./images/DATEJUST-36.webp" width="300px" alt="DATEJUST-36">
//             <figcaption>
//                 <h3>DATEJUST 36</h3>
//                 <p>Oyster, 36 mm, Oystersteel and Everose gold</p>
//             </figcaption>
//             <button onclick="getDetails()" style="padding: 10px; border: none;
//             background-color: rgb(249, 222, 159)">Read more</button>
//         </figure>
//     </div>`);

// var product = document.getElementById("product");
// var btn = product.getElementsByTagName("button");

// function getDetails() {
//     product.innerHTML = `<figure style="display: flex; align-items: flex-end;">
//     <img src="./images/DATEJUST-36.webp" width="600px" alt="DATEJUST-36">
//     <figcaption><small>Classic Watches</small><h3>DATEJUST 36</h3><p>Oyster, 36 mm, Oystersteel and Everose gold</p>
//     <h3>THIS OYSTER PERPETUAL DATEJUST 36 IN OYSTERSTEEL AND EVEROSE GOLD FEATURES A SILVER,
//     PALM-MOTIF DIAL AND A JUBLIEE BRACELET.</h3>
//     <h3>Model features</h3>
//     <ul>
//     <li>The Fluted Bezel</li>
//     <li>Everose Rolesor</li>
//     <li>The Jubliee Bracelet</li>
//     <li>The Cyclops Lens</li>
//     <li>3235 Movement</li>
//     </ul>
//     <button onclick="addToCart()" style="padding: 10px; border: none; 
//     background-color: rgb(249, 222, 159); margin-right: 30px;">Add to Cart</button>
//     <a href="./index.html"><button style="padding: 10px; border: none; 
//             background-color: rgb(249, 222, 159)">Go Back</button></a>
//     </figcaption> 
//     </figure>`
// }
// function addToCart() {
//     alert("Item added to your cart");
// }


// Exercise 3
// document.write(`<form id="std-form">
// <h2>Student Data</h2>
// <label for="name">Name:
// </label>
// <input type="text" id="name">

// <label for="class">Class:
// </label>
// <input type="text" id="class">
// <button type="button" id="add" onclick="addData(this)">Add</button>
// <br /><br />
// <table id="table">
//     <thead>
//         <th>Index</th>
//         <th>Name</th>
//         <th>Class</th>
//     </thead>
//     <tbody id="std-data">

//     </tbody>
// </form>`);

// var count = 1;
// function addData(element) {

//     var tBody = document.getElementById("std-data");
//     var nameInput = element.parentNode.childNodes[5];
//     var classInput = element.previousSibling.previousSibling;

//     if (!nameInput.value || !classInput.value) {
//         alert("Please enter Student Data");
//     } else {
//         tBody.innerHTML += `<tr>
//             <td>${count++}</td>
//             <td>${nameInput.value}</td>
//             <td>${classInput.value}</td>
//             <td><button type="button" id="edit" onclick="editData(this)">Edit</button></td>
//             <td><button type="button" id="delete" onclick="deleteTableRow(this)">Delete</button></td>
//             </tr>`;
//         nameInput.value = ""
//         classInput.value = ""
//     }
// }

// function deleteTableRow(element) {
//     var tBody = document.getElementById("std-data");
//     var sNo = +(element.parentNode.parentNode.firstElementChild.innerHTML);

//     element.parentNode.parentNode.remove();
//     for (var i = (sNo - 1); i < tBody.children.length; i++) {
//         tBody.children[i].firstElementChild.innerHTML = sNo;
//         sNo += 1;
//     }
// }

// function editData(element) {
//     var form = document.getElementById("std-form");
//     // var input = form.getElementsByTagName("input");
//     var stdName = element.parentNode.parentNode.childNodes[3];
//     var stdClass = element.parentNode.parentNode.childNodes[5];

//     var editName = prompt("Edit Name", stdName.innerHTML);
//     var editClass = prompt("Edit Class", stdClass.innerHTML);

//     stdName.innerHTML = editName;
//     stdClass.innerHTML = editClass;
// }





// ------------------------------ Chapters 58-67: "DOM" ------------------------------

// Exercise 1   // Go to index.html for html code
// // 1(i)
// var mainContent = document.getElementById("main-content");

// // 1(ii)
// console.log(mainContent.childNodes);

// // 1(iii)
// var render = mainContent.getElementsByClassName("render");
// for (var i = 0; i < render.length; i++) {
//     console.log(render[i].innerHTML);
// }

// // 1(iv)
// var firstName = document.getElementById("first-name");
// firstName.value = "Mike";

// // 1(v)
// var lastName = document.getElementById("last-name");
// var email = document.getElementById("email");
// lastName.value = "Smith";
// email.value = "mike@gmail.com";


// // Exercise 2   // Go to index.html for html code
// // 2(i)
// var form = document.getElementById("form-content");
// console.log("Node type of id 'form-content':" + " " + form.nodeType);

// // 2(ii)
// var lastName = document.getElementById("lastName");
// console.log("Node type of id 'lastName':" + " " + form.nodeType);

// var childNodeOfLastName = lastName.childNodes[0];
// console.log("Node type of child node of id 'lastName':" + " " + childNodeOfLastName.nodeType);

// // 2(iii)
// var lastName = document.getElementById("lastName");
// lastName.textContent = "Last Name: Abraham";

// // 2(iv)
// var content = document.getElementById("main-content");
// console.log(content.firstChild);
// console.log(content.lastChild);

// // 2(v)
// var lastName = document.getElementById("lastName");
// console.log(lastName.nextSibling);
// console.log(lastName.previousSibling);

// // 2(vi)
// var email = document.getElementById("email");
// console.log(email.parentNode);
// console.log("Node type of id 'email':" + " " + email.nodeType);





// ------------------------------ Chapters 69-75: "OBJECTS" ------------------------------

// Exercise 1
// var itemsArray = [
//     {
//         name: "juice",
//         price: 50,
//         quantity: 3
//     },
//     {
//         name: "cookie",
//         price: 30,
//         quantity: 9
//     },
//     {
//         name: "shirt",
//         price: 880,
//         quantity: 1
//     },
//     {
//         name: "pen",
//         price: 100,
//         quantity: 2
//     }
// ];

// var totalPriceOfItem1 = itemsArray[0].price * itemsArray[0].quantity;
// var totalPriceOfItem2 = itemsArray[1].price * itemsArray[1].quantity;
// var totalPriceOfItem3 = itemsArray[2].price * itemsArray[2].quantity;
// var totalPriceOfItem4 = itemsArray[3].price * itemsArray[3].quantity;

// console.log("Total price of" + " " + itemsArray[0].name + " " + "is" + " " + totalPriceOfItem1 + " Rs");
// console.log("Total price of" + " " + itemsArray[1].name + " " + "is" + " " + totalPriceOfItem2 + " Rs");
// console.log("Total price of" + " " + itemsArray[2].name + " " + "is" + " " + totalPriceOfItem3 + " Rs");
// console.log("Total price of" + " " + itemsArray[3].name + " " + "is" + " " + totalPriceOfItem4 + " Rs");

// var totalPriceOfAll = totalPriceOfItem1 + totalPriceOfItem2 + totalPriceOfItem3 + totalPriceOfItem4;
// console.log("Total price of all items is" + " " + totalPriceOfAll + " Rs");

// // OR

// for (var i = 0; i < itemsArray.length; i++) {
//     console.log("Total price of" + " " + itemsArray[i].name + " " + "is" + " " + itemsArray[i].price * itemsArray[i].quantity + " Rs");
// }

// var totalPriceOfAll = null;
// for (var i = 0; i < itemsArray.length; i++) {
//     totalPriceOfAll += itemsArray[i].price * itemsArray[i].quantity
// }
// console.log("Total price of all items is" + " " + totalPriceOfAll + " Rs");


// Exercise 2
// var userData = {
//     name: "David",
//     email: "david@email.com",
//     password: "who knows",
//     age: 26,
//     gender: "Male",
//     city: "Toronto",
//     country: "Canada",
// };

// var checkAge = userData.hasOwnProperty("age");
// var checkCountry = userData.hasOwnProperty("country");
// var checkFirstName = userData.hasOwnProperty("firstName");
// var checkLastName = userData.hasOwnProperty("lastName");

// console.log(checkAge);
// console.log(checkCountry);
// console.log(checkFirstName);
// console.log(checkLastName);


// Exercise 3
// // Constructor Function:
// function CartoonChar(name, age, friends, city) {
//     this.charName = name;
//     this.charAge = age;
//     this.charFriends = friends;
//     this.charCity = city;
// }

// // Creating records using the constructor
// var char1 = new CartoonChar("Tom", 8, ["Butch", "Topsy", "Toodles Galore"], "New York City");
// var char2 = new CartoonChar("Jerry", 5, ["Nibbles", "Quacker"], "New York City");
// var char3 = new CartoonChar("Alvin", 8, ["Jeanette", "Brittany", "Eleanor"], "California");
// var char4 = new CartoonChar("Charlie Brown", 8, ["Linus", "Snoopy", "Franklin", "Peppermint Patty"], "Hennepin County");
// var char5 = new CartoonChar("Mickey Mouse", 2, ["Minnie Mouse", "Donald Duck", "Pluto"], "Mouseton");


// Exercise 4
// function Citizens(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// // Form
// document.write('<form action="javascript:void(0)">' +
//     '<p>Name:<br />' +
//     '<input type="text" placeholder="Enter Name" name="name" id="name" minlength="3" maxlength="20" required>' +
//     '</p>' +

//     '<p>Gender:<br />' +
//     '<label for="radio-box1">' +
//     '<input type="radio" name="gender" id="radio-box1" value="male" checked required>Male' +
//     '</label>' +
//     '<label for="radio-box2">' +
//     '<input type="radio" name="gender" id="radio-box2" value="female" required>Female' +
//     '</label>' +
//     '</p>' +

//     '<p>Address:<br />' +
//     '<input type="text" placeholder="Enter Address" name="address" id="address" minlength="10" maxlength="70" required>' +
//     '</p>' +

//     '<p><label for="education">What is the highest level of degree you have earned?<br />' +
//     '<select name="degree" id="education" required>' +
//     '<option value="#" selected disabled>Select your option</option>' +
//     '<option value="M. Arch">M. Arch</option>' +
//     '<option value="MD-Phd">MD-Phd</option>' +
//     '<option value="MSC-SE">MSC-SE</option>' +
//     '<option value="PhD Statistics">PhD Statistics</option>' +
//     '<option value="Other">Other</option>' +
//     '</select>' +
//     '</label>' +
//     '</p>' +

//     '<p><label for="profession">What is your profession?<br />' +
//     '<select name="profession" id="profession" required>' +
//     '<option value="#" selected disabled>Select your option</option>' +
//     '<option value="Architect">Architect</option>' +
//     '<option value="Physician-scientist">Physician-scientist</option>' +
//     '<option value="Software Developer">Software Developer</option>' +
//     '<option value="Statistician">Statistician</option>' +
//     '<option value="Other">Other</option>' +
//     '</select>' +
//     '</label>' +
//     '</p>' +
//     '<button type="submit" onclick="saveData()">Submit</button>' +
//     '</form>'
// )

// let citizensArr = [];
// var count = 1;
// function saveData() {
//     var genderValue;
//     var gender = document.getElementsByName("gender");
//     for (var i = 0; i < gender.length; i++) {
//         if (gender[i].checked) {
//             genderValue = gender[i].value;
//         }
//     }

//     var citizen = {
//         sno: count++,
//         name: document.getElementById("name").value,
//         gender: genderValue,
//         address: document.getElementById("address").value,
//         education: document.getElementById("education").value,
//         profession: document.getElementById("profession").value
//     };
//     // Add entries to the array of objects
//     citizensArr.push(citizen);

//     // Reset form fields for next entries
//     document.forms[0].reset();

//     // Save to local storage
//     localStorage.setItem("citizensData", JSON.stringify(citizensArr));
// }
// // localStorage.clear()