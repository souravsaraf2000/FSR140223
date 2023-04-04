// let division = document.getElementById("container")
// let paragraph = document.getElementsByClassName("para")
// let span = document.getElementsByTagName("span")


// let selectPara = document.querySelector(".para")
// let selectSpan = document.querySelectorAll("span")

// console.log(division)
// console.log(paragraph)
// console.log(span)

// console.log(selectPara)
// console.log(selectSpan)

// let div = document.getElementById("wrapper")

// let para = document.createElement("p")

// let content = document.createTextNode("Hello World! I am a paragraph created using JavaScript")

// para.appendChild(content)

// div.appendChild(para)

// console.log(div)

// let userName = prompt("Enter your name")

// let greeting = "Welcome " + userName + " !"

// let h1 = document.createElement("h1") // <h1></h1>
// let greet = document.createTextNode(greeting) // "greeting message"

// h1.appendChild(greet) // <h1>greeting message</h1>

// div.appendChild(h1) // <div id="wrapper"><h1>greeting message</h1></div>

/*
<ul>
    <li>Item1</li>
    <li>Item2<li>
</ul>
*/

// let unorderedList = document.createElement("ul") // <ul></ul>
// let li1 = document.createElement("li") // <li></li>
// let li2 = document.createElement("li") // <li></li>

// let text1 = document.createTextNode("Item1")    // "Item1"
// let text2 = document.createTextNode("Item2")    // "Item2"

// li1.appendChild(text1) // <li>Item1</li>
// li2.appendChild(text2) // <li>Item2</li>

// unorderedList.appendChild(li1) // <ul><li>Item1</li></ul>
// unorderedList.appendChild(li2) // <ul><li>Item1</li><li>Item2</li></ul>

// div.appendChild(unorderedList) // <div id="wrapper"><ul><li>Item1</li><li>Item2</li></ul></div>


let container = document.getElementById("container")
let para = document.getElementsByClassName("para")

container.style.backgroundColor = "lightblue"
para[0].style.fontSize = "18px"


let allPara = document.querySelectorAll(".para")

for(let i=0;i<=allPara.length;i++){
    allPara[i].style.backgroundColor = "yellow"
    allPara[i].style.color = "blue"
}