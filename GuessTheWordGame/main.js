// Setting Game Name
let gameName = "Guess The Word Game";
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} created by Ahmed`
// Setting Game Options
let inputs = document.querySelector(".inputs")
let numOfTry = 6;
let numOfLetter = 6;
let placeOfTry = 1;
let hintTry = 2 
let hint = document.querySelector(".hint");
hint.innerHTML = `hint ${hintTry}`
hint.addEventListener("click", hintTime)

for(let i = 1; i <= numOfTry; i++){
    let myDiv = document.createElement("div");
    myDiv.classList.add("try-"+i);
    myDiv.classList.add("try");

    myDiv.innerHTML = `try ${i}`;
    inputs.appendChild(myDiv);
    for(let j = 1; j <= numOfLetter; j++){
        let input = document.createElement("input");
        if(i != placeOfTry){
            input.classList.add("hide");
        }
        input.classList.add("try-"+i+"-letter-"+j);
        input.classList.add("try-letter");
        input.setAttribute("type", "text");
        input.setAttribute("maxlength", 1);
        myDiv.appendChild(input);
    }
}
let tryLetterHide = document.querySelectorAll(".hide"); 
tryLetterHide.forEach(function(element){
    element.disabled = true;
})
let tryLetter = document.querySelectorAll(".try-letter");
tryLetter.forEach(function(element , index){
    element.addEventListener("input",function(){
        this.value = this.value.toUpperCase();
        const nextInput = tryLetter[index+1];
        if(nextInput) nextInput.focus();
    })
    element.addEventListener("keydown",function(e){
        const currentIndex = Array.from(tryLetter).indexOf(this);
        if(e.key == "ArrowRight"){
            const nextInput = currentIndex+1;
            if(nextInput < tryLetter.length){
                tryLetter[nextInput].focus();
            }
        }
        if(e.key == "ArrowLeft"){
            const previousInput = currentIndex-1;
            if(previousInput >= 0 ){
                tryLetter[previousInput].focus();
            }
        }
        if(e.key == "Enter"){
            checkHell()
        }
        if(e.key == "Backspace"){
            const previousInput = currentIndex-1;
            this.value = "";
            if(previousInput >= 0 ){
                tryLetter[previousInput].focus();
            }
        }
    })
})
// guess word
let words = ["clears", "create", "delete", "display","string"];
let randomWord = words[Math.floor(Math.random()*words.length)];


let check = document.querySelector(".check");
check.addEventListener("click",checkHell)
console.log(randomWord)
function checkHell(){
    let success = true; 
    for(let i = 1; i <= numOfTry; i++){
    let guessTry = document.querySelector(`.try-${placeOfTry}-letter-${i}`);
    let letterWord = guessTry.value.toLowerCase()
        if(randomWord[i-1] == letterWord){
            guessTry.classList.add("in-place-color");
        }else if(randomWord.includes(letterWord)){
            guessTry.classList.add("not-in-place-color");
            success = false;
        }else{
            guessTry.classList.add("no-color");
            success = false;
        }
}
// when check win or loses
if(success){
let message = document.querySelector(".message");
message.innerHTML = `<span>${randomWord}</span> is the correct word`;
tryLetter.forEach(function(element){
    element.disabled = true;
})
check.disabled = true;
let tryAgain = document.createElement("button");
tryAgain.classList.add("try-again");
tryAgain.innerHTML = "Try Again";
message.appendChild(tryAgain);
tryAgain.addEventListener("click",function(){
    location.reload();
})
}else{
    for(let i = 1; i <= numOfTry; i++){
        let guessTry = document.querySelector(`.try-${placeOfTry}-letter-${i}`);
        guessTry.disabled = true;
        guessTry.classList.add("hide");
    }
    placeOfTry++;
    if(placeOfTry > numOfTry){
        let message = document.querySelector(".message");
message.innerHTML = ` you lose the correct word is <span class="wrong-word">${randomWord}</span>`;
let tryAgain = document.createElement("button");
tryAgain.classList.add("try-again");
tryAgain.innerHTML = "Try Again";
message.appendChild(tryAgain);
tryAgain.addEventListener("click",function(){
    location.reload();
})
    }
    for(let i = 1; i <= numOfTry; i++){
        let guessTry = document.querySelector(`.try-${placeOfTry}-letter-${i}`);
        guessTry.disabled = false;
        guessTry.classList.remove("hide");
        guessTry.value = "";
    }
    let focusTry = document.querySelector(`.try-${placeOfTry}`);
    if(focusTry){
        focusTry.children[0].focus();
    }
}
}
function hintTime(){
        if(hintTry > 0){
            hintTry--;
            hint.innerHTML = `hint ${hintTry}`
            let notDisabled = document.querySelectorAll("input:not([disabled])");
            let emptyTry = Array.from(notDisabled).filter((element) => element.value == "");
            let randomIndex = Math.floor(Math.random()* emptyTry.length);
            let hintInput = emptyTry[randomIndex];
            let tofill = Array.from(notDisabled).indexOf(hintInput)
            if(emptyTry.length > 0){
                hintInput.value = randomWord[tofill].toUpperCase();
            }
    
        }
        if(hintTry === 0){
            hint.disabled = true;
        }

}