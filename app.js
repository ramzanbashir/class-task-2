//Chapter no.4

//Q1
// var myName = ("Muhammad Ramzan");
// var age = ("22");
// var hand = ("right");

// alert(myName + age + hand);

//Q2
// var myName = ("")
// var myAge = ("")
// var myHobbie = ("")
// var myProffional = ("")
// var myFatherName = ("")

// var console = ("")
// var name = ("")
// var document = ("")
// var source = ("")
// var let = ("")

//Q3
// (a) var heading = ("<h1> Rules for naming JS variables </h1>");
// document.write(heading)

// (b) var varb = ("Variable names can only contain, numbers, $ and underscores For example: $my_1stVariable");
// document.write(varb);

//(c) var varc = ("<br> Variable must begin with a letter, $ or underscores. For example: $name, _name or name");
// document.write(varc);

//(d) var vard = ("<br> Variable names are case sensitive");
// document.write(vard);

// (e)var vare = ("<br> Variable names should not be JS keywords");
// document.write(vare);

//another method 
// document.write(heading + varb + varc + vard + vare);

//Chapter no.5

//Q1
// var text = ("Sum of 3 and 5 is ");
// var num = (3 + 5);
// document.write(text + num);

//Q2
//Subraction
// var text = ("Subtraction of 3 and 5 is ");
// var num = (3 - 5);
// document.write(text + num);

//Multiplication
// var text = ("Multiplication of 3 and 5 is ");
// var num = (3 * 5);
// document.write(text + num);

//Division
// var text = ("Division of 3 and 5 is ");
// var num = (3 / 5);
// document.write(text + num);

//Modulus
// var text = ("Modulus of 3 and 5 is ");
// var num = (3 % 5);
// document.write(text + num);

//Q3
// var num;
// var text = ("Value after variable declaration is ")
// document.write(text + num);

// var num =  5;
// document.write("<br>Initial value is: " + num);

// num++;
// document.write("<br>Value after increment is: " + num);

// var num = num + 7;
// document.write("<br>Value after addition is: " + num);

// num--;
// document.write("<br>Value after decrement is: " + num);

// var num = num % 3;
// document.write("<br>The remainder is: " + num);

//Q4
// var ticketCost = 600;
// var totalCost = (ticketCost * 5);
// document.write("Total cost of buy 5 tickets to a movie is " + totalCost + "PKR");

//Q5
// document.write("Table of 4");
// var table = 4;
// document.write("<br>4 x 1 = " + table);
// table = table + 4;
// document.write("<br>4 x 2 = " + table);
// table = table + 4;
// document.write("<br>4 x 3 = " + table);
// table = table + 4;
// document.write("<br>4 x 4 = " + table);
// table = table + 4;
// document.write("<br>4 x 5 = " + table);
// table = table + 4;
// document.write("<br>4 x 6 = " + table);
// table = table + 4;
// document.write("<br>4 x 7 = " + table);
// table = table + 4;
// document.write("<br>4 x 8 = " + table);
// table = table + 4;
// document.write("<br>4 x 9 = " + table);
// table = table + 4;
// document.write("<br>4 x 10 = " + table);

//Q6
// var celsius = (70-32)*5/9;
// document.write("<br>70°F is " + celsius + "°C")
// var fahrenheit = (25 * 9/5) + 32;
// document.write("20°C is " + fahrenheit + "°F")


//Q7
// var item1 = 650;
// var totalItem1 = item1 * 3;

// var item2 = 100;
// var totalItem2 = item2 * 7;

// var shipping = 100;
// var totalAmount = totalItem1 + totalItem2 + shipping;
// document.write("Price of item 1 is " + item1);
// document.write("<br>Quantity of item 1 is 3");
// document.write("<br>Price of item 2 is " + item2);
// document.write("<br>Quantity of item 2 is 7");
// document.write("<br>Shipping Charges is " + shipping + "<br>");
// document.write("<br>Total cost of your order is " + totalAmount);

//Q8
// var totalMarks = 980;
// var obtMarks = 804;
// var percentage = (obtMarks/totalMarks)*100;
// document.write("<br>Total marks: " + totalMarks);
// document.write("<br>Obtained marks: " + obtMarks);
// document.write("<br>Percentage: " + percentage + "%");

