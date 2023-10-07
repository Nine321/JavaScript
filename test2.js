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

