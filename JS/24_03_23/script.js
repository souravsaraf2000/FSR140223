// var name = prompt("Enter the name of the player")
// var nameArr = name.split(" ")
// console.log(nameArr)
// var player = {
//     firstName: nameArr[0],
//     lastName: nameArr[1],
//     age: 22,
//     sports: '8 ball pool',
//     experience: 2,
//     getName: function(){
//         console.log(this.firstName + " " + this.lastName)
//     },
//     getPlayerDetails: function(){
//         this.getName()
//         console.log('Age: ', this.age)
//         console.log('Sports: ', this.sports)
//         console.log('Experience: ', this.experience)
//     }
// }

// // player.getName()

// player.getPlayerDetails()


// var num = 102
// var res = (num % 5 == 0) ? "Divisible" : "Not Divisible"
// console.log(res)


// Q1. check whether a number is divisible by 5 and 11 or not.

// var num = parseInt(prompt("Enter a number"))

// if(num % 5 == 0 && num % 11 == 0){
//     alert("Number is divisible by both 5 & 11 ")
// }
// else{
//     alert("Number is not divisible")
// }

// Q2. check whether a year is leap year or not.

/*
1. year should be divisible by 4
2. if so, then check whether the year is century year or not
3. if it is a century year (divisible by 100) then it MUST be divisible by 400 to be a leap year
*/

// var year = parseInt(prompt('Enter a year'))

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log(year + " is a leap year")
//         }
//         else{
//             console.log(year + " is not a leap year")
//         }
//     }
//     else{
//         console.log(year + " is a leap year")
//     }
// }
// else{
//     console.log(year + " is not a leap year")
// }

// Q3. input any character and check whether it is alphabet, digit or special character.

// var char = prompt("Enter a single character")

// if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')){
//     alert('Character is an alphabet')
// }
// else if(char >= '0' && char <= '9'){
//     alert('Character is a digit')
// }
// else{
//     alert('Special Character Entered')
// }

// Q4. input angles of a triangle and check whether triangle is valid or not.

// var angle1 = parseInt(prompt("Enter angle 1"))
// var angle2 = parseInt(prompt("Enter angle 2"))
// var angle3 = parseInt(prompt("Enter angle 3"))

// var sum = angle1 + angle2 + angle3
// if(sum == 180){
//     console.log('Triangle is Valid')
// }
// else{
//     console.log('Triangle is Invalid')
// }

// Q5

var basic = parseInt(prompt("Enter basic salary"))
var gross, hra, da
if(basic <= 10000){
    hra = 0.2 * basic
    da = 0.8 * basic
}
else if(basic > 10000 && basic <= 20000){
    hra = 0.25 * basic
    da = 0.9 * basic
}
else{
    hra = 0.3 * basic
    da = 0.95 * basic
}

gross = basic + hra + da

console.log("Gross Salary is ", gross)