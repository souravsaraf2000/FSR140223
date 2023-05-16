// map, filter, reduce

let arr = [1,2,3,4,5]

let res = arr.map(item => item * 5)

arr.map(item=>console.log(item))

console.log(res)


let arr1 = [12,45,19,36,42,81,90,54,19,36]

let multipleOf6 = arr1.filter(item => item % 6 == 0)
let mapVersion = arr1.map(item => item % 6 == 0)

console.log(multipleOf6)
console.log(mapVersion)

let total = arr1.reduce((acc, item)=>{
    console.log(acc)
    acc = acc * item
    return acc
},1)

console.log(total)

let val = arr1.find(item => item % 5 == 0)
let val1 = arr1.findIndex(item => item % 5 == 0)
console.log(val, val1)

// $.get('https://dummyjson.com/products', data => {
//     console.log(data)
//     $.get('https://dummyjson.com/users', userData => {
//         console.log(userData);
//         $.get('https://dummyjson.com/carts',  cartData=>{
//             console.log(cartData);
//         })
//     })
// })

let promise = (url) => new Promise((resolve, reject) => {
    $.get(url, data=>resolve(data))
    .fail(err => reject(err))
})

promise('https://dummyjson.com/products')
.then(data => {
    console.log(data)
    return promise('https://dummyjson.com/users')
})
.then(userData => {
    console.log(userData)
    return promise('https://dummyjson.com/carts')
})
.then(cartData => console.log(cartData))
.catch(err => console.log('Some error occurred'))