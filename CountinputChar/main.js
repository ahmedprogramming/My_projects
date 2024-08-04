let input = document.querySelector("#input");
let fillDiv = document.querySelector(".fillDiv span");
let counter = document.querySelector(".counter");
// input 
// fillDiv
// counter
counter.innerHTML = input.getAttribute("maxlength");
input.addEventListener("keyup", function () {
    fillDiv.style.width = `${(input.value.length / input.getAttribute("maxlength")) * 100}%`;
    counter.innerHTML = input.getAttribute("maxlength") - input.value.length;
})