// console.log($("h1"))

// let heading = $("#wrapper h1")
// let header = $(".header")
// let h1 = $("h1")

// let textBox = $("input[type=password]")

// console.log(heading)
// console.log(header)
// console.log(h1)

// console.log(textBox)

// let para = $("p").eq(2)

// console.log(para)

$(document).ready(function(){
    let html = $("#wrapper").html()
    let text = $(".head").text("Hello World")
    console.log(html)
    console.log(text)
    let div = $("<div>").html("<p>Today we are learning basics of jQuery</p>")
    $("body").prepend(div)
    div.remove()
    $("p").eq(2).css({
        fontSize: '18px',
        backgroundColor: 'lightblue',
        color: 'blue'
    })
    $("p").eq(4).css({
        color: 'cyan',
        backgroundColor: 'purple'
    })
    $("p").eq(3).removeClass("bgcAqua")
    $("p").eq(3).addClass("bgcOrange")
})

/*

Sum of Digits

No.: 2453

O/p: 14

2453 % 10 = 3
2453 / 10 = 245

245 % 10 = 5
245 / 10 = 24

24 % 10 = 4
24 / 10 = 2

2 % 10 = 2
2 / 10 = 0

*/

let number = 254675
let sum = 0

while(number != 0){
    let digit = number % 10
    sum += digit
    number = parseInt(number/10)
}

console.log(sum)

/*
    Find number of digits
    no.: 12345123
    o/p: 8
*/

let num = 12345123
let cnt = 0

while(num != 0){
    cnt++
    num = parseInt(num/10)
}

console.log(cnt)

/*
H/W

Armstrong Number

9474

9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474

153

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

*/