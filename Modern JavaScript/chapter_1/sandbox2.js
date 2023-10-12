//#################### Function ##################

greet();
//function declaration (can call function before it is declarared)
function greet(){
    console.log("hello");
}

// speak(); is not working (not defindes yet)
//function expression (can only be called after the function is declared)

const speak = function(){ //the variable is now the function name.
console.log("hello two")
}; //has smilikon at the end of the code clode, because it is a expression (probelbly only time with semilkon end of code block)




greet(); //calling function /invoking function

speak();


//----------------- default value ---------------------
function greet2(name = "luigi", time= "night" ){ //name = function parameter
    // luigi & night are default values, will fired if the function calling does´nt have parameters
    console.log(`good ${time} ${name}`);
}

greet2("hildi", "morning");

greet2(); //used defail value
greet2("joshi");//uses only the second default value




//---------------------------return values--------------------

const calcArea = function(radius){
    let area = 3.14 * radius ** 2;
    return area;

    // return 3.14 *radius **2; kanns auch direkt in return schreiben
};


console.log(calcArea(5));

const area = calcArea(8);
console.log(area);

// ---------------arrow function--------------------


//shorter way of a function (with only one paramter the () are not need for the parameter, but with zero parameter there are needed)
const calArea2 = (radius) => {  
    return 3.14 *radius **2;
};

//shoter way (only one return) then a return and {} is not needed
const calArea3 = radius => 3.14 *radius **2;



//-----------function-------------------

const greet3 = () => "hello";

let resultOne = greet3();


//----------------methods--------------

const name = "shaun";

let newName = name.toUpperCase();

console.log(newName);


//---------------callback & foreach -----------------

//a function as parameter is called a a callbackfunktion
const myFunc= (callbackFunc) => {
    let value = 50;

    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});



let people = ["hans", "Dieter","Willfred"];

people.forEach(function(person, index){//person gives out very person of the array
                    //erst argument is the value of the array, second the index
    console.log('something '+  person + index);
});

//as a arrow function

people.forEach(person =>{
    console.log('something '+  person);
});

//-----


let people2 = ["hanso", "Dietero","Willfredo"];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);


//-------------- get a reference to the "ul" ------------------

const ul= document.querySelector(".people");


let people3 = ["hans", "Dieter","Willfred", "Hildie" , "Gertrud"];


let html =``;
people3.forEach(function(person3){
    //create html template for each person

    html += `<li>${person3}</li>`;
});

console.log(html);

ul.innerHTML= html;
