//################ Variable Scope ########################





function getPrice (priceOne, amount){
    var price = priceOne * amount;  //local Variable
    return price;
}

//document.write(price); //gives out an error because price is not avaiable here


var applePrice = 2;     //global varriable
var amountBought = 10;

var myResult = getPrice(applePrice, amountBought);

console.log(myResult +  "is the price");



//################# Numbers #####################

document.write(typeof applePrice); // give the datatyp out




Math.round(7.5); //rounded
Math.round(7.8);
Math.floor(7,8); // rounded down 7
Math.ceil(7,3); //rounded up 8

Math.max(7,3,8,4); //hightes number 8
Math.min(7,4,2,5); //lowest number 2

Math.PI; //give out Pi


//################# NaN (Not a Number) #####################

var a = 7;
var b = "5";
var c = 5;
var d = "five";

console.log(a + b); // 75
console.log(a + c); //12
console.log(a + d); //7five

console.log(a * b); //35 (because JS knows it cant mulitplizier with a string so it checks if it is a number in the string an makes the string to a number)
console.log(a * d); //NaN


if(isNaN(d)) {   //checkes if d is Not a Number (yes it is not a number so true)
    console.log (d + " is not a datatyp number");
}


if(!isNaN(d)) {   //checkes if d is Not NOT a Number (double negativ)
    console.log(d + " is a number")
}else {
    console.log (d + " is not a datatyp number");
}

//################# String #####################################


var myString = "I am an String";
var myString2 = 'I am although a String';
var stringTest = 'String "test" with qoutes in String';
var StringTest2 = "String \" quotes\" test \' two ";

console.log(stringTest);
console.log(StringTest2);

console.log(myString.length); //property of a String
console.log(myString.toUpperCase()); //method of a String
console.log(myString.toLowerCase());

console.log(myString.indexOf("an")); //shows where the index starts
console.log(myString.indexOf("ninja")); //shows -1 because ninja is not in the string

if (myString.indexOf("ninja") === -1) {
    console.log("the word ninja is not in that string");
}


var String1 = "abc";
var String2 = "cba";
var String3 = "ABC";

if (String1 === String2){ //false
    console.log("it is true");
}else {
    console.log("it is false");
}

if (String1 === String3){ // false because it is case senstiv
    console.log("it is true");
}else {
    console.log("it is false");
}

if (String1 < String2){  //a is smaller than c
    console.log("true because a is befor c");
}else {
    console.log("false because a is befor c");
}


//lower case letter is always greater than a uppercase Letter

console.log("a" < "b"); //true
console.log("a" < "B"); //false
console.log("A" < "b"); //true
console.log("A" < "B"); //true


//############ Splitting & Slicing String ################

var Strg = "hello world";

var Strg2 = Strg.slice(2, 9); //llo wor  starts with 2 and end befor 9

document.write(Strg2);

var test3 = "0123456789";

var Strg3 = test3.slice(2, 9);
document.write(Strg3); //2345678

var test4 = test3.slice(4); // von 4 till the end
console.log(test4);




var tags = "kiwi, apple, cherry, orange"; 
var tagsArray = tags.split(","); //splits the tags at every  comma and puts it into an array
console.log(tagsArray);

