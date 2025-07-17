const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error"
    }
}

document.getElementById('backspace').addEventListener('click', function() {
    display.value = display.value.slice(0, -1);
});