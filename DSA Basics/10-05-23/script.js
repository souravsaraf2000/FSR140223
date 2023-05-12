class Queue{
    items
    size
    constructor(){
        this.items = []
        this.size = 0
    }
    enqueue(val){
        this.items.push(val)
        this.size += 1
    }
    dequeue(){
        if(this.size == 0){
            return "Queue Underflow! No items available for deletion!!"
        }
        let deletedItem =  this.items.shift()
        this.size -= 1
        return deletedItem
    }
    front(){
        return this.items[0]
    }
    showQueue(){
        console.log('Queue ',...this.items)
    }
    queueSize(){
        return this.size
    }
}

let queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(5)
// queue.enqueue(3)
// queue.enqueue(2)
// queue.enqueue(8)
// queue.showQueue()
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())

/*
Problem One:
Sliding Window Maximum (Maximum of all subarrays of size k)
Given an array and an integer K, find the maximum for each and every contiguous subarray of size k.

Input: [1, 2, 3, 1, 4, 5, 2, 3, 6], K = 3 
Output: 3 3 4 5 5 5 6
Explanation: 
Maximum of 1, 2, 3 is 3
Maximum of 2, 3, 1 is 3
Maximum of 3, 1, 4 is 4
Maximum of 1, 4, 5 is 5
Maximum of 4, 5, 2 is 5 
Maximum of 5, 2, 3 is 5
Maximum of 2, 3, 6 is 6

Input: [8, 5, 10, 7, 9, 4, 15, 12, 90, 13], K = 4 
Output: 10 10 10 15 15 90 90
Explanation:
Maximum of first 4 elements is 10, similarly for next 4 
elements (i.e from index 1 to 4) is 10, So the sequence 
generated is 10 10 10 15 15 90 90

*/

let arr = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13]
let k = 4
let res = []

for(let i=0;i<arr.length;i++){
    queue.enqueue(arr[i])
}

while(queue.queueSize() >= k){
    let elements = queue.items.slice(0,k)
    let maxELement = Math.max(...elements)
    res.push(maxELement)
    queue.dequeue()
}

console.log(...res)