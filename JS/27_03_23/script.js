var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."

// // 1. Find the length of the first sentence in the string.
// // 2. Find the length of the second sentence in the string.
// // 3. Find the first and last occurrence of the word "This".
// // 4. Find the substring with length 12 from the START of the string mStr.
// // 5. Find the substring with length 12 from the END of the string mStr

// var mStrArr = mStr.split('.')
// console.log(mStrArr)

// console.log("Length of first sentence is ", mStrArr[0].length )

// console.log("Length of second sentence is ", mStrArr[1].trim().length )

// console.log("First occurance of This is at index ", mStr.indexOf("This"))

// console.log("Last occurance of This is at index ", mStr.lastIndexOf("This"))

// console.log("Substring with length 12 from the START of the string is ", mStr.substr(0, 12))

// console.log("Substring with length 12 from the END of the string is ",mStr.substr(-12, 12))

// console.log(mStr.slice(5))

// console.log(mStr.charAt(21))

// Question 3:
// Write a JavaScript program to create menu driven calculator 
// that performs basic arithmetic operations (add, subtract, multiply and divide) 
// using switch case. The calculator should input two numbers
// and an operator: +, -, *, / from the user. 
// It should perform operation according to the operator entered
// and must take input in given format.

// var num1 = parseInt(prompt("Enter 1st number"))
// var num2 = parseInt(prompt("Enter 2nd number"))
// var operator = prompt("Enter opertor (+, -, *, /)")

// switch(operator){
//     case '+' : console.log(num1 + num2); break;
//     case '-' : console.log(num1 - num2); break;
//     case '*' : console.log(num1 * num2); break;
//     case '/' : console.log(num1 / num2); break;
//     default: console.log("Invalid Operator")
// }

// var unit = parseInt(prompt("Enter unit : "))
// var bill

// if(unit <= 50){
//     bill = unit * 0.5
// }
// else if(unit <= 150){
//     bill = (50 * 0.5) + (unit - 50) * 0.75
// }
// else if(unit <= 250){
//     bill = (50 * 0.5) + (100 * 0.75) + (unit - 150) * 1.20
// }
// else{
//     bill = (50 * 0.5) + (100 * 0.75) + (100 * 1.20) + (unit - 250) * 1.50
//     bill += 0.2 * bill
// }

// console.log("Total Bill Amount = ", bill)