// letters press button
let letters = document.querySelector(".letters");
let lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for(let i = 0; i < lettersArr.length; i++){
    let letter = document.createElement("button");
    letter.classList.add("letter");
    letter.classList.add(`letter-${lettersArr[i]}`);
    letter.innerHTML = lettersArr[i].toUpperCase();
    letters.appendChild(letter);
}
// Object of words + categories
const words = {
  programming: ["php", "java script", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
let random = Math.floor(Math.random()*Object.keys(words).length);
let category = Object.keys(words)[random];
let randomWord = words[Object.keys(words)[random]];
let randomSelected = randomWord[Math.floor(Math.random()*randomWord.length)];
// type of catagory
let catagorySpan = document.querySelector(".catagory span");
catagorySpan.innerHTML = category;
// guess word space 
let guessWord = document.querySelector(".guess-word");
for(let i = 0; i < randomSelected.length; i++){
  let empty = document.createElement("span");
  if(randomSelected[i] === " "){
    empty.classList.add("withSpace");
    empty.innerHTML = "-";
    guessWord.appendChild(empty);

  }else{
    empty.classList.add("placeWord");
    
    guessWord.appendChild(empty);
  }
}
// guess the name
let wordser = document.querySelectorAll(".placeWord");
let letter = document.querySelectorAll(".letter");
let guessWordName = randomSelected.toLowerCase().split("");
let hangmanDraw = document.querySelector(".hangman-draw");
let checker = []
let wrong = 0;
let message = document.querySelector(".message");
let reset = document.querySelector(".Reset");
let overall = document.querySelector(".overall")
letter.forEach(function(e){
    e.addEventListener("click",function(){
      let suik = false;
      if(guessWordName.includes(e.innerHTML.toLowerCase())){
        suik  = true;
        let index = guessWordName.indexOf(e.innerHTML.toLowerCase());
        guessWordName.splice(index,1, "_")
        wordser[index].innerHTML = e.innerHTML;
        checker.push(suik)
        if(checker.length == randomSelected.length){
          message.innerHTML = `<span class="win"> you are win </span>, congratulations`;
          reset.style.display = "block"
          overall.style.display = "block"
        }
      }else{
        wrong++;
        hangmanDraw.classList.add(`body-${wrong}`)
        if(wrong == 8){
          message.innerHTML = `<span class="fail"> you are fail </span>, the right word is<span class="answer"> ${randomSelected}</span> is the correct word`;
          letter.forEach(function(element){
            element.disabled = true;
          })
          reset.style.display = "block"
          overall.style.display = "block"
        }
      }
    })
})
// reset the game 
reset.addEventListener("click",function(){
  location.reload();
})
