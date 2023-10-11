console.log(document.forms.myFormName);

var myForm = document.forms.myFormName;

myForm.name;

myForm.name.value; //geht nur inner console, wenn man das da eingibt und etwas in namen feld steht

myForm.name.onfocus = function(){ //bleibt auch nach dem anklicken pink
    myForm.name.style.border = "4px solid pink";
}


myForm.name.onblur = function(){ // stellt border style auf none, wenn focus weg ist
    myForm.name.style.border = "none";
}




var message = document.getElementById("message");

myForm.onsubmit = function(){

    if (myForm.name.value == "") {
        message.innerHTML = "please enter a name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
};
