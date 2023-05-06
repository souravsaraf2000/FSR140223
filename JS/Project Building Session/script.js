var products;
var totalProducts = 0;
function updateLocalStorage(id){
    let product = products[id-1]
    console.log(product.inCart)
    product["inCart"] += 1
    totalProducts += 1
    console.log(product.inCart)
    localStorage.setItem(id, JSON.stringify(product))
    localStorage.setItem("totalProducts", totalProducts)
    $('#count').text(localStorage.getItem("totalProducts"))
}
$(document).ready(function(){
    $('#count').text(localStorage.getItem("totalProducts"))
    $.get('https://dummyjson.com/products', function(data){
        products = data.products
        for(let i=0;i<products.length; i++){
            let product = products[i]
            product["inCart"] = 0
            let card = 
            `
                <div class="productCard">
                    <div class="image">
                        <img src=${products[i].thumbnail} alt="image">
                    </div>
                    <div class="content">
                        <p class="title">
                            ${products[i].title}
                        </p>
                        <p class="description">
                           <i> ${products[i].description} </i>
                        </p>
                        <p class="rating">
                            <b>Rating:</b> ${products[i].rating} / 5
                        </p>
                        <p class="price">
                            <b>Price :</b> <span class="value">${products[i].price}</span> $
                        </p>
                    </div>
                    <button id="addToCart" onclick="updateLocalStorage(${products[i].id})">Add to Cart</button>
                </div>
            `
            $('#container').append(card)
        }
    })
    .fail(function(){
        console.log("API Call Failed! Please check and try again!!")
    })

    $("#lessMore1").click(function(){
        $("#para1").css({
            display: 'none'
        })
        $("#para2").css({
            display: 'block'
        })
    })
    $("#lessMore2").click(function(){
        $("#para1").css({
            display: 'block'
        })
        $("#para2").css({
            display: 'none'
        })
    })
})