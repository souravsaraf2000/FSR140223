var correctAnswers = []

$(document).ready(function(){
    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function(data){
        for(let i=0;i<data.length;i++){
            correctAnswers.push(data[i].answer)
            let questionDiv = document.createElement('div')
            questionDiv.className = 'question'
            let question = document.createElement('h3')
            question.innerHTML = `Q${data[i].id}. ${data[i].question}`
            questionDiv.append(question)
            let options = data[i].options
            for(let j=0;j<options.length;j++){
                questionDiv.innerHTML +=   
                `
                    <div class='options'>
                        <label class='option'>
                            <input type='radio' name='q${data[i].id}' value='${j+1}'/>
                            <span> ${options[j]} </span>
                        </label>
                    </div>
                `
            }
            questionDiv.innerHTML += '<hr class="line"/>'
            $('.left').append(questionDiv)
        }
        let button = `<div class='btnWrapper'><button class='btn' onclick='checkResult()'>Submit</button></div>`
        $('.left').append(button)
    })
})

function checkResult(){
    let ans = $('input[type=radio]:checked')
    let score = 0
    for(let i=0;i<ans.length;i++){
        if(ans[i].value == correctAnswers[i]){
            score += 1
        }
    }
    $('#score').text(score)
}