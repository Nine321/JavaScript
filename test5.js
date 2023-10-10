//############## Events ####################
var title = document.getElementById("links");
title.onclick = function(){   //anonymus function 
    alert("you klick link");
}; 

var link = document.getElementById("linkOne");
link.onmouseover = function(){
    link.innerHTML= "Hovver Link";
}

