// textInput
// submitInput
// check
function checker(){
    let textInput = document.getElementById("textInput")
    let submitInput = document.getElementById("submitInput")
    let check = document.querySelector(".check")
    let arrayOfText;
    let i = "atdgew";
    let d = Array.from(i)
    d.reverse()
    submitInput.addEventListener("click", function(){
        arrayOfText = Array.from(textInput.value)
        if(textInput.value.toUpperCase() == arrayOfText.reverse().join("").toUpperCase()){
            check.textContent = `${textInput.value} Is Palindrome`;
        }else{
            check.textContent = `${textInput.value} Is Not Palindrome`;
        }
        textInput.value = ""
    })
}
checker()