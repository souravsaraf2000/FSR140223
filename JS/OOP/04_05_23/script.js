class Animal{
    voice(){
        console.log('Every animal has a different voice!')
    }
}

class Cow extends Animal{
    voice(type){
        console.log('Cow '+type)
    }
}

class Dog extends Animal{
    voice(){
        console.log('Dog woofs')
    }
}

let animal = new Animal()
animal.voice()
let cow = new Cow()
cow.voice("Moos")
let dog = new Dog()
dog.voice()

let data = {
    "name" : "Sourav",
    "age"  : 22,
    "qualification" : 'B. Tech' 
}

let strData = JSON.stringify(data)

console.log(JSON.parse(strData))