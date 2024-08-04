// array of image
let listOfImage = [
    "/imageSlider/image/home1.jpeg",
    "/imageSlider/image/home2.jpeg",
    "/imageSlider/image/home3.jpg",
    "/imageSlider/image/home4.jpeg",
    "/imageSlider/image/home5.jpeg",
]
let placeOfNumber = document.querySelector(".place-of-number");
let totalNumber = document.querySelector(".totalnumber");
totalNumber.innerHTML = listOfImage.length;
let counter = 1;
for(let i = 0; i < listOfImage.length; i++){
    let nubmerOfplace = document.createElement("span")
    nubmerOfplace.classList.add("number");
    nubmerOfplace.classList.add(`number-${i+1}`);
    nubmerOfplace.innerHTML = i+1;
    placeOfNumber.appendChild(nubmerOfplace); 
    let image = document.createElement("img");
    image.setAttribute("src", listOfImage[i]);
    image.classList.add("image");
    image.classList.add(`image-${i+1}`);
    document.querySelector(".images").appendChild(image);
}
nubmerOfplace.addEventListener("click",function(){
    counter = this.innerHTML
})