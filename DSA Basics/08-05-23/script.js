// function squareNum(num){
//     let n = num
//     num = n * n
//     console.log(num)
// }

// let x = 10
// squareNum(x)
// console.log(x)

// function add5(a){
//     for(let i=0;i<a.length;i++){
//         a[i] = a[i]+5
//     }
//     console.log(a)
// }

// let arr = [1,2,3,5,8,10]
// console.log(arr)
// add5(arr)
// console.log(arr)

// let newArr = [...arr]
// newArr.push(40)
// console.log(arr)
// console.log(newArr)

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let arr = [1,2,3,5,8,10]
// let key = 101
// let i;
// for(i=0;i<arr.length;i++){
//     if(arr[i]==key){
//         console.log('Element found at position '+i)
//         break
//     }
// }
// if(i==arr.length){
//     console.log('Element not found!')
// }

/*

Problem Three:
Write a program to find the sum of largest and smallest number in without sorting an integer array.


Input: [10, 22, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]
Output: 24

*/

// let p3 = [10, 22, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]
// let min = p3[0], max = p3[0]
// for(let i=0;i<p3.length; i++){
//     if(p3[i]<min){
//         min = p3[i]
//     }
//     if(p3[i]>max){
//         max = p3[i]
//     }
// }
// console.log(min + max)

/*

Problem One:
Write a program to find the missing number in a given integer array of 1 to 100. The array is in ascending order. There can be multiple missing numbers. 

If there is a single value missing then return it as a number. If there are multiple values missing then return it as an array. If there is no value missing then return “null”

Input: [1, 2, 4, 5, 6, 8, 10]
Output: [3, 7, 9]

Input: [55, 56, 57, 59]
Output: 58

Input: [23, 24, 25, 26]
Output: null

*/

// let pArr = [23, 24, 25, 26]
// let missing = []
// let start = pArr[0]
// let end = pArr[pArr.length - 1]
// let k = 0

// for(let i=start; i<=end; i++){
//     if(!pArr.includes(i)){
//         missing.push(i)
//     }
// }

// if(missing.length>1){
//     console.log(missing)
// }
// else if(missing.length == 1){
//     console.log(missing[0])
// }
// else{
//     console.log(null)
// }