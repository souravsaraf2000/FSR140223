// try{
//     let div = 5/0
//     console.log(divi)
// }
// catch(e){
//     console.log("Some mistake happened!")
// }

// let num = parseInt(prompt("Enter a number"))
// if(num % 5 == 0){
//     console.log("Number divisible by 5!")
// }
// else{
//     throw "Number not divisible by 5!"
// }
// console.log("Hello World")

// Hoisting - Using functions or variables even before initializing / defining them 
// console.log(res)

// function sub(x,y){
//     var z = x - y
//     return z
// }
// console.log(res)
// var res = sub(10,5)
// console.log(res)
// console.log(window)

let quote = document.getElementById("quote")
let btn = document.getElementById("btn")

function getQuote(){
    let randomNo = Math.floor( Math.random() * 100 + 1 )
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status >= 200 && xhttp.status < 300){
            let quoteObj = JSON.parse(xhttp.responseText)
            let quoteBlock = 
            `
                <div id="quoteBlock">
                    <p id="quoteText">${quoteObj.quote}</p>
                    <p id="author"><i>~${quoteObj.author}</i></p>
                </div>
            `
            quote.innerHTML = quoteBlock
        }
    }

    xhttp.open("GET", `https://dummyjson.com/quotes/${randomNo}`, true)

    xhttp.send()
}

btn.addEventListener("click", function(){
    getQuote()
})