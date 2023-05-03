// class Cars{
//     #carName;
//     #carPrice;
//     #color;
//     #company;
//     #profit;
//     constructor(name, price, color, company){
//         this.#carName = name
//         this.#carPrice = price
//         this.#color = color
//         this.#company = company
//         this.#profit = 0
//     }
//     // putValues(name,price,color,company){
//     //     this.carName = name
//     //     this.carPrice = price
//     //     this.color = color
//     //     this.company = company
//     // }
//     getCarDetails(){
//         console.log(this.#carName, this.#carPrice, this.#color, this.#company)
//     }
//     calculateTaxAmount(){
//         return this.#carPrice / 4
//     }
//     finalCarPrice(){
//         return this.#carPrice + this.calculateTaxAmount()
//     }
//     calculateProfit(){
//         this.#profit = this.#carPrice * 0.1
//         return this.#profit
//     }
// }

// let rollsRoyce = new Cars("Rolls Royce Ghost", 10000000, "Black", "Rolls Royce")

// rollsRoyce.getCarDetails()

// console.log(rollsRoyce.finalCarPrice())

// console.log(rollsRoyce.calculateProfit())

class Person{
    #name;
    constructor(name, age, city, gender){
        this.#name = name
        this.age = age
        this.city = city
        this.gender = gender
    }
    showPersonDetails(){
        console.log(this.#name, this.age, this.city, this.gender)
    }
}

class Engineer extends Person{
    constructor(name, age, city, gender, stream, college, salary, company){
        super(name, age, city, gender)
        this.stream = stream
        this.college = college
        this.salary = salary
        this.company = company
    }
    getEngineerInfo(){
        console.log(this.name, this.age, this.city, this.gender, this.stream, this.salary)
    }
}

class Doctor extends Person{
    constructor(name,age,city, gender,qualification, yrsOfExp, hospital){
        super(name, age, city, gender)
        this.qualification = qualification
        this.yrsOfExp = yrsOfExp
        this.hospital = hospital
    }
}

let eng = new Engineer("Pratik", 24, "Mumbai", "M", "CSE", "X University", 100000, "ABC Company")
eng.showPersonDetails()
eng.getEngineerInfo()

let doc = new Doctor("Ashish", 25, "Bihar", "M", "MD", 10, "Desun")
doc.showPersonDetails()