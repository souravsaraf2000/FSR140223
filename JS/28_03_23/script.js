// if(true){
//     let x = 10
//     console.log(x)
// }

// let x = 15
// console.log(x)

// /*
//     var -> is function scoped
//     let -> is block scoped

//     var variables can be re-declared which may crash the application,
//     but let variables are not re-declared, we can only update them
// */

// let arrNum = [2,1,3,5,8,6,12] 
// let arr = [4,5,6,7,8]
// let arrObj = [
//     {
//         name: "Pratik",
//         age: 24
//     },
//     {
//         name: "Sahil",
//         age: 18
//     },
//     {
//         name: "Sourav",
//         age: 22
//     }
// ]
// let arrArr = [
//     [1,2,3],
//     [true,false,true],
//     ["Apple", "Cake", "Juice"]
// ] // 2-Dimensional Arrays

// console.log(arrArr[2][0])
// console.log(arrArr[1][1])

// // console.log(arrObj[1])
// console.log(arrObj[1].name)
// console.log(arrObj[1].age)

// var inp = prompt("Enter an array (separate each element by space)")
// var arr = inp.split(" ")
// console.log(arr)

// let val = parseInt(prompt("Enter a number"))
// arrNum.push(val)
// console.log(arrNum)
// console.log(arrNum)
// let deletedElement = arrNum.pop()
// console.log(arrNum)
// console.log("Deleted Element = ", deletedElement)

// let first = arrNum.shift()
// console.log(first)

// arrNum.unshift(100)
// console.log(arrNum)

// console.log(arrNum.reverse())

// console.log(arr.concat(arrNum))
// console.log(arrNum)
// arrNum.splice(4, 2)
// arrNum.splice(3, 0, 30, 50)
// arrNum.splice(3,3,50,60,80)
// console.log(arrNum)

// let names = ["Sri", "Anand", "Pratik", "Sarthak", "Vikas", "Barani"]
// names.sort()
// console.log(names)

// let values = [1, 5, 4, 3, 10, 15, 100]
// console.log(values)
// values.sort(function(a,b){return a-b})
// console.log(values)

let newValues = [5,7,9,1,3,6,7]
let val = [5, 6, 9, 4, 4, 10, 3, 0]

newValues.sort(function(a,b){return a-b})
val.sort(function(a,b){return a-b})

console.log(newValues, val)