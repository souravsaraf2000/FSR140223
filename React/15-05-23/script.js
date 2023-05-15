// var a = 10
// let b = 20
// const c = 30

// function sum(x,y){
//     console.log(b)
//     var s = x+y
//     console.log(s)
// }

// sum(5,10)
// console.log(val)

// greetUser()

// function greetUser(){
//     console.log('Hey there! Welcome to the React Module!!')
// }

// console.log(x)

// let x = 10 // Temporal Dead Zone
// console.log(aa)
// var a = 100
// let aa = 50
// console.log(window)

// function greet(){
//     console.log('Hello')
// }

// greet()


// let greetUser = n => {
//     for(let i=0;i<n;i++){
//         console.log('Hey there!')
//     }
// }

// greetUser(10)

let sumOfTwoNumbers = (num1, num2) => num1 + num2

console.log(sumOfTwoNumbers(5,10))

let name = 'Sourav'

// let customGreeting = "Hello " + name + "! Welcome to React Module!"
let customGreeting = `Hello ${name}! Welcome to React Module!`
console.log(customGreeting)

/*
    Rest --> Converts individual elements to arrays. Eg:- Dynamic Parameterized Functions
    Spread --> Converts array to individual elements
*/
let sumOfNNumbers = (...rest) => {
    console.log(rest)
}

sumOfNNumbers(10,20,30, 40, 50, 60, 70, 80, 90, 100)


let arr = [1,2,3,4,5]
console.log(arr)
console.log(...arr)

let details = {
    nameOfEmp : 'Sourav',
    profile: 'Instructor',
    sessionCount: 250,
    hours: 500
}

let {sessionCount, nameOfEmp} = details

console.log(sessionCount, nameOfEmp)

let [a,b] = arr

console.log(a)