      // Get all elements with class "key"
      let keys = document.querySelectorAll(".key");
      let reset = document.getElementById("reset");
      let result = document.getElementById("result");
      let resultP = document.getElementById("resultP");
      let resultPs = document.createTextNode("End of chapter");
      let remover = document.getElementById("remove");
      let saver;
      let checker = false;
      let counter = 0;
      // Loop through each key element and add click event listener
      keys.forEach(function (key) {
        key.addEventListener("click", function () {
          this.classList.add("press");
          checker = true;
          saver = key.textContent;
          if(counter < 1){
            resultP.textContent = key.textContent;
            counter += 1;
          }else{
            resultP.textContent += key.textContent;
          }
        });
      });
      reset.addEventListener("click", function(){
        keys.forEach(function (key) {
            key.classList.remove("press");
            resultP.textContent = resultPs.textContent
            counter = 0;
            checker = false;
        });
      })
      remover.addEventListener("click",function(){
        if(checker == true){
          keys.forEach(function (key) {
            if(resultP.textContent.split("").pop() == key.textContent){
            key.classList.remove("press");
            
            }
          
        });
        }
      })