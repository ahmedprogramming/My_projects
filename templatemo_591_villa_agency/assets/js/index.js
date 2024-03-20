// start toggle
let listBurgar = document.getElementById("list-burgar");
let contentListBurgar = document.getElementById("content-list-burgar");
let display = 0 
listBurgar.addEventListener("click", function (){
    if (display == 0){
        contentListBurgar.style.opacity = 0;
        contentListBurgar.style.zIndex = -2;
        display = 1;
    } else{
        contentListBurgar.style.opacity = 1;
        contentListBurgar.style.zIndex = 3;
        display = 0;
    }
})
// End toggle
// Start Change Image
let changImage = document.getElementById("image-change");
let chageImageToRight = document.querySelector(".leading .boxs .box .right");
let chageImageToLeft = document.querySelector(".leading .boxs .box .left");
let counter = 1236;
let lander = document.querySelector(".leading .boxs .box .location");
let locationSpan = document.querySelector(".leading .boxs .box .location span");
let locationH1 = document.querySelector(".leading .boxs .box h1");
chageImageToLeft.addEventListener("click", function () {
    counter -= 1
    counter = Math.abs(counter)
    if(counter %3 == 0){
        changImage.style.backgroundImage = `url(/assets/images/banner-01.jpg)`;
    lander.innerHTML = "Toronto, <span>Canada</span>";
    locationH1.textContent = "Hurry! get the best villa for you";
    } 
    if( counter %3 == 1){
        changImage.style.backgroundImage = `url(/assets/images/banner-02.jpg)`;
    lander.innerHTML = "Melbourne, <span>Australia</span>";
    locationH1.textContent = "Be Quick! Get the Best Villa in town";
    } 
    
    if (counter % 3 == 2){
        changImage.style.backgroundImage = `url(/assets/images/banner-03.jpg)`;
    lander.innerHTML = "Miami, <span>South Florida</span>";
    locationH1.textContent = "Act NOW! get the highest level penthouse";

    }
})
chageImageToRight.addEventListener("click", function () {    
    counter += 1
    if(counter %3 == 0){
        changImage.style.backgroundImage = `url(/assets/images/banner-01.jpg)`;
    lander.innerHTML = "Toronto, <span>Canada</span>";
    locationH1.textContent = "Hurry! get the best villa for you";
    } 
    if( counter %3 == 1){
        changImage.style.backgroundImage = `url(/assets/images/banner-02.jpg)`;
    lander.innerHTML = "Melbourne, <span>Australia</span>";
    locationH1.textContent = "Be Quick! Get the Best Villa in town";
    } 
    
    if (counter % 3 == 2){
        changImage.style.backgroundImage = `url(/assets/images/banner-03.jpg)`;
    lander.innerHTML = "Miami, <span>South Florida</span>";
    locationH1.textContent = "Act NOW! get the highest level penthouse";

    }
})

// End Change Image
// Start toggle image
let toggleLink = document.querySelectorAll(".feature .container .feature-text .link")
let toggleLinkP = document.querySelectorAll(".feature .container .feature-text .link p");

toggleLink.forEach(element => {
    element.addEventListener("click", function(){
        toggleLinkP.forEach( e => {
            e.classList.toggle("toggle_paragraph")
        });
    })
});
// End toggle image