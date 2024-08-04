let dice = document.querySelectorAll("img")
let buttonDice = document.querySelector(".roll")
let total = document.querySelector(".total")
function roll(){
    dice.forEach(img => {
        img.classList.add("shake")
        setTimeout(function(){
            img.classList.remove("shake")
                let random1 = Math.floor(Math.random()*6);
                let random2 = Math.floor(Math.random()*6);
                document.querySelector("#Dice1").setAttribute("src",`./image/Dice${random1+1}.jpeg`)
                document.querySelector("#Dice2").setAttribute("src",`./image/Dice${random2+1}.jpeg`)
                total.innerHTML = `the total number is ${(random1 + 1)+(random2+1)}`
        },1000)
    })
}
window.onload = function(){
    roll()
}