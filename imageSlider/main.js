// array of image
let listOfImage = [
    "/imageSlider/image/home1.jpeg",
    "/imageSlider/image/home2.jpeg",
    "/imageSlider/image/home3.jpg",
    "/imageSlider/image/home4.jpeg",
    "/imageSlider/image/home5.jpeg",
]
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let currentnumber = document.querySelector(".currentnumber");
let placeOfNumber = document.querySelector(".place-of-number");
let totalNumber = document.querySelector(".totalnumber");
totalNumber.innerHTML = listOfImage.length;
let counter = 1;
for(let i = 0; i < listOfImage.length; i++){
    let nubmerOfplace = document.createElement("span")
    nubmerOfplace.classList.add("number-image");
    nubmerOfplace.classList.add(`number-image-${i+1}`);
    nubmerOfplace.innerHTML = i+1;
    placeOfNumber.appendChild(nubmerOfplace); 
    let image = document.createElement("img");
    image.setAttribute("src", listOfImage[i]);
    image.classList.add("image");
    image.classList.add(`image-${i+1}`);
    document.querySelector(".images").appendChild(image);
    if(i == 0){
        image.classList.add("show");
        nubmerOfplace.classList.add("active");
        currentnumber.innerHTML = 1;
    }
}
prev.disabled = true

let imageNow = document.querySelectorAll(".image");
let imageNumber = document.querySelectorAll(".number-image");
function check(){
imageNow.forEach(function(element){
            element.classList.remove("show")
        })
        imageNumber.forEach(function(element){
            element.classList.remove("active")
        })
         if(counter == 1){
            prev.classList.add("disable")
            next.classList.remove("disable")

            next.disabled = false
            prev.disabled = true

        }else if(counter == listOfImage.length){
            next.classList.add("disable")
            prev.classList.remove("disable")
            prev.disabled = false
            next.disabled = true


        }else{
            prev.disabled = false
            next.disabled = false
            next.classList.remove("disable")
            prev.classList.remove("disable")
        }
}
imageNumber.forEach(function(element){
    element.addEventListener("click", function(){
        counter = this.innerHTML
        check()

        this.classList.add("active")
        currentnumber.innerHTML = this.innerHTML
        for(let i = 0; i < listOfImage.length; i++){
            if(imageNow[i].classList.contains(`image-${counter}`)){
                imageNow[i].classList.add("show");
            }
        }

        })
})

prev.addEventListener("click", function(){
    counter--;
    imageNow.forEach(function(element){
        element.classList.remove("show")
    })
    imageNumber.forEach(function(element){
        element.classList.remove("active")
    })
    if(imageNumber[counter-1]){
        imageNumber[counter-1].classList.add("active")
    }
    for(let i = 0; i < listOfImage.length; i++){
        if(imageNow[i].classList.contains(`image-${counter}`)){
            imageNow[i].classList.add("show");
        }
    }
}
)
next.addEventListener("click", function(){
    
})