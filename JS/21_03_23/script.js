console.log(20 >= 20)

console.log(5 == '5')

console.log(5 === '5')

var val1 = 5
var val2 = 10

console.log(val1 != val2)

/*
&&, || -> binary operators

when left and right, both are true, only then && returns true else it returns false

if, any of the left or right is true, then || returns true

&& -->
left        right      result
true(1)    true(1)    true(1)
true(1)    false(0)   false(0)
false(0)   true(1)    false(0)
false(0)   false(0)   false(0)

|| -->
left        right       result
true(1)    true(1)    true(1)
true(1)    false(0)   true(1)
false(0)   true(1)    true(1)
false(0)   false(0)   false(0)

*/

console.log((val1 < val2) && (val2 != 10))
console.log((val1 < val2) || (val2 != 10))

var name = 'Sourav'
var institute = "Edyoda \"Digital\" University"
var letterA = 'A'

console.log(name, institute)

var num = 10  // integer
var numf = 10.25 // float

console.log(numf)
console.log(numf.toString())

console.log(typeof numf)
console.log(typeof numf.toString())

var nums = '20'
var numsf = '20.50'

console.log(parseInt(nums))
console.log(parseFloat(numsf))

var pi = 22/7;
console.log(pi)
console.log(pi.toFixed(3))

console.log(institute.toUpperCase())
console.log(letterA.toLowerCase())

var first = "Death "
var second = "Note"

var animeName = first.concat(second)
var animeName = first + second
console.log(animeName)

var text = "                     India                                           "
console.log(text)
console.log(text.trim())

console.log(institute.charAt(8))

var date = "21-03-2023"
var separate = date.split("-")
console.log(separate)

var a = null
console.log(a)

var marks = 60

if(marks >= 60){
    console.log('Candidate Passed')
}
else{
    console.log('Candidate Failed')
}

var length = 200
var breadth = 400

if(length == breadth){
    console.log('Square')
}
else{
    console.log('Rectangle')
}

var num1=55, num2=80, num3=20;

if(num1 > num2 && num1 > num3){
    console.log(num1 + ' is the greatest')
}
else if(num2 > num1 && num2 > num3){
    console.log(num2 + ' is the greatest')
}
else{
    console.log(num3 + ' is the greatest')
}