let input = document.getElementById("input");

var save;
let tasks = document.getElementById("tasks")
let button = document.getElementById("button");


button.addEventListener("click",function(){
  if(input.value == "" ){
      alert("Enter any Task")
      return false
  }
  tasks.innerHTML += `
  <div class="task">
  <p class="text">${input.value}</p>
  <div class="delete"><i class="fa-solid fa-trash"></i></div>
  </div>
  `
  var deletes = document.querySelectorAll(".delete");
  for(let i = 0; i < deletes.length; i++){
      deletes[i].onclick = function(){
          this.parentNode.remove();
        }
    }
    var task = document.querySelectorAll(".task")
    task.forEach(function(element){
        element.addEventListener("click", function(e){
            e.currentTarget.classList.toggle("textDecoration")
        })
    })
    input.value = "";
    save = JSON.stringify(tasks.innerHTML);
    window.localStorage.setItem("data", save);
})
tasks.innerHTML = JSON.parse(window.localStorage.getItem("data"))