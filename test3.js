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