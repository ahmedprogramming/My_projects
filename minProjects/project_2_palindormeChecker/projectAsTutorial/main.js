const input = document.getElementById("textInput");

function reverseWord(str){
    return str.split("").reverse().join("");
}
function check(){
    const value = input.value;
    const revers = reverseWord(input.value);

    if(value == revers){
        alert("P A L I N D O R M E")
    }else{
        alert("it is not palindorme")
    }

    input.value = ""
}