//Q9
// var Currency = (104.80 * 10) + (28 * 25);
// document.write("<br><br>Total Currency in PKR: " + Currency);

//Q10
// var num = (5 + 5) *(10/2);
// document.write("<br>" + num);

//Q11
// var currentYear = 2016;
// var birthYear = 1992;
// var yourAge = currentYear - birthYear;
// document.write("<br>" + yourAge);

//Q12
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 *(radius*radius);
// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of circle: " + radius);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);

//Q13
// var favSnack = "chocolate chip";
// var currentAge = 21;
// var maxAge = 65;
// var amountPerDay = 50;
// var totalNeeded = (amountPerDay * 365) * (maxAge - currentAge);
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack: " + favSnack);
// document.write("<br>Current age: " + currentAge);
// document.write("<br>Estimated maximum age: " + maxAge);
// document.write("<br>Amount of snacks per day: " + amountPerDay);
// document.write("<br>You will need " + totalNeeded + " to last you until the ripe old age of " + maxAge);

//Chapter no.06

//Q1
// var a = 10;
// document.write("<br><br>The Result:");
// document.write("<br>The value of a is: " + a);
// document.write("<br>-------------------------");

// a++;
// document.write("<br><br>The value of ++a is: " + a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of ++a is: " + a);
// a++;
// document.write("<br>Now the value of a is: " + a);

// a--;
// document.write("<br><br>The value of --a is: " + a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of a-- is: " + a);
// a--;
// document.write("<br>Now the value of a is: " + a);

//Q2



//Q3
// var Name = prompt("Please enter your name:");
// document.write("Hello, " + Name + " welcome to my website")

//Q4
// var num1 = +prompt();
// var opt = prompt();
// var num2 = +prompt();

// if (opt == "+") {
//     console.log(num1 + num2)
// }
// else if (opt == "-") {
//     console.log(num1 - num2)
// }

// else if (opt == "*") {
//     console.log(num1 * num2
//     )
// }

// else if (opt == "/") {
//     console.log(num1 / num2
//     )
// }



-----------------------------------------

// //---------------------------Q1---------------------------
//var result = prompt("Enter your city");
//if(result=="Karachi")
//{ alert("Welcome to city of lights")}

// //---------------------------Q2---------------------------
//var result = prompt("Gander");
//if (result == "male") {
//alert("Good Morning Sir")
//}
//else if (result == "female") {
//alert("Good Morning Mam");
//}
//else {
// alert("mujhay maff kr do");
//}

// //---------------------------Q3---------------------------
// var result = prompt("Enter Signal Colour");
// if (result == "Red") {
//     alert("Must stop");
// }
// else if (result = "yellow"){
// alert("Ready to move")
// }
// else if (result = "Green"){
// alert("Move now")
// }
// else{
// alert("Chal garak ho ja")
// }

// //---------------------------Q4---------------------------
// Prompt the user to input remaining fuel in car
// let remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");
// // Check if the remaining fuel is less than 0.25 litres
// if (remainingFuel < 0.25) {
//     // Display message if fuel is low
//     console.log("Please refill the fuel in your car");
// }
// else {
//     // Display message if fuel is not low
//     console.log("You have enough fuel in your car. Keep driving safely!");
// }

// //---------------------------Q5---------------------------
// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }//this statement is true

// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }//this statement is false

// c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }//this statement is false
// if (c === 13){
// alert("condition 2 is true");
// }//this statement is true
// if (++c < 14){
// alert("condition 3 is true");
// }//this statement is false
// if(c === 14){
// alert("condition 4 is true");
// }//this statement is true

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }//this statement is true

// e
// if (true){
//     alert("True");
//     }//this statement is true
//     if (false){
//     alert("False");
//     }//this statement is false

// f
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }//this statement is true


// //---------------------------Q6---------------------------
// var totalMarks1 = +prompt("Enter total marks of 1st subject:");
// var totalMarks2 = +prompt("Enter total marks of 2nd subject:");
// var totalMarks3 = +prompt("Enter total marks of 3rd subject:");
// var totalMarks = totalMarks1 + totalMarks2 +totalMarks3;
// var obtMarks1 = +prompt("Enter obtained marks of 1st subject:");
// var obtMarks2 = +prompt("Enter obtained marks of 2nd subject:");
// var obtMarks3 = +prompt("Enter obtained marks of 3rd subject:");
// var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
// var percentage1 = +(obtMarks1/totalMarks1)*100;
// var percentage2 = +(obtMarks2/totalMarks2)*100;
// var percentage3 = +(obtMarks3/totalMarks3)*100;
// var totalpercent = totalObtMarks/totalMarks*100;
// var grade;

