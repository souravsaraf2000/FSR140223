$(document).ready(function(){
    // let btn = $("#btn")
    // btn.click(function(){
    //    alert("Button clicked!") 
    // })

    // let name, email, age, mobile

    // $("input").css({
    //     width: '100%',
    //     padding: '10px',
    //     marginBottom: '10px'
    // })
    // $("#form").css({
    //     width: '30%',
    //     margin: '0 auto'
    // })

    // $("input[type=text]").change(function(e){
    //     name = e.target.value
    // })
    // $("input[type=number]").change(function(e){
    //     age = e.target.value
    // })
    // $("input[type=email]").change(function(e){
    //     email = e.target.value
    // })
    // $("input[type=tel]").change(function(e){
    //     mobile = e.target.value
    // })
    // $("input[type=text]").on({
    //     'input' : function(e){
    //         console.log(e.target.value)
    //         $('#nameInput').text(e.target.value)
    //     },
    //     'focus' : function(){
    //         $("input[type=text]").css({
    //             backgroundColor: 'lightblue'
    //         })
    //     },
    //     'blur' : function(){
    //         $(this).css({
    //             backgroundColor: 'green'
    //         })
    //     }
    // })
    // $("#form").submit(function(e){
    //     e.preventDefault()
    //     console.log(name, email, mobile, age)
    //     let html =  
    //     `
    //         <div>
    //             <h1>${name}</h1>
    //             <h1>${email}</h1>
    //             <h1>${mobile}</h1>
    //             <h1>${age}</h1>
    //         </div>
    //     `
    //     $('body').append(html)
    // })

    // let http = new XMLHttpRequest()
    // http.onreadystatechange = function(){
    //     if(this.readyState == 4 && this.status >= 200 && this.status <300){
    //         console.log(JSON.parse(this.responseText))
    //     } 
    // }
    // http.open("GET", 'https://dummyjson.com/comments', true)
    // http.send()

    // $.get('https://dummyjson.com/comments', function(data, status){
    //     let comments = data.comments
    //     for(let i=0;i<comments.length; i++){
    //         let comment = `<h1>${comments[i].body}</h1>`
    //         $('#wrapper').append(comment)
    //     }
    // })

    // let obj = {
    //     body: "Awesome!",
    //     postId: 32,
    //     userId: 57,
    // }

    // $.post('https://dummyjson.com/comments/add', obj, function(data){
    //     console.log(data)
    // }).fail(function(){
    //     console.log("API Call failed")
    // })

    // function countDigits(number){
    //     let cnt = 0
    //     while(number!=0){
    //         cnt++
    //         number = parseInt(number / 10)
    //     }
    //     return cnt
    // }

    // let num = 153
    // let copy = num
    // let digitCnt = countDigits(num)
    // let sum = 0
    // while(num != 0){
    //     let digit = num % 10
    //     sum += Math.pow(digit, digitCnt)
    //     num = parseInt(num / 10)
    // }
    // if(sum == copy){
    //     console.log("Armstrong")
    // }
    // else{
    //     console.log("Not Armstrong")
    // }

    /*
        H/W

        Check whether a number is pallinfrome or not

        1221,
        121,
        111,
        11,
        12321

    */
})