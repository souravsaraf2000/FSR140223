// var numberOfItemPurchased = 8
// A shop will give discount of 10% if the cost of purchased quantity is 1000 or more. Suppose, one 
// unit will cost 100. Change the value of numberOfItemPurchased and print total cost for user.


// var numberOfItemPurchased = 8
// var unitPrice = 100
// var totalPrice = numberOfItemPurchased * unitPrice
// var finalPrice;
// if(totalPrice >= 1000){
//     finalPrice = totalPrice - (0.1 * totalPrice)
// }
// else{
//     finalPrice = totalPrice;
// }

// console.log("Final Price is ", finalPrice)

var day = 3

switch(day){
    case 1: console.log("Monday") 
            break
    case 2: console.log("Tuesday")
            break
    case 3: console.log("Wednesday")
            break
    case 4: console.log("Thursday")
            break
    case 5: console.log("Friday")
            break
    case 6: console.log("Saturday")
            break
    case 7: console.log("Sunday")
            break
    default: console.log("Invalid day entered!")
}

var marks = 85

switch(true){
    case (marks >=0 && marks < 25): console.log('F'); break
    case (marks >= 25 && marks < 45): console.log('E'); break
    case (marks >= 45 && marks < 50): console.log('D'); break
    case (marks >= 50 && marks < 60): console.log('C'); break
    case (marks >= 60 && marks < 80): console.log('B'); break
    case (marks >= 80 && marks <= 100): console.log('A'); break
    default: console.log('Invalid Marks')
}

// console.log(10 % 2)
var num = 101
if(num % 2 == 0){
    console.log("Number is Even!")
}
else{
    console.log("Number is Odd!")
}

var num1 = 5;
//++num1; // Pre Increment -> first increse the value by 1 and then use the value
//num1++; // Post Increment -> first use the value and then increment it
// console.log(++num1) // 6
console.log(num1++) // 5
console.log(num1) //6

var input = 7;
var output1 = ++input + ++input + ++input; 
var output2 = input++ + input++ + input++;
var output3 = input++ + ++input + input++;
console.log(output1 + ' ' + output2 + ' ' + output3)

// sum = sum + value is equivalent to sum += value

// console.log(5 != '5')

var res = (num % 2 == 0) ? "Even" : "Odd"
console.log(res)

// alert("Hello I am alert")

// var val = confirm("This page is about to close!")
// var message = val == true ? "Page Closed" : "Page Close Cancelled"
// document.write(message)

var input = prompt("Enter your name")
console.log(typeof input)
document.write("<h1>Welcome ", input, " </h1>")