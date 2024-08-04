// git info from image
let ListOfCards = [
    {
        dataInfo: "c#",
        image: "/MemoryBlocksGame/image/cthing.png",
    },{
        dataInfo: "c++",
        image: "/MemoryBlocksGame/image/c++.png",
    },{
        dataInfo: "css",
        image: "/MemoryBlocksGame/image/css.jpeg",
    },{
        dataInfo: "github",
        image: "/MemoryBlocksGame/image/gitGub.jpeg",
    },{
        dataInfo: "html",
        image: "/MemoryBlocksGame/image/html.jpeg",
    },{
        dataInfo: "java",
        image: "/MemoryBlocksGame/image/java.png",
    },{
        dataInfo: "javascript",
        image: "/MemoryBlocksGame/image/javascript.png",
    },{
        dataInfo: "php",
        image: "/MemoryBlocksGame/image/php.png",
    },{
        dataInfo: "python",
        image: "/MemoryBlocksGame/image/python.png",
    },{
        dataInfo: "react",
        image: "/MemoryBlocksGame/image/react.jpeg",
    }
]
// Start the game 
let intervalId;
let StartGame = document.querySelector(".StartGame");
let StartGameButton = document.querySelector(".StartGame button");
StartGameButton.addEventListener("click", function(){
    let playerName = prompt("enter your name")
    if(playerName == null || playerName == ""){
        document.querySelector(".memory-info h1 span").innerHTML = "Guest"

    }else{
    document.querySelector(".memory-info h1 span").innerHTML = playerName
}
    StartGame.remove()
    document.querySelector(".levels").style.display = "flex"
})
// show cards in webside
let memoryPlaceGame = document.querySelector(".memoryPlaceGame");
let doubleCards = 0
while(doubleCards < 2){
    doubleCards++
for(let i = 0; i < ListOfCards.length; i++){
    let card = document.createElement("div");
    let frontCard = document.createElement("div");
    let BackCard = document.createElement("div");
    let image = document.createElement("img");
    card.setAttribute("data-info", ListOfCards[i].dataInfo);
    card.classList.add("card");
    frontCard.classList.add("frontCard");
    BackCard.classList.add("BackCard");
    frontCard.classList.add("face");
    BackCard.classList.add("face");
    image.setAttribute("src", ListOfCards[i].image);
    BackCard.appendChild(image);
    card.appendChild(frontCard);
    card.appendChild(BackCard);
    memoryPlaceGame.appendChild(card);
}
}
// Random order 
let arrayOfCardsNumber = []
let cardsNumber = document.querySelectorAll(".card");
for(let i =0; i < memoryPlaceGame.children.length; i++){
    arrayOfCardsNumber.push(i)
}
// shufel cards
let card,tem
for(let i = 0; i < arrayOfCardsNumber.length; i++){
    random = Math.floor(Math.random() * arrayOfCardsNumber.length)
    tem = arrayOfCardsNumber[i]
    arrayOfCardsNumber[i] = arrayOfCardsNumber[random]
    arrayOfCardsNumber[random] = tem
}
for(let i = 0; i < arrayOfCardsNumber.length; i++){
    cardsNumber[i].style.order = arrayOfCardsNumber[i]
}
// flip cards
let count = 0
let decration = 1000
let check1 = [];
let check2 = [];
let score = document.querySelector(".memoryGame .memory-info h2 .score")
score.innerHTML = 0
let trys = document.querySelector(".memoryGame .memory-info h2 .trys")
trys.innerHTML = 0
let tyrnumber = 0
function flipCards(){
    this.classList.add("flip")
    count++
    if(count % 2 == 1){
        check1[0] = this.getAttribute("data-info")
        check1[1] = this
    }
    if(count % 2 == 0){
        memoryPlaceGame.classList.add("noClick")
        check2[0] = this.getAttribute("data-info")
        check2[1] = this
        setTimeout(checkForMatch, decration)
    }

}
cardsNumber.forEach(e =>{
    e.addEventListener("click", flipCards)
})
function checkForMatch(){
    if(check1[0] == check2[0]){
        score.innerHTML = Number(score.innerHTML) + 1
    }else{
        tyrnumber++
        trys.innerHTML = tyrnumber
        check1[1].classList.remove("flip")
        check2[1].classList.remove("flip")
    }
    memoryPlaceGame.classList.remove("noClick")
    checkWin()
}
// check Win
function checkWin(){
    let checker = []
    cardsNumber.forEach(e => {
        checker.push(e.classList.contains("flip"))
    })
    let answer = checker.every(element => element == true)
    if(answer){
        clearInterval(intervalId)
        let win = document.createElement("div")
        win.classList.add("win")
        win.innerHTML = "You Win"
        memoryPlaceGame.innerHTML = ""
        memoryPlaceGame.appendChild(win)
        win.addEventListener("click", function(){
            location.reload()})
    }
    
}
// timer
function timeGame(){
    let time = 180
    function padWidth(times){
        return String(times).padStart(2, "0")
    }
    intervalId = setInterval(function(){
        time--
        document.querySelector(".timer").innerHTML = padWidth(Math.floor(time / 60)) + " : " + padWidth(time % 60)
        if(time == 0){
            clearInterval(intervalId)
            let lose = document.createElement("div")
            lose.classList.add("lose")
            lose.innerHTML = "You lose Try again"
            memoryPlaceGame.innerHTML = ""
            memoryPlaceGame.appendChild(lose)
            lose.addEventListener("click", function(){
                location.reload()})
        }
    }, 1000)
    
}
// levels
let easy = document.querySelector(".easy button");
let medium = document.querySelector(".medium button");
let hard = document.querySelector(".hard button");
easy.addEventListener("click", function(){
    document.querySelector(".levels").style.display = "none"
    cardsNumber.forEach(e => {
        e.style.transform = "rotateY(180deg)"
    })
    setTimeout(function(){
        cardsNumber.forEach(e => {
            e.style.transform = "rotateY(0deg)"
        })
    }, 1000)
}
)
medium.addEventListener("click", function(){
    document.querySelector(".levels").style.display = "none"

})
hard.addEventListener("click", function(){
    document.querySelector(".levels").style.display = "none"
    document.querySelector(".timer").style.display = "block"
    timeGame()
})