class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    insertAt(value, pos){
        let node = new Node(value)
        if(this.head == null){
            this.head = node
        }
        else if(pos == 0){
            node.next = this.head
            this.head = node
        }
        else{
            let currNode = this.head
            let cnt = 0
            while(cnt < pos - 1){
                cnt += 1
                currNode = currNode.next
            }
            node.next = currNode.next
            currNode.next = node
        }
        this.size += 1
    }
    insertEnd(val){
        let node = new Node(val)
        if(this.head == null){
            this.head = node
        }
        let currNode = this.head
        while(currNode.next!=null){
            currNode = currNode.next
        }
        currNode.next = node
        this.size+=1
    }
    removeFrom(pos){
        if(this.head == null){
            return -1
        }
        else if(pos == 0){
            this.head = this.head.next
        }
        else{
            let temp = this.head
            let cnt = 0
            while(cnt < pos - 1){
                cnt += 1
                temp = temp.next
            }
            temp.next = temp.next.next
        }
        this.size -= 1
    }
    removeEnd(){
        if(this.head == null){
            return -1
        }
        let pos = this.size - 1
        let temp = this.head
        let cnt = 0
        while(cnt < pos - 1){
            cnt += 1
            temp = temp.next
        }
        temp.next = null
        this.size -= 1
    }
}

let ll = new LinkedList()
ll.insertAt(5,0)
ll.insertAt(2,1)
ll.insertAt(3,2)
ll.insertAt(6,3)
ll.insertAt(10,0)
ll.insertAt(60,3)
ll.insertEnd(100)

ll.removeEnd()
ll.removeFrom(2)
console.log(ll.head)

/*

Problem Two: Compare Two Linked Lists

You’re given the pointer to the head nodes of two linked lists.
Compare the data in the nodes of the linked lists to check if they are equal. 
If all data attributes are equal and the lists are the same length, return 1. 
Otherwise, return 0.

Example:
List One: 1 -> 2 -> 3 -> null
List Two: 1 -> 2 -> 3 -> 4 -> null
The two lists have equal data attributes for the first 3 nodes. 
List Two is longer, though, so the lists are not equal. 
Return 0.

*/

function compare(ll1, ll2){
    console.log(ll1.head, ll2.head)
    if(ll1.size !== ll2.size){
        return 0
    }
    while(ll1.head != null && ll2.head != null){
        if(ll1.head.value !== ll2.head.value){
            return 0
        }
        ll1.head = ll1.head.next
        ll2.head = ll2.head.next
    }
    if(ll1.head == null && ll2.head == null){
        return 1
    }
    return 0
}

let link1 = new LinkedList()
link1.insertAt(1,0)
link1.insertAt(2,1)
link1.insertAt(3,2)
link1.insertAt(4,3)

let link2 = new LinkedList()
link2.insertAt(1,0)
link2.insertAt(2,1)
link2.insertAt(3,2)
link2.insertAt(4,3)

console.log(compare(link1, link2))