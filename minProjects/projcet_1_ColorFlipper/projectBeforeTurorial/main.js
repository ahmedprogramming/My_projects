function colorFlipper(){
let colorChanger = document.querySelectorAll(".colorChanger");
let colorList = ["rgb(214, 18, 18)",
    "rgb(211, 214, 18)",
    "rgb(18, 214, 28)",
    "rgb(18, 214, 198)",
    "rgb(38, 18, 214)",
    "rgb(214, 18, 198)",
    "rgb(214, 18, 60)",
    "rgb(0, 0, 0)"];
colorChanger.forEach(function(element){
    element.addEventListener("click", function(e){
        colorChanger.forEach(function(elements){
            elements.classList.remove("active")   
        })
        e.currentTarget.classList.add("active")
        if(window.getComputedStyle(e.currentTarget).getPropertyValue("background-color") == "rgb(255, 0, 0)"){
            document.body.style.backgroundColor = "rgb(255, 0, 0)"
        }else if(window.getComputedStyle(e.currentTarget).getPropertyValue("background-color") == "rgb(0, 128, 0)"){
            document.body.style.backgroundColor = "rgb(0, 128, 0)"
        }
        if(window.getComputedStyle(e.currentTarget).getPropertyValue("background-color") == "rgb(0, 0, 255)"){
            document.body.style.backgroundColor = "rgb(0, 0, 255)"
        }
        if(window.getComputedStyle(e.currentTarget).getPropertyValue("background-color") == "rgb(255, 255, 255)"){
            e.currentTarget.classList.remove("active")
            document.body.style.backgroundColor = colorList[Math.trunc((Math.random()*8))];
        }
        window.sessionStorage.setItem("color", window.getComputedStyle(document.body).getPropertyValue("background-color"));
    })

    document.body.style.backgroundColor = window.sessionStorage.getItem("color")

})}
colorFlipper()