let device = document.querySelectorAll(".device");
let box = document.querySelectorAll(".box")
device.forEach(function(element){
    element.addEventListener("click",function(e){
        device.forEach(function(uses){
            uses.classList.remove("active")
            })
            box.forEach(function(uses){
                uses.classList.add("displayNone")
                uses.classList.remove("displayBlock")
            })
            e.currentTarget.classList.add("active")
            if(e.currentTarget.classList.contains("all")){
                box.forEach(function(uses){
                    uses.classList.remove("displayNone")
                    uses.classList.add("displayBlock")
                })}
            if(e.currentTarget.classList.contains("phone")){
                box.forEach(function(uses){
                    if(uses.classList.contains("phone")){
                    uses.classList.remove("displayNone")
                    uses.classList.add("displayBlock")
                }
                })
            }
            if(e.currentTarget.classList.contains("tablet")){
                box.forEach(function(uses){
                    if(uses.classList.contains("tablet")){
                    uses.classList.remove("displayNone")
                    uses.classList.add("displayBlock")
                }
                })
            }
            if(e.currentTarget.classList.contains("laptop")){
                box.forEach(function(uses){
                    if(uses.classList.contains("laptop")){
                    uses.classList.remove("displayNone")
                    uses.classList.add("displayBlock")
                }
                })
            }
            })
    })
let input = document.getElementById("input")
let submit = document.getElementById("submit")
let text = document.querySelectorAll(".text");
submit.addEventListener("click", function(){
    if(input.value == ""){
        return false
    }
    text.forEach(element => {
        if(element.textContent.toLocaleLowerCase().split(" ").includes(input.value.toLocaleLowerCase())){
            
        }
        
    });
    input.value = ""
})