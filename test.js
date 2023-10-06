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