// let input = document.getElementById("firstName")

// input.onchange = function(e){
//     console.log(e)
//     console.log(e.target.value)
// }

// let container = document.getElementById("container")
// let button = document.getElementById("btn")

// console.log(container.style.backgroundColor)
// console.log(getComputedStyle(container).height)

// console.log(container.classList.contains("colorabc"))

// button.onclick = function(){
//     container.classList.toggle("color")
// }

// document.addEventListener("mousedown", function(e){
//     console.log("Client X,Y",e.clientX, e.clientY)
//     console.log("Page X,Y",e.pageX, e.pageY)
//     console.log("Screen X,Y",e.screenX, e.screenY)
// })


// setTimeout(function(){
//     console.log("Hello")
// },3000)

// setInterval(function(){
//     console.log("Hey")
// }, 1000)

// let counter = document.getElementById("counter")
// let cnt = 10

// let interval = setInterval(function(){
//     console.log("Set Interval Running")
//     counter.innerText = cnt
//     cnt = cnt - 1
//     if(cnt < 0){
//         clearInterval(interval)
//     }
// }, 1000)

// console.log(interval)

let task = document.getElementById("task")
let btn = document.getElementById("btn")
let k = 0

function deleteItem(id){
    document.getElementById(id).remove()
}

function addItem(item){
    let li = document.createElement("li")
    let text = document.createTextNode(item)
    li.appendChild(text)
    let button = document.createElement("button")
    let value = document.createTextNode("Delete")
    button.appendChild(value)
    button.id = "button"+k
    li.id = "item"+k
    button.onclick = function(){
        deleteItem(li.id)
    }
    li.appendChild(button)
    ol.appendChild(li)
}

// let todo = ["Practice JS", "Revise Concepts", "Do Hands-on", "Prepare Notes"]

let ol = document.createElement("ol")

btn.addEventListener("click", function(){
    addItem(task.value)
    task.value = ""
    k++
})  

// for(let i=0;i<todo.length;i++){
//     let li = document.createElement("li")
//     let text = document.createTextNode(todo[i])
//     li.appendChild(text)
//     let button = document.createElement("button")
//     let value = document.createTextNode("Delete")
//     button.onclick = function(){
//         deleteItem(i)
//     }
//     button.appendChild(value)
//     button.id = "button"+i
//     li.id = "item"+i
//     li.appendChild(button)
//     ol.appendChild(li)
// }

document.body.appendChild(ol)

// let wrapper = document.getElementById("wrapper")

// let arr=[
//     {
//         name: "Ashish",
//         age: 25,
//         place: "xyz"
//     },
//     {
//         name: "Pratik",
//         age: 30,
//         place: "xyz"
//     },
//     {
//         name: "Sourav",
//         age: 22,
//         place: "xyz"
//     }
// ]

// for(let i=0;i<arr.length;i++){
//     let div = 
//     `
//         <div class="bgc">
//             <p>
//                 Name is : ${arr[i].name}
//             </p>
//             <p>
//                 Age is : ${arr[i].age}
//             </p>
//             <p>
//                 Place is : ${arr[i].place}
//             </p>
//         </div>
//     `
//     wrapper.innerHTML += div
// }

// let colours = ["cyan", "orange", "magenta", "purple", "yellow", "lightblue", "lightcoral", "gray", "green", "lightgreen", "pink"]

// let wrapper = document.getElementById("wrapper")
// let h1 = document.getElementById("val")
// let cnt = 10
// let index = 0

// let interval = setInterval(function(){
//     h1.innerText = cnt
//     wrapper.style.backgroundColor = colours[index]
//     cnt -= 1
//     index++
//     if(cnt<0){
//         clearInterval(interval)
//     }
// }, 1000)