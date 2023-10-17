function User(email, name){ //constructor function (respresent User class)
    this.email = email;
    this.name  = name;

    this.online = false;

    this.login = function(){
        console.log(this.email, "has logged in");

    }
}

var userOne = new User("email@fads.de", "name11");

var userTwo = new User("email22@fads.de", "name2");


console.log(userOne);