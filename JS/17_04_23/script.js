let left = document.getElementById("left")
let right = document.getElementById("right")
let selectedImage = "image0"

var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

function imageClicked(i){
    document.getElementById(selectedImage).classList.remove("active")
    let id = "image"+i
    selectedImage = id
    document.getElementById(id).classList.add("active")
    // document.querySelector("#left img").src = productData.photos[i]
    document.getElementById("previewImage").src = productData.photos[i]
}
left.innerHTML += `<img src=${productData.preview} class = "leftPreview" id="previewImage"/>`

right.innerHTML += 
`
  <h1 id="name">${productData.name}</h1>
  <p id="brand">${productData.brand}</p>
  <p id="price">Price : Rs <span id="value">${productData.price}</span></p>
  <p id="desc">Description</p>
  <p id="description">${productData.description}</p>
  <p id="preview">Product Preview</p>
  <div id="previewDiv"></div>
`

for(let i=0;i<productData.photos.length; i++){
    if(i==0){
        document.getElementById("previewDiv").innerHTML += 
        `
            <img src=${productData.photos[i]} class="image active" id="image${i}" onclick="imageClicked(${i})"/>
        `
    }
    else{
        document.getElementById("previewDiv").innerHTML += 
        `
            <img src=${productData.photos[i]} class="image" id="image${i}" onclick="imageClicked(${i})"/>
        `
    }
}

right.innerHTML += `<button id="btn">Add to Cart</button>`