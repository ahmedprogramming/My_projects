// start remove content while move
let leadingContainer = document.getElementById("leadingContainer");
window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    leadingContainer.style.marginTop = value * 0.8 + "px";
})
// End remove content while move
// start toggle mega menu

function toggleMenu(){
    let megaMenu = document.getElementById("megaMenu")
    let megaMenuList = document.getElementById("megaMenuList")
    megaMenu.addEventListener("click", ()=>{
        if(window.getComputedStyle(megaMenuList).getPropertyValue("display") === "flex"){
            megaMenuList.style.display = "none";
            megaMenu.style.color = "black";
        }else{
            megaMenuList.style.display = "flex";
            megaMenu.style.color = "#00c6d7"; 
        }
    })
}
toggleMenu()
// End toggle mega menu

// Start Stop the ball 
// function stopBall(){
//     let theBall = window.getComputedStyle(document.querySelector(".main-heading"), ":after");
//     theBall.addEventListener("click", ()=>{
//         console.log("hello")
//     })
// }
// stopBall()
// End Stop the ball 

// Start change the content
function changeContent(){
    let contentChange = document.querySelectorAll(".contentChange");
    let contentTextChanger = document.querySelectorAll(".contentTextChanger")
    
    contentChange.forEach(function(e){
        e.addEventListener("click", (d)=>{
            contentChange.forEach(function(r){
                r.classList.remove("active")
            })
            d.currentTarget.classList.add("active")
            contentTextChanger.forEach(function(c){
                c.style.display = "none";
                if(d.currentTarget.classList.contains("design") && d.currentTarget.classList.contains("active")){
                    if(c.classList.contains("design-text")){
                        c.style.display = "block"
                    }
                }
                if(d.currentTarget.classList.contains("mobile") && d.currentTarget.classList.contains("active") ){
                    if(c.classList.contains("mobile-text")){
                        c.style.display = "block"
                    }
                }
                if(d.currentTarget.classList.contains("social") && d.currentTarget.classList.contains("active")){
                    if(c.classList.contains("social-text")){
                        c.style.display = "block"
                    }
                }
            })
                d.currentTarget.classList.add("active");
        })
    })
}
changeContent()
// End change the content
// Start filter the photos
function filterPhoto(){
let listPhotoContent = document.querySelectorAll(".listPhotoContent");
let boxPhoto = document.querySelectorAll(".boxPhoto");
listPhotoContent.forEach(function(e){
    e.addEventListener("click",function(f){
        listPhotoContent.forEach(function(d){
            d.classList.remove("active")
        })
        f.currentTarget.classList.add("active")
        if(f.currentTarget.classList.contains("All")){
            boxPhoto.forEach(function(a){
                a.style.display = "block";
                
            })
    }
    if(f.currentTarget.classList.contains("HTML")){
        boxPhoto.forEach(function(h){
            h.style.display = "none"
            if(h.classList.contains("HTML")){
                h.style.display = "block";
            }
        })
}
if(f.currentTarget.classList.contains("Photoshop")){
    boxPhoto.forEach(function(h){
        h.style.display = "none"
        if(h.classList.contains("Photoshop")){
            h.style.display = "block";
        }
    })
}
if(f.currentTarget.classList.contains("Wordprese")){
    boxPhoto.forEach(function(h){
        h.style.display = "none"
        if(h.classList.contains("Wordprese")){
            h.style.display = "block";
        }
    })
}
if(f.currentTarget.classList.contains("Mobile")){
    boxPhoto.forEach(function(h){
        h.style.display = "none"
        if(h.classList.contains("Mobile")){
            h.style.display = "block";
        }
    })
}
    })
})
}
filterPhoto()
// End filter the photos

