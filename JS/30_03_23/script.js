// let arr = [1,4,6,9]
// let res = []

// for(let i=1;i<=10;i++){
//     if(arr.includes(i) == false){
//         res.push(i)
//     }
// }

// console.log(res)


// Smallest element of the array

// let arr = [13, 40, 10, 5, 1, 12, 24]
// let min = arr[0] // assumption  /*13 ---> 10 ---> 5 ---> 1 */

// for(let i=0;i<arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }

// console.log(min)

/*
    Functions: block of code that we want to execute multiple no. of times based of requrement

    Adv:- Avoiding code replication

    Types:- 4 types
    1. Take nothing, Return nothing
    2. Take something, return nothing
    3. Take nothing, return something
    4. Take something, Return something
*/

// function greeting(){
//     console.log("Hello there")
// }

// greeting()

// function sum(num1, num2){
//     let res = num1 + num2
//     // console.log(res)
//     console.log("Hey")
//     return res
// }

// function greetUser(){
//     let message = "Hey there! Welcome to my app!!"
//     return message
// }

// let resSum = sum(12,18)
// let result = sum(15,22)
// console.log(resSum)
// console.log(result)

/*
    WAF which accepts a marks and returns a grade, >90 -> A, >80 -> B, >70 -> C , >60 ->D ,<60 -> F
*/

// function calcGrade(marks){
//     let grade
//     if(marks > 90){
//         grade = "A"
//     }
//     else if(marks > 80){
//         grade = "B"
//     }
//     else if(marks > 70){
//         grade = "C"
//     }
//     else if(marks > 60){
//         grade = "D"
//     }
//     else{
//         grade = "F"
//     }
//     return grade
// }

// function calcGrade(marks){
//     if(marks > 90){
//         return "A"
//     }
//     else if(marks > 80){
//         return "B"
//     }
//     else if(marks > 70){
//         return "C"
//     }
//     else if(marks > 60){
//         return "D"
//     }
//     else{
//         return "F"
//     }
// }

// let grade = calcGrade(81)
// console.log(grade)

let name = "Edyoda"

if(true){
    let x = 100
    // console.log(x)
    console.log(name)
}

console.log(x)