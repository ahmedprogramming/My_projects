let section3 = document.querySelector(".section-3");
let ul = document.querySelector(".section-3 ul");
let li = document.querySelectorAll(".section-3 ul li");
let start = false;
window.onscroll = function(){
    console.log(window.scrollY)
if(window.scrollY >= section3.offsetTop){
    if(!start){
    start = true;
    li.forEach(lil => {scrollOnTime(lil)})
}
}
}
function scrollOnTime(element){
    let time = 0;
    let interval = setInterval(function(){
        time += 1
        element.textContent = time
        if(time == element.getAttribute("data-goat")){
            clearInterval(interval)
        }
    }, 1000 / element.getAttribute("data-goat"))
    
}   
