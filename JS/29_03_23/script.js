var mObj = [{
    'name': 'John',
    'score': 98
    },{
    'name': 'Alice',
    'score': 99
    },{
    'name': 'Johnathan',
    'score': 90
    }
]
//    1. Sort the above array in ascending order based on the score.
//    2. Sort the above array in descending order based on the name

function sortScore(a,b){
    if(a.score > b.score){
        return 1
    }
    else if(a.score < b.score){
        return -1
    }
    return 0;
}

function sortName(a,b){
    var name1 = a.name.toUpperCase();
    var name2 = b.name.toUpperCase();
    if(name1 > name2){
        return -1
    }
    else if(name1 < name2){
        return 1
    }
    return 0
}
mObj.sort(sortName)

console.log(mObj)

let cnt = 0
while(cnt < 10){
    console.log("Hello World")
    cnt++
}

/*
 cnt = 0 --> 0<10 --> true --> execution
 cnt = 1 --> 1<10 --> true --> execution
 cnt = 2 --> 2<10 --> true --> execution
 .
 .
 .
 cnt = 9 --> 9<10 --> true --> execution
 cnt = 10 --> 10<10 --> false --> terminate
*/

// let count = parseInt(prompt('Enter a number'))
// let c = 0
// while(true){
//     console.log("Hello")
//     c++
//     if(c == count){
//         break
//     }
//     console.log("Hey")
// }

// for(let i=1; i<=10; i++){
//     if(i==4 || i==5){
//         continue
//     }
//     console.log(i)
// }

// for(let i=0;i<10;i++){
//     console.log(i)
// }

// for(let i=10; i>=1; i--){
//     console.log(i)
// }

//Q. Add numbers from 1 to 100 until you get a sum more than or equal to 100

let val = 1
let sum = 0
while(val <= 100){
    sum += val
    val++
    if(sum >= 100){
        break
    }
}
console.log(sum)

//Q. Find first 20 even numbers.

// let c = 0
// let v = 1

// while(true){
//     if(v % 2 == 0){
//         c++
//         console.log(v)
//     }
//     v++
//     if(c == 20){
//         break
//     }
// }

// let c = 0 // count
// let v = 1 // value

// while(c<20){
//     if(v%2 == 0){
//         console.log(v)
//         c++
//     }
//     v++
// }

/*

Q. Find the name of people who are not invited to the wedding from the following list
var invitationList = [
{name: ‘Jacob’, invited: true},
{name: ‘Alison’, invited: false},
{name: ‘Winston’, invited: true},
{name: ‘Lee’, invited: false},
{name: ‘Bowry’, invited: true},
{name: ‘Wan’, invited: false},
{name: ‘Jovovich’, invited: true},
]

*/

var invitationList = [
    {name: 'Jacob', invited: true},
    {name: 'Alison', invited: false},
    {name: 'Winston', invited: true},
    {name: 'Lee', invited: false},
    {name: 'Bowry', invited: true},
    {name: 'Wan', invited: false},
    {name: 'Jovovich', invited: true},
]

for(let i=0;i<invitationList.length;i++){
    if(invitationList[i].invited == false){
        console.log(invitationList[i].name)
    }
}