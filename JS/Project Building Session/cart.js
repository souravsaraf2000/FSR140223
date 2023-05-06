let selectedProducts = localStorage
delete selectedProducts["totalProducts"]
let arr = []
let totalSum = 0
for(let id=1;id<=30;id++){
    if(localStorage.getItem(id)){
        arr.push(JSON.parse(localStorage.getItem(id)))
    }
}
console.log(arr)
for(let i=0;i<arr.length;i++){
    totalSum += arr[i].price * arr[i].inCart
    document.getElementById('container').innerHTML += 
    `
        <div>
            <h3>${arr[i].title}</h3>
            <p>Unit Price: ${arr[i].price}</p>
            <p>${arr[i].inCart}</p>
        </div>
    `
    $('#value').text(totalSum)
}