/*
Constant Time : O(1)

1. console statements
2. if-else statements
3. simple assignment operations
4. Arithmatic Operations (+, -, *, /)

*/

// 1
console.log('Hello World') // O(1)

//2
let a = 10
if(a<10){
    console.log('Smaller than 10')
}
else{
    console.log('Greater or equal to 10')
}

// O(1)

//3
let x = 94567  // O(1)
let sum = 0   // O(1)
while(x > 0){ // O(N)
    let d = x % 10 
    sum = sum + d 
    x = parseInt(x/10)
}
console.log(sum) // O(1)

// O(N)

//4
let n = 10
for(let i=0;i<n;i++){
    console.log('Hello World')
}

// O(N)

//5
let arr = [9, 5, 4, 3, 2]
let sum1 = 0

for(let i=0; i<arr.length; i++){
    sum1 += arr[i]
}

console.log(sum1)

// O(N)

//6
let arr2D = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0;i<arr2D.length;i++){
    for(let j=0;j<arr2D[i].length; j++){
        console.log(arr2D[i][j])
    }
}

// O(N^2)

// 7
let count = 0
let n1 = 100

for(let i=n1; i>0; i=i/2){
    for(let j=0; j<i; j++){
        count++
    }
}

/*

i--> 100  j--> 100
i--> 50   j--> 50
i--> 25   j--> 25
i--> 12   j--> 12
i--> 6    j--> 6
i--> 3    j--> 3
i--> 1    j--> 1

n + n/2 + n/4 + n/8 + n/16 + .... + 1 = 2n - 1 ~ 2n ~ n

// O(N)

*/