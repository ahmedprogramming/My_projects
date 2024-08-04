let text = document.querySelector(".text");
let btn = document.getElementById("generator");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single";
function generator(){
    text.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        text.classList.add("fade")
        text.textContent = `${item.joke}`
    })
    console.log(text.classList)
}
generator()
btn.addEventListener("click", generator)