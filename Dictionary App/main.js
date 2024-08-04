let inputText = document.getElementById("inputText")
let searchBtn = document.getElementById("searchBtn")
let sound = document.getElementById("sound")

let result = document.getElementById("result")
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
searchBtn.addEventListener("click",function(){
    fetch(`${url}${inputText.value}`)
    .then(respones => respones.json())
    .then(data => {
        result.innerHTML = `
        <div class="textWord">
        <h3 id="word">${inputText.value}</h3>
        <button class="sou" onclick="soundPlay()">
          <i class="fa-solid  fa-volume-high"></i>
          </button>
      </div>
      <div class="details">
        <p class="prons">${data[0].phonetic}</p>
        <h3 class="meaning">
        ${data[0].meanings[0].definitions[0].definition}
        </h3>
        <h4 class="example">
        ${data[0].meanings[0].definitions[0].example || "there is no example"}
        </h4>
      </div>
        `
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
        inputText.value = ""
    }
    )
    .catch(()=>{
        result.innerHTML = `<h3 id="word">there is no word like this</h3>`
    })
})
function soundPlay(){
    sound.play();
}