let container = document.getElementById("container")
let para = document.getElementById("para")
// let container = document.querySelector("#container")

// container.className = "styleDiv"
// container.className = "advStyles"

// container.classList.add("styleDiv")
// container.classList.add("advStyles")

// container.classList.remove("advStyles")

// console.log(para.style.fontSize) // used to fetch inline css
// console.log(getComputedStyle(para).backgroundColor) // used to fetch css written in external css file

// // console.log(window)

// let todo = ["Practice JS everyday", "Do handson", "Watch recordings", "Make proper notes", "Revise"]

// let orderedList = document.createElement("ol")

// for(let i=0;i<todo.length;i++){
//     let li = document.createElement("li")
//     let content = document.createTextNode(todo[i])
//     li.appendChild(content)
//     orderedList.appendChild(li)
// }

// console.log(orderedList)

// document.body.appendChild(orderedList)

let btn = document.getElementById("btn")
let div = document.getElementById("div")

// btn.onclick = function(){
//     if(div.style.display == "none"){
//         div.style.display = "block"
//     }
//     else{
//         div.style.display = "none"
//     }
// }

// btn.onclick = function(){
//     alert("Button Clicked")
// }

// btn.addEventListener("click", function(){
//     div.classList.toggle("changeBg")
// })

// btn.addEventListener("click", function(){
//     alert("Button Clicked")
// })

// let ctr = document.getElementsByClassName("container")

// console.log(ctr[0].classList.contains("container"))

// document.addEventListener("keydown", function(event){
//     console.log(event)
// })

// document.addEventListener("keyup", function(event){
//     console.log(event)
// })

document.addEventListener("keydown", function(e){
    console.log(e)
    let message = "<h1>" + e.key + " pressed!" + "</h1>"
    document.write(message)
})