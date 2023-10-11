// Strg K Strg C Comment
// Strg K Strg U uncomment


// Variables 

let age = 2000;
var name = "Name"; //var is an older keyword for variables
const birthdayYear = 2020; //value can't be changed(constant)
// birthdayYear = 20; gives a erros
console.log(age, birthdayYear);


//##################### String ##########################
let firstname = "Janine";
let lastname = "Liebscher";

let fullname = firstname+ " " + lastname;

console.log(fullname[0]);

console.log(fullname.length);

console.log(fullname.toUpperCase()); //change only the output here not the variable
console.log(fullname);

let result = fullname.toLowerCase();


let index =fullname.indexOf(" ");
console.log(index);


let laIndex = fullname.lastIndexOf("n"); //gives the index of the last n

console.log(laIndex);

let teilen = fullname.slice(0, fullname.indexOf(" "));//slice fullname from 0 index to index of " "
//slice = first and last index of new value
console.log(teilen);

let teilen2 = fullname.substring(2,10); //from index 0 10steps
// substr = first index and how many characters
console.log(teilen2);

let change = fullname.replace(" ", "+");
console.log(change);

let change2 = fullname.replace("n", "!"); //only replace the fiest n with a !
console.log(change2);

//############# numbers ############################

let radius = 10;
const pi = 3.14;

let  area = pi * radius**2; //**  = hochzahlen

console.log(area);



// ####### template Strings ##############

const title = "be reas of 2039";
const author = "MArio";
const like = 20;

//concatentation way

let add = "the blog calles " +  title + "Author: " +  author + " has " + like  + "Likes";
console.log(add);

//template String way (template literal)

let add2 = `the blog calles  ${title} title Author:   ${author}  has ${like}   Likes`;

console.log(add);
console.log(add2);  //same output


//creating html templates
let html = `<h2>The Title is ${title}</h2><p>${author}</p>`;

console.log(html); //shows the html string, can be later be outputted to the browers


//######################## arrays ########################

let fruit = ["apple", "banana", "cherry"];

console.log(fruit);
console.log(fruit[0]);

let zusammenfassen = fruit.join(","); //puts all array values in one string seperates with a , KOMMA
console.log(zusammenfassen);

let result2 = fruit.indexOf("cherry"); //give out 2 because it is the 3 value in in the array
console.log(result2);


let zweiArray = fruit.concat(["ken", "christal"]);//joing 2 array together

console.log(zweiArray);

let zweiArray2 = fruit.push("adam");//adds one new value to the array
//change the original arry(fruit) too

console.log(zweiArray2); //gives out 4 because now they are 4 values in the array
console.log(fruit);

let loeschen = fruit.pop();//delete last value of the array
//change the original array (fruit)
console.log(loeschen); //gives out what is deletes
console.log(fruit);


//############### NULL  & Undefiend #################

let age2;

console.log(age2); //undeifined

console.log(age2 + 3); //NaN (because it doesn´t have value)

age2= null;
console.log(age2); //null

console.log(age2 + 3); //3 



//######################## Boolean #########################

let email = "mario@pizza.net";
let names = ["toad", "joshi", "luigi"];

let ergebnis= email.includes("@"); //give back true
console.log(ergebnis);


let ergebnis2 = names.includes("luigi");
console.log(ergebnis2);


let age3 = 30;
console.log(age3 == 30);


//############## Type conversion
let score = "100";
console.log(typeof score);
console.log(score+1); // 1001 is aString and add 1 at the at of the String

score= Number(score); //makes a number typ out of the string
console.log(score+1); // calculates 100+1
console.log(typeof score);

let result3 = Number("hello"); //NaN can´t change hello to a number

let result4 = String(50);
console.log(typeof result4);

let result5 = Boolean(100); //is true everything over  & under 0 is true (0 is false)

let result6 = Boolean(-100);


let result7 = Boolean("fasd"); // true all String are true if there are not empty

let result8 = Boolean("");//false