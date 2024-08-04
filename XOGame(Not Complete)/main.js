let buttonGame = document.querySelectorAll(".button-option");
let intro = document.querySelector(".intro");
let buttonRest = document.querySelector(".button-reset");
let result = document.getElementById("result");
let newGame = document.querySelector(".new-game");
let winningPattern = [ [0,1,2], [0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,7],[2,4,6]]
let xTurn = true
let count = 1;
//This function is executed when a player wins;
const disableButtons = () => {
    buttonGame.forEach(element => (element.disabled = true))
    intro.classList.remove("hide")
    
}
const winfnaction = (letter) => {
    disableButtons();
    if(letter == "X"){
        result.innerHTML = "&#x1F389; <br> 'X' Wins"
    }else{
        result.innerHTML = "&#x1F389; <br> 'O' Wins"

    }
}

// Display x/O on click
let  winner = (element1, element2, element3) => {
    for(let i of winningPattern)
    [element1,element2,element3] = [buttonGame[i[0]].innerText,buttonGame[i[1]].innerText,buttonGame[i[2]].innerText] 

        if(element1 != "" && element2 != "" & element3 != ""){
            if(element1 == element2 && element2 == element3){ 
                winfnaction(element1)
            }
        }
}
buttonGame.forEach(function(element){
    
    element.addEventListener("click",function(e){
        if(xTurn){
            xTurn = false
            count++
            element.textContent = "X"
            element.disabled = true
        }else{
            xTurn = true
            count++
            element.textContent = "O"
            element.disabled = true
        }
        if(count > 9){
            intro.classList.remove("hide");
            result.textContent = "It is Draw";
        }
        winner()
    })
    newGame.addEventListener("click", function(){
        intro.classList.add("hide");
        count = 1;
        element.textContent = " ";
        element.disabled = false;
    
    })
    buttonRest.addEventListener("click",function(){
        element.textContent = " ";
        element.disabled = false;
        let count = 1;
    })
})