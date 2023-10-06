alert ("Hallo in extra Datei");
var myVariable ="can not start with a number";
var anotherVariable; // is not defined yet 
var myVar = "hello";
myVar = "neues Hallo"; //changes value of variable
myVar= 9; //changes the type of a Variable
myVar = 'a';  

var zahl = 5;
var zahl2 = 10;

var newzahl =  zahl + zahl2;

var newText =  newzahl + " Text"; //combiens number + string and makes a String out of it

var text = newText + " Text";
var text = 5 * "hello"; // gives out NaN ( not a number, kind of error notification)


var zahl5 = 5;
zahl5 += 6; //addes 6 to the variable zahl5 (same with * / - ) 

zahl5 ++; // addes 1 to zahl5 (in an output it would first give the zahl5 out and thans adds 1)

++zahl5 ; // (in an output it would first add 1 and than give the zahl5 out)


document.write(text); //output 
document.write(newText)


var iLikeCheese = true;
var wrongBoolean = "true"; // is not a boolean, it is a String

var vergleich = 7 < 5;
document.write (vergleich); // gives out false#

document.write(Boolean(5)); //gives out true
document.write(Boolean(-10)); //gives out true
document.write(Boolean(0)); //gives out false only 0  and -0 from the numbers gives out false

document.write(Boolean("hello")); // its true because something is inside
document.write(Boolean(""));  //is false because it is empty


//################ Statement ################

 
var LikeMeat = false;

if (LikeMeat){
    document.write("you are not a vegetarien")
} else {
    document.write("you are a vegeatrian")
}


var age = 29;

if (age > 30){
    document.write("you are over 30");

}else if (age >20){
    document.write("you are over 20");
}
else if (age >10){
    document.write("you are over 10");
} else {
    document.write("you are 10 or under 10")
}


//############# Comparison Operators #############
var x = 5;

if ( x < 6 ) document.write("not it is wrong"); 

if ( x > 6 ) document.write("yes it is true"); 

if ( x <= 5 ) document.write("yes it is true"); 

if ( x >= 6 ) document.write("yes it is true"); 

if ( x == 5 ) document.write("yes it is true");

if ( x == "5" ) document.write("yes it is true, compares only the value not the datatype");

if ( x === "5" ) document.write("no its wrong, because it it a different Datatype");

if ( !(x === "5") ) document.write("it is true ,because it looks if its NOT! the same");
 
if (x != "5") document.write("its not true because it checks only the value and there are both 5 ");

if (x !== "5") document.write("its true because \"5\" and 5 are not the same datatype");  //  \"  to write " in the output



// ###### logical Operators #################

var age2  = 25 ;

if (age2 >= 18 && age < 30){
    document.write("you are under 30 and over 18 or 18");
} else {
    document.write("you are not in the right age range");
}


if (age2 < 18  || age2 > 30 || age2 === 25){ // Or  it is enough if only one is true
    //if age is over 30 or under 18  or age is 25 it is true
    document.write("you are not in the right age range");


} else {
    document.write("you are under 30 and over 18 or 18");
}
    

//################ Loop ########################################
// --------------While ----------------
var age3 = 5 ;
while (age3 < 10) {
    age3++;
    console.log(age3); // outputs only in the console
}
document.write(age3 + " is youre new age");




//--------------For------------------
for (age5 =5; age5 <10; age5++){ //dont need var for age5 because it is only used in the for loop
    console.log("you are to young");
}
document.write("you are now old enought")



var links = document.getElementsByTagName("a");
var numbers = 0;

for(i=1 ;i <= links.length; i++){
    console.log( i + " a tags are counted")    
    numbers++;
}

document.write("Thera are" +  numbers + " on the index page");

//----------------Break & Continue -----------------------

for(i = 0; i < 10 ; i++){

    if(i ===7 ){
        continue; // skips the 7 and goes back to the bedinging to the loop
    }
    console.log(i +  " continue"); 
}


for(i = 0; i < 10 ; i++){

    if(i ===7 ){
        break; // ends the loop with with 6 shown in the console
    }
    console.log(i + " break"); 
}


//---------------practical examples for loops


var links2 = document.getElementsByTagName("a");
for (i = 0 ; i < links2.length; i++){
    links[i].className= "link-"+ i;
}