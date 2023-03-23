// var input = prompt("Enter a character")
// input = input.toUpperCase()

// switch(input){
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U': console.log('Vowel'); break
//     default: console.log('Consonent')
// }

// var mStr = 'Mo Tu We Th Fr Sa Su'

// mStr = mStr.toUpperCase()

// var arr = mStr.split(" ")

// console.log(arr)

// var x=0;
// console.log(x++) // 0
// x = x + 1; console.log(x); // 2
// x += 1; console.log(x); // 3
// x =+ 1; console.log(x);   // 1

// console.log(true)
// console.log("Hello "+true)
// console.log(null)
// console.log(null + "Hello")

// console.log('2')
// console.log(+'2')
// console.log(-'10')

// console.log(!!"false" == !!"true")

// var num1 = Number(prompt("Enter the first number"))

// var num2 = Number(prompt("Enter the second number"))
// console.log(typeof num2)
// alert("Sum is "+ (num1+num2))

// console.log(String(2))
// console.log(Number(false))
// console.log(Boolean(-10))

var data = {
    name: "Sourav",
    age: 22,
    qualification: "B. Tech",
    skills: ["React", "JS", "ES6", "CSS", "HTML"],
    institute: "Edyoda",
    sessionCount: 215,
    married: false,
    address: {
        street: "ABC Street",
        city: "Kolkata",
        state: "West Bengal"
    },
    getSkills: function(){
        console.log(this.skills)
    },
    getSessionCnt: function(){
        console.log(this.sessionCount)
    }
}

console.log(data.skills)
console.log(data.address)

console.log(Object.keys(data))

console.log(Object.values(data))

console.log(data["institute"])

console.log(data["address"]["city"])

data.address.street = "DEF Street" // data["address"]["street"] = "DEF Street"

console.log(data["address"])

data.collegeName = "TIU, WB"
data.address.mobileNo = 9999999111

delete data.married

console.log(data)

data.getSkills();
data.getSessionCnt();