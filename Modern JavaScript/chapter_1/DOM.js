const para = document.querySelector("p"); //gets the first p 
const error = document.querySelector(".error"); //gets the first error class
const errorDiv = document.querySelector("div.error"); //gets the first div with a error class
const heading = document.querySelector("body > h1"); //gets first h1 in body
const heading2 = document.querySelectorAll("h2");//give out all h2 in Nodlist (kind of a array)

para.innerHTML = "hello";
error. innerHTML= "error";
errorDiv.innerHTML = "div Error";
heading.innerHTML= "heading 1 in body";

console.log(heading2); //give out all h2 in kind of a array

heading2[0].innerHTML = "erste h2 heading";

heading2.forEach(head => { // gets every h2 from the heading 2 
    head.innerHTML=" new heading 2 in for each";
});

const allError = document.querySelectorAll(".error");

allError.forEach(zaehler => { //gives out all error classes in the console
    console.log(zaehler); //zaehler is ever element in the Nodlist
});



// ------------ids ----------------

const mainheading = document.getElementById("mainheading"); //kann ids so auswählen
const mainheading2 = document.querySelector("#mainheading2"); //oder so

console.log(mainheading);
console.log(mainheading2);

mainheading.innerHTML = "new Überschrift mit ID";
mainheading2.innerHTML =" überschrift mit ID 2 ";


//--------------------class-----------------

const errosClass = document.getElementsByClassName("error"); //gives out a HTMLCollection of all erros
const errosClass2 = document.querySelectorAll(".error"); //gives out a NodeList



console.log(errosClass);
console.log(errosClass2);

console.log(errosClass[0]); //gives out the first error class
console.log(errosClass2[0]); //gives out the first error class

//cant use for each on HTML Collection
// errosClass.forEach(eins => {
// console.log(eins);
// });

errosClass2.forEach(eins => {
    console.log(eins);
});


//----------- Tags----------------------

const pa =  document.getElementsByTagName("p");
const pa2 = document.querySelectorAll("p");



//------- changing inner value of tags ------------
console.log(pa[0].innerHTML);
console.log(pa[0].innerText);

//change text
pa[0].innerText= "new p with inner Text";
pa[1].innerHTML= "new p with innerHTML";



//adding text
pa[2].innerText += "adding new test on  p with inner Text +=";
pa[3].innerHTML += "adding new text on  p with innerHTML +=";


//change all  p in ones

const allP = document.querySelectorAll("p");

allP.forEach(p => {
    p.innerText = "all new P";
});


//-------------change html tag ---------------

const content = document.querySelector(".content");

console.log(content.innerHTML); //shows the p  html tags too
console.log(content.innerText); //just shows what is in the p tags in the content class

content.innerHTML= "<h2> THIS IS A NEW H2 WAS P BEFORE </h2>"; //change p to h2
// content.innerText= "<h2> THIS IS A NEW H2 WAS P BEFORE </h2>"; // would write was is in the "" on the screen


content.innerHTML += "<h2> THIS IS A NEW H2 WAS P BEFORE </h2>"; //leaves the old p tag and adding an h2 tag at the end of it


//------------ new p list for array --------------
const people = ["mario" , "yoshi", "browser"];

people.forEach(person => {
    content.innerHTML +=   `<p>${person}</p>`;
});




//--------------getting a attribute -----------
//attribute = class href src,....

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

//changing attribute

link.setAttribute('href', "https://www.google.de/?hl=de");

link.innerText =" new link";


const mssg = document.querySelector("p");

console.log(mssg.getAttribute("class"));

mssg.setAttribute("class", "newClass"); //change the class to newClass

console.log(mssg.getAttribute("class"));

//adding new attribute

mssg.setAttribute("style", "color:green;"); //addes a new attribute to the p tag


//style attribute
const h1 =  document.querySelector("h1");

// h1.setAttribute("style", "font-size:70px;"); //overwrites the already existing style attribute on the h1


//add new style(NO overwriting)

console.log(h1.style.color); //gives out the color of the attrbute

h1.style.border = "solid black 2px"; // adding the styles

h1.style.padding = "20px";

//2 Letter words are written in CamaleCase font-size = fontSize

h1.style.fontSize ="10px";

h1.style.borderLeftColor= "green";

//deleting style attribute;
h1.style.padding= ""; //deleting the padding

h1.style = ""; //deleting all style attribute on h1


//------------adding and deleting attributes (classes) ----------

const content2 = document.querySelector("span");

console.log(content2.classList);//gives out all classes from that element

content2.classList.add("newClass"); //adding a new class

console.log(content2.classList);

content2.classList.remove("success");