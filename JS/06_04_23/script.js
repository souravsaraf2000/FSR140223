let userName = document.getElementById("userName")
let email = document.getElementById("email")
let form = document.getElementById("form")

// userName.addEventListener("change", function(e){
//     console.log(e.target.value)
// })

// email.addEventListener("input", function(e){
//     console.log(e.target.value)
// })

// userName.addEventListener("focus", function(){
//     userName.style.backgroundColor = "lightblue"
//     userName.style.color = "blue"
// })

// userName.addEventListener("blur", function(){
//     userName.style.backgroundColor = "lightcoral"
// })

// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     console.log(userName.value)
//     console.log(email.value)
//     userName.value = ""
//     email.value = ""
// })

// let todo = ["Practice JS everyday", "Do handson", "Watch recordings", "Make proper notes", "Revise"]

// let orderedList = document.createElement("ol")

// for(let i=0;i<todo.length;i++){
//     let li = document.createElement("li")
//     let content = document.createTextNode(todo[i])
//     li.appendChild(content)
//     let button = document.createElement("button")
//     let text = document.createTextNode("Delete")
//     button.appendChild(text)
//     li.id = "item"+i
//     orderedList.appendChild(li)
//     li.appendChild(button)
// }

// document.body.appendChild(orderedList)

// for(let i=0;i<todo.length;i++){
//     document.getElementById("button"+i).addEventListener("click", function(){
//         console.log("Item "+i+" deleted")
//     })
// }

// document.getElementById("item2").remove()

// document.getElementById("btn").addEventListener("click",function(){
//     let value = document.getElementById("completed").value
//     let id = "item"+value
//     document.getElementById(id).remove()
// })

let test = document.getElementById("test")

// test.addEventListener("mousedown", function(e){
//     console.log(e)
// })

// test.addEventListener("mouseup", function(e){
//     console.log(e)
// })

// test.addEventListener("click", function(e){
//     console.log("Left Key Pressed")
// })

// test.addEventListener("dblclick", function(){
//     console.log("Double click happened")
// })

// test.addEventListener("mouseenter", function(){
//     test.style.backgroundColor = "blue"
// })

// document.addEventListener("mousemove", function(){
//     test.style.backgroundColor = "pink"
// })

// test.addEventListener("mouseleave", function(){
//     test.style.backgroundColor = "azure"
// })

test.addEventListener("contextmenu", function(e){
    e.preventDefault();
    alert("Right Click Not Allowed")
})