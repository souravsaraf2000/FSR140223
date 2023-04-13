let container = document.getElementById("container")
let bar = document.getElementById("bar")
let progress = document.getElementById("progress")

// let http = new XMLHttpRequest()

// http.open("GET", "https://dummyjson.com/posts", true)

// http.onload = function(){
//     if(http.readyState == 4 && http.status >= 200){
//         progress.style.display = "none"
//         let response = JSON.parse(http.responseText)
//         let posts = response.posts
//         for(let i=0;i<posts.length;i++){
//             let postDiv = 
//             `
//                 <div id="post">
//                     <p id="title">
//                         ${posts[i].title}
//                     </p>
//                     <p id="body">
//                         ${posts[i].body}
//                     </p>
//                 </div>
//             `
//             container.innerHTML += postDiv
//         }
//     }
// }

// http.send()

// let data = {
//     "title" : "What a beautiful day!",
//     "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, impedit deleniti sint dicta molestiae, quia modi at asperiores fugit nostrum cum minima dolores enim. In provident ex corrupti eligendi illo odio doloremque praesentium et, facere quae perspiciatis voluptatem, commodi libero quis accusamus ducimus accusantium cum? Quis non adipisci dolore expedita!",
//     "userId" : 22
// }

// let xhttp = new XMLHttpRequest()

// xhttp.onreadystatechange = function(){
//     if(xhttp.readyState == 4 && xhttp.status >= 200 && xhttp.status < 300){
//         console.log(xhttp.responseText)
//         console.log(JSON.parse(xhttp.responseText))
//     }
// }

// xhttp.open("POST", "https://dummyjson.com/posts/add", true)
// xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
// xhttp.send(JSON.stringify(data))

// console.log("Hello")

function greetUser(){
    container.innerHTML += "<h1> Hello User </h1>"
}

try{
    greetUser()
    console.log(user)
}
catch(e){
    console.log(e)
    container.innerHTML+=`${e}`
}