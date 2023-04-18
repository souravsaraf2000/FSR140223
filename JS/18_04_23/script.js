let carName = "Wagon R"
let carColor = "Ghost"
let manufacturingYear = "2023"
let price = 80000000

function getCarName(){
    console.log(carName)
}

function getCarColor(){
    console.log(carColor)
}

function getManufacturingYear(){
    console.log(manufacturingYear)
}

function getPrice(){
    console.log(price)
}

/* abstraction -> showing only necessary information to the user */
/* Encapsulation, Inheritance, Polymorphism */

/* obj --> prototype of template --> prototype of object in JS --> null */

// let carInfo = {
//     carName : "Rolls Royce",
//     carColor : "Ghost",
//     manufacturingYear : "2023",
//     price : "8cr",
//     getCarName: function(){
//         return this.carName
//     },
//     getCarColor: function(){
//         return this.carColor
//     },
//     getManufacturingYear: function(){
//         return this.manufacturingYear
//     },
//     getPrice: function(){
//         return this.price
//     }
// }

function Car(name,color,year,price){
    this.carName = name;
    this.carColor = color;
    this.manufacturingYear = year;
    this.price = price;
    // this.getCarName = function(){
    //     return this.carName
    // }
    // this.getCarColor = function(){
    //     return this.carColor
    // }
    // this.getManufacturingYear = function(){
    //     return this.manufacturingYear
    // }
    // this.getPrice = function(){
    //     return this.price
    // }
}

Car.prototype.getCarName = function(){
    return this.carName
}

Car.prototype.getCarColor = function(){
    return this.carColor
}

Car.prototype.getManufacturingYear = function(){
    return this.manufacturingYear
}

Car.prototype.getPrice = function(){
    return this.price
}

let bmw = new Car("BMW", "Electric Blue", "2023", "1cr")
let audi = new Car("Audi", "Silver", "2023", "3cr")
console.log(bmw)
console.log(audi)
console.log(bmw.getCarName())
console.log(audi.getPrice())
console.log(bmw.valueOf())

/*

H/W:-

number = 1234

WAP to count number of digits. Use of array/strings is not allowed.

o/p: 4

*/

/*

1. WAP to check whether a number is prime or not?

2. WAP to print all factors of a number ?

*/

// let num = parseInt(prompt("Enter a number"))
// let cnt = 0
// for(let i = 1; i<=num; i++){
//     if(num % i == 0){
//         cnt++
//     }
// }

// if(cnt == 2){
//     console.log("Prime")
// }
// else{
//     console.log("Not Prime")
// }

let num = parseInt(prompt("Enter a number"))

for(let i = 1; i<=num; i++){
    if(num % i == 0){
        console.log(i)
    }
}