const body = document.getElementsByTagName("body")[0]
function setColor(colorChange){
    body.style.backgroundColor = colorChange;
}
function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color
}