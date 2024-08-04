// click to the button
let app = document.querySelector(".app")
let questionsPlace = document.querySelector(".questionsPlace")
let titleB = document.querySelector("#titleB");
let saveQuestion = []
titleB.addEventListener("click", showQuestions)
let  timeLiver = 1;
let counter = 0
let rightAnswerCounter = 0
function showQuestions(){
    ChangeQuestion()
    app.style.display = "none"
    StartTimer()

}

function ChangeQuestion(){
    questionsPlace.innerHTML = ""
    fetch(`/CreateQuizApplication/html_quetion.json`).then(res => res.json()).then(data => {
        // Randomally select questions
        let questions = []
        
        for(let i = 0; i < 5; i++){
            let random = Math.floor(Math.random() * data.length)
            // select unique questions
            while(questions.includes(data[random])){
                random = Math.floor(Math.random() * data.length)
            }
            questions.push(data[random])    
        }
    
        let randomQuestion = Math.floor(Math.random() * questions.length)
        // questions
        var question = questions[randomQuestion]
        while(saveQuestion.includes(question["title"])){
            randomQuestion = Math.floor(Math.random() * questions.length)
            question = questions[randomQuestion]
        }
        let rightAnswer = question["right_answer"]
        let randomAnswer = ["answer_1", "answer_2", "answer_3", "answer_4"]
        // Answer 
        let answerchange = []
        for(let i = 0; i < 4; i++){
            let random = Math.floor(Math.random() * randomAnswer.length)
            while(answerchange.includes(randomAnswer[random])){
                random = Math.floor(Math.random() * randomAnswer.length)
            }
            answerchange.push(randomAnswer[random])
        }
        // save question to have unique questions 
        saveQuestion.push(question["title"])
        // question place
        let divTitle = document.createElement("h1")
        divTitle.classList.add("titleOfQuestion")
        divTitle.innerHTML = question["title"]
        questionsPlace.appendChild(divTitle)
        let ulFORAnswers = document.createElement("ul")
        // Answer
        for(let i = 0; i < 4; i++){
            let divAnswer = document.createElement("li")
            let divBut = document.createElement("button")
            divAnswer.classList.add("answer")
            divBut.textContent = question[answerchange[i]]
            console.log(question[answerchange[i]])
            divAnswer.appendChild(divBut)
            questionsPlace.appendChild(divAnswer)
        }
        let answerbutton = document.querySelectorAll(".answer button")
        let divCounter = document.createElement("div")
        divCounter.classList.add("counter")
        divCounter.innerHTML = `${counter} / 5`
        questionsPlace.appendChild(divCounter)


        if(counter == 5 || timeLiver == 0){
            questionsPlace.innerHTML = ""
            let divEnd = document.createElement("div")
            divEnd.classList.add("end")
            divCounter.innerHTML = `Your Score Is ${rightAnswerCounter}`
            divEnd.appendChild(divCounter)
            questionsPlace.appendChild(divEnd)
            let playAgain = document.createElement("button")
            playAgain.textContent = "Play Again"
            divEnd.appendChild(playAgain)
            playAgain.addEventListener("click", ()=>{
                window.location.reload()
            })
        }
        // right answer
        answerbutton.forEach(element =>{
            element.addEventListener("click", (e)=>{
                if(rightAnswer == e.target.textContent){ 
                    rightAnswerCounter++
                }
                counter++

                ChangeQuestion()
            })
        })

    })

}
function StartTimer(){
    let timer = document.querySelector(".timer")
    timeLiver = 10
    let min  = timeLiver / 60
    function padWidth(times){
        return String(times).padStart(2, "0")
    }
    var inter = setInterval(() => {
        timeLiver--
        timer.innerHTML = `0${Math.floor(padWidth(timeLiver / 60))} : ${padWidth(timeLiver % 60) }`
        if(counter == 5){
            clearInterval(inter)
        }
        if(timeLiver == 0){
            clearInterval(inter)
            ChangeQuestion()

        }
    }, 1000)

}