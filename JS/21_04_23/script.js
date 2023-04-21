$(document).ready(function(){
    $.get('https://dummyjson.com/products', function(data){
        let products = data.products
        for(let i=0;i<products.length; i++){
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

    /*
        rev = 0
        405 % 10 = 5

        rev = (rev * 10) + d = 5

        405 / 10 = 40

        40%10 = 0

        rev = (rev * 10) + d = 50

        40 / 10 = 4

        4%10 = 4

        rev = (rev * 10) + d = 504

        4/10 = 0
    */

    let num = 12321
    let copy = num
    let rev = 0
    while(num != 0){
        let digit = num % 10
        rev = (rev * 10) + digit
        num = parseInt(num / 10)
    }
    if(rev == copy){
        console.log("Pallindrome Number")
    }
    else{
        console.log("Not Pallindrome Number")
    }
})