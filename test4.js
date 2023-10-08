//################# Document Object Model (DOM) ############################

//--------------- change content -----------------
var myContent = document.getElementsByClassName("content"); 
console.log(myContent);

var myh2InContent = myContent[0].getElementsByTagName("h2");
console.log(myh2InContent);

myh2InContent[0].innerHTML= "Yo Ninjas";

var myh2ID = document.getElementById("links");
console.log(myh2ID);



//var myBody = document.getElementsByTagName("body");
//myBody[0].innerHTML; //would just give back all of the body tag

//console.log(myBody[0].innerHTML);

//var newP = myBody[0].innerHTML = "<p>I am a paragraph tag</p>"; //changes the whole webside, so only this tag is showen
//console.log(newP);


var myPageTitle = document.getElementById("page-title");
console.log(myPageTitle.textContent); // shows the inside of the tag with that id

myPageTitle.textContent = "New Überschrift"; //change the h1 to a new heading


// ----------------- change attributes ----------------

var link = document.getElementById("linkOne");

//................Get.................
var linkAtrribute = link.getAttribute("href"); //gives out what the href from the link with id linkOne says
console.log(linkAtrribute);

var linkAtrributeClass = link.getAttribute("class"); 
console.log(linkAtrributeClass);

//..............Set.................
link.setAttribute("class", "pie"); //change the attribute class to pie


//...........add a new attribute ........

link.setAttribute("alt", "hello ");

//.....properites to change value ..............

link.className; //show the current class name

link.className= "ninja"; //change the classname

console.log(link.href); // give the entire link back not only the insite the ahref
var linkAtrribute = link.getAttribute("href"); 
console.log(linkAtrribute);

console.log(link.style);



//-------------- change styles ---------------------
var title = document.getElementById("page-title");
title.setAttribute("style", "background: green;");

title.setAttribute("style", "font-size: 100px;"); //overwrites the first style attrbute




title.setAttribute("style", "font-size: 100px; background: green;"); //both in one than it works


title.style.color = "red";

title.style.fontFamily = "fantasy";

//------------Adding Elements to the DOM -------------------


var newList = document.createElement("li"); //creates new <li></li> but put is nowhere now

var newA = document.createElement("a"); //creates new <a></a> but put is nowhere now

var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0]; //get where the new element should go

menu.appendChild(newList); //adds the new <li></li> element at the end of the ul in ne main-nav

newList.appendChild(newA); // add the a tag in the new list tag

newA.innerHTML = "new List tag"; // creates new content in the a tag



menu.insertBefore(newList, menu.getElementsByTagName("li")[0]); //creates a new Element, before the first li tag
newList.innerHTML= "new List tag before the first Li tag";


//---------------- Remove Elements from the DOM ------------------

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0]; // specifies where to remove

var child = parent.getElementsByTagName("li")[0]; //specifies what to remove

var remove = parent.removeChild(child); //stores the removed variable in the variable to it can be later be back insert if needed

console.log(remove);

menu.appendChild(remove); //put the removed Element back to the end of the list