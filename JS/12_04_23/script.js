let container = document.getElementById('container')
let http = new XMLHttpRequest()

http.onreadystatechange = function(){
    if(http.readyState == 4){
        let list = JSON.parse(http.responseText)
        let products = list.products
        for(let i=0;i<products.length;i++){
            container.innerHTML += `<h1>${products[i].title}</h1>`
        }
    }
}

http.open("GET", "https://dummyjson.com/products", true)

http.send()

console.log(http)