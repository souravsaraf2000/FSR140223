var a = 10
// var h1 = document.getElementById("heading")
console.log(window)
// console.log(window.innerHeight, window.innerWidth)


// if(window.innerWidth < 500){
//     h1.innerText = "Hello"
// }
// else{
//     h1.innerText = "BOM"
// }
// window.addEventListener("resize", function(){
//     console.log(window.innerHeight, window.innerWidth)
// })

// let btn = document.getElementById("btn")
// let btn1 = document.getElementById("btn1")

// btn.onclick = function(){
//     open("https://github.com/souravsaraf2000")
// }

// btn1.onclick = function(){
//     close()
// }

console.log(window.screen)
console.log(navigator)
console.log(history)

let back = document.getElementById("back")
let next = document.getElementById("next")

back.onclick = function(){
    history.back()
}

next.onclick = function(){
    history.forward()
}

console.log(location)

let form = document.getElementById("form")
form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(location.search)
})

localStorage.setItem("name","Sourav")
localStorage.setItem("institute", "Edyoda")
console.log(localStorage.getItem("institute"))

// localStorage.removeItem("institute")

// localStorage.clear()