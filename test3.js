//######################## Array ####################

var obstSalat = []; // empty array

obstSalat[0] = "apple";
obstSalat[1] = "cherry";
obstSalat[2] = "strawberries"




var myArray = [];

myArray[0] = 5;
myArray[1] = "house";
myArray[2] = true;  //can store different values in a array

console.log(myArray[0]);
console.log(myArray);

myArray[2]= false; //change the value von array 2 to false


var newArray = [23, 20, "mouse" , true, false]; // declaire and initlaize a array


var myArray3 = new Array(); //another way to make a array

var myArray3 = new Array(5); //defines how many slots the array hat

console.log(newArray.length); //give out how many inputs are in the array

console.log(newArray);
console.log(newArray.sort()); //sorts the array and kepts it sortet in the array
console.log(newArray); //still sorted


console.log(newArray.reverse()); //reverse from what it was before
console.log(newArray); //and kept it reversed



//################## Objects ###########################

var myString = new String();
myString = "Hello";

myString.length; //calles a parameter

myString.toLowerCase(); //calles a method


var myString2 = "Welcome!"; // the same than line 45 & 46


//--------------------create new Object -------------------------
var myCar = new Object();
myCar.maxSpeed = 50; //give the object car a new variable named maxSpeed
myCar.driver = "janine";

console.log(myCar.driver);

myCar.drive = function(){console.log("now Driving");}; //give the Object car an method

myCar.drive(); // is calling the method


var myCar2 ={
    maxSpeed: 100, 
    driver: "shaun", 
    drive: function(){console.log("now Driving again");},
    kmH: function(speed, time){console.log(speed*time);}
    };
 //shorthand for creating a object

console.log(myCar2.maxSpeed);
myCar2.drive();
myCar2.kmH(100, 23);




//-------------------- this -------------------------------

var myCar3 ={
    maxSpeed: 100, 
    driver: "shaun", 
    logDriver: function(){console.log("now Driving is"+ this.driver);},
    test: function(){console.log(this);}
    };
 //shorthand for creating a object


myCar3.logDriver();


//--------------------------Constructor Function -------------------

var Car = function(maxSpeed, driver){ //creates a Constructor
    this.maxSpeed = maxSpeed;
    //myCar2.maxSpeed = maxSpeed; is the same
    this.driver = driver;
    this.drive = function(speed,time){
        console.log(speed*time); };

    this.logDriver = function(){
        console.log("Driver name " + this.driver);
    };

}

var myCar5 = new Car(10, "janine"); //creates new Car object from Constructor

var myCar6 = new Car(20, "Herbert");

myCar5.driver;

console.log(myCar6.maxSpeed);



//----------------- Date Object ----------------

var myDate = new Date(); // gives out the current time (change everytime when it is freshed)

console.log(myDate);

var myBirthday = new Date(1993,7,13); // month is a number from 0 - 11 (11 = december)  day is from 1 - 31

console.log(myBirthday);

var myDateTime = new Date(1231, 8, 21, 10, 12,50); //year Month, day, hour, minutes, seconds
var myDateTime2 = new Date(1231, 8, 21, 10, 12,50);

console.log(myDateTime);

console.log(myDateTime.getMonth()); // M
console.log(myDateTime.getFullYear()); //YYYY
console.log(myDateTime.getDate()); //D
console.log(myDateTime.getDay()); //gets the day of the week 0 -6 0= Sunday 6 = Saturday
console.log(myDateTime.getHours()); // get the hour
console.log(myDateTime.getTime()); // get the number ob milliseconds since 1st Jan 1970


if (myDateTime == myDateTime2){  // says it not equal even if it is, because JS is looking at the object and there are two diffent objects
    console.log("yes");
}else {
    console.log("no");
}

if (myDateTime.getTime == myDateTime2.getTime){  //now it says yes beause the same amount of miliseconds have pasted at the both objects
    console.log("yes");
}else {
    console.log("no");
}