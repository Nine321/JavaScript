var myMessage = document.getElementById("message");

function showMessage(){
    myMessage.className ="show";

}

setTimeout(showMessage, 3000); //milisecond = 3 seconds




var colorChanger = document.getElementById("color-changer");
var colors  =["red", "blue" ,"green", "pink"];
var counter = 0;

function changeColor(){

    if(counter >= colors.length){
        counter = 0;
    }
    colorChanger.style.background =colors[counter];
    counter ++;

}

var myTimer = setInterval(changeColor, 3000);


colorChanger.onclick = function(){
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer stopped";
}