// if(percentage1 >= "80"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }else if(percentage1 >= "70"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }else if(percentage1 >= "60"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }else if(percentage1 < "60"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry");
// }

//---------------------------Q7---------------------------
// var num1 = prompt("Guess a secret number from 1-10:");
// var num2 = 7;
// if(num1 == num2){
//     document.write("<h1>Bingo! Correct answer.</h1>");
// }else{
//     document.write(num1 + " is not secret number");
// }

//---------------------------Q8---------------------------
// var num = prompt("Enter a number:");
// if (num %3 == 0) {
//   document.write(num + " is divisible by 3");
// }
// else{
//     document.write(num + " is not divisible by 3")
// }

//---------------------------Q9---------------------------
// var num = prompt("Enter a number:");
// if(num %2 == 0){
//     document.write(num + " number is even");
// }else{
//     document.write(num + " number is odd");
// }

//---------------------------Q10---------------------------
// var temp = prompt("Enter a temperature");
// if(temp > "40"){
//     document.write("It is too hot outside.");
// }else if(temp > "30"){
//     document.write("The Weather today is Normal.");
// }else if(temp > "20"){
//     document.write("Today’s Weather is cool.");
// }else if(temp > "10"){
//     document.write("OMG! Today’s weather is so Cool.");
// }

//---------------------------Q11---------------------------
// var num1 = +prompt("Enter number 1");
// var opt = prompt("Enter operator");
// var num2 = +prompt("Enter number 2");

// if(opt == "+"){
//     document.write(num1 + num2);
// }
// else if(opt == "-"){
//     document.write(num1 - num2);
// }
// else if(opt == "*"){
//     document.write(num1 * num2);
// }
// else if(opt == "/"){
//     document.write(num1 / num2);
// }
// else if(opt == "%"){
//     document.write(num1 % num2);
// }
// else{
//     document.write("Kindly insert a number");
// }

//---------------------------xxxx---------------------------

//----------------------------------CHAP#12to13-----------------------------------------

//---------------------------Q1---------------------------
// var char = prompt("Enter character:");
// if(char >= 0){
//     document.write(char + " is number");
// }else if(char.toUpperCase() == char){
//     document.write(char + " is Upper case character");
// }else if(char.toLowerCase() == char){
//     document.write(char + " is lower case character");
// }

// //---------------------------Q2---------------------------
// var num1 = prompt("Enter a 1st integer:");
// var num2 = prompt("Enter a 2nd integer:");

// if(num1 > num2){
//     document.write(num1 + " is greater than " + num2)
// }else if(num1 == num2){
//     document.write(num1 + " is equals to " + num2)
// }

// //---------------------------Q3---------------------------
// var num = prompt("Enter a number:");
// if(num > 0){
//     document.write("The number is positive");
// }else if(num == 0){
//     document.write("The number is zero");
// }else{
//     document.write("The number is negative");
// }

// //---------------------------Q4---------------------------
// var vowels = prompt("Enter a character:");
// if(vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u"){
//     document.write(vowels + " is vowel");
// }else{
//     document.write(vowels + " is not vowel");
// }

// //---------------------------Q5---------------------------
// var password = "saylaniSmit";
// var checkPass = prompt("Please enter your password:");
// if(checkPass == password){
//     document.write("Correct! The password you entered matches the original password.");
// }else{
//     document.write("Incorrect password");
// }

// //---------------------------Q6---------------------------
// var greeting;
// var hour = "13";
// if (hour < "18") {
//   greeting = "Good day";
//   document.write(greeting);
// } else {
//   greeting = "Good evening";
//   document.write(greeting);
// }

// //---------------------------Q7---------------------------
// var time = prompt("Enter time in 24 hour's format");
// if(time >= "0000" && time < 1200){
//     document.write("Good Morning!");
// }else if(time >= 1200 && time < 1700){
//     document.write("Good afternoon!");
// }else if(time >= 1700 && time < 2100){
//     document.write("Good evening!");
// }else if(time >= 2100 && time < 2359){
//     document.write("Good night!");
// }