let nums = document.querySelectorAll(".num")
let time = 1000;
nums.forEach(num =>{
    let start = 0
    let end = num.getAttribute("data-val")
    let ducration = (time / end)
    let interval = setInterval(function(){
        start++
        num.textContent = start;
        if(start == end){
            clearInterval(interval)
        }
    }, ducration)
})



