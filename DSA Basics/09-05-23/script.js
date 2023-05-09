/*
Problem Two:
Write a program to find the duplicate number in a given integer array. 
Store the duplication numbers in an object with the duplicate count.

Input: [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]
Output: {
    2: 3,
    8: 2,
    10: 3
}
*/

// let arr = [1,3,5,4,6,8,7,10, 15, 30]

// let res = arr.filter(function(item){
//     if(item % 3 == 0  && item % 5 == 0){
//         return true
//     }
//     return false
// })

// console.log(res)

// let arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]

// let output = {}

// for(let i=0;i<arr.length;i++){
//     let res = arr.filter(function(item){
//         if(item == arr[i]){
//             return true
//         }
//         return false
//     })
//     if(res.length > 1){
//         output[arr[i]] = res.length
//     }
// }

// console.log(output)

/*
    output = {
        2: 3,
        8: 2,
        10: 3
    }
*/

class Stack{
    #items
    #size
    constructor(){
        this.#items = []
        this.#size = 0
    }
    pushOp(val){
        this.#items.push(val)
        this.#size += 1
    }
    popOp(){
        this.#size -= 1
        return this.#items.pop()
    }
    peekOp(){
        return this.#items[this.#size - 1]
    }
    showStack(){
        console.log('Stack: ',...this.#items)
    }
    getSize(){
        return this.#size
    }
}

// let stack = new Stack()
// stack.showStack()
// stack.pushOp(2)
// stack.pushOp(10)
// stack.pushOp(6)
// stack.pushOp(8)
// stack.pushOp(15)
// stack.showStack()
// console.log(stack.peekOp())
// console.log('Popped Item ', stack.popOp())
// console.log('Popped Item ', stack.popOp())

/*
Problem One:
Reverse an array using Stacks.

Input: [13, 11, 8, 4, 19, 22]
Output: [22, 19, 4, 8, 11, 13]
*/

// let stack = new Stack()
// let pArr=[13, 11, 8, 4, 19, 22]
// let revArr = []

// for(let i=0;i<pArr.length;i++){
//     stack.pushOp(pArr[i])
// }

// for(let i=0;i<pArr.length; i++){
//     revArr.push(stack.popOp())
// }

// console.log(revArr)

/*
Problem Two:
Write a program to check for Balanced Brackets in an expression (well-formedness) using Stack. You have to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in expression.

Input: “[()]{}{[()()]()}” 
Output: Balanced

Input: “[(])” 
Output: Not Balanced 
*/

function isBalanced(exp){
    for(let i=0;i<exp.length;i++){
        let bracket = exp[i]
        if(bracket == '(' || bracket == '{' || bracket == '['){
            stack.pushOp(bracket)
            continue
        }
        if(stack.getSize() == 0){
            return false
        }
        let b = stack.popOp()
        switch(bracket){
            case ')': 
                if(b=='{' || b=='['){
                    return false
                }
                break
            case '}':
                if(b=="(" || b=='['){
                    return false
                }
                break
            case ']':
                if(b=="(" || b=='{'){
                    return false
                }
                break
        }
    }
    return stack.getSize() == 0 ? true : false
}

let exp = '[()()]['
var stack = new Stack()
let res = isBalanced(exp)
if(res == true){
    console.log('Balanced!')
}
else{
    console.log('Not Balanced')
}