const pTag = document.querySelectorAll(".challange > p");

console.log(pTag);



pTag.forEach(p => {
    console.log(p.innerText);  //shows both the same (shows also what is in inner tags)
    console.log(p.textContent);//shows both the same (only visible text (would show what is inside other tags))
    if(p.textContent.includes("erros")){//proves if the word erros ist inside the Contetn
       p.style.color ="green";
    }
    if(p.textContent.includes("success")){
         p.classList.add("success");
    }

});




const title = document.querySelector("#mainheading");

// title.classList.toggle("test");

console.log(title.getAttribute("id"));

console.log(title.getAttribute("class"));
title.classList.toggle("test");//adding class Test because there wasn´t one yet

console.log(title.getAttribute("class"));

title.classList.toggle("test");// deleting class test, because thera already is class with that name

console.log(title.getAttribute("class"));


title.classList.toggle("test"); //adding class again

console.log(title.getAttribute("class"));


title.classList.toggle("test2"); //adiing another class with a new name

console.log(title.getAttribute("class"));