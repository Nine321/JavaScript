
// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userOne.login();
// userOne.logout();

//-----------------classes --------------

class User {  //classes should start with UpperCase Letter

    constructor(emaileingabe, nameeingabe){ //will fire when ever a new User object will be made
        this.email = emaileingabe;
        this.name = nameeingabe;
        this.score = 0;
    }

  login(){
    console.log(this.email, "just logged in");
    return this;
  }
  logout(){
    console.log(this.email, "just logged out, Bye");
    return this;
  }

  updateScore(){    
    this.score ++;
    console.log(this.email, " score is now ", this.score);
    return this; //this = instanz of peticular user
  }
}


var userOne = new User("email@gmx.de", "Janine");
var userTwo = new User("neueEmal@gmx.de", "neuerNutzername");

userOne.login();
console.log(userOne);

// the "new" Keyword
//  - creates a new empty Object  {}
//  - sets the Values of "this" to be the new empty Object
//  - calls the constructor method



//changing method
//is only working, because of tje "return this" gives every time the user back, without this it could find
//the User in the method
userOne.login().updateScore().updateScore().logout();



// ----------class Inheritance------------

class Admin extends User { //extends everything from 
    deleteUser(user){  //delete one user out of the array
        users = users.filter(u => {//filter cylte to the array and filter one or more out
            return u.email != user.email
        });
        
    }
}

console.log(userOne);
console.log(userTwo);

var users = [userOne, userTwo];

var admin = new Admin("admin@email.de", "Admin");

console.log(users);

admin.deleteUser(userTwo);
  /// irgendwas ist noch nicht richtig funktioniert noch nicht