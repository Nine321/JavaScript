function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true; //this refure to the Object z.b.userOne
    console.log(this.email, 'has logged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

function Admin(...args){ //...args makes a array out of the parameters
// console.log(args);

User.apply(this, args);
this.role ="superAdmin";
}


Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser =function(u){

    users =users.filter(user => {
        return user.email != u.email;
    });

}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

var adminOne = new Admin("janine@ee.de","adsf");


var users = [userOne,userTwo,adminOne];

console.log(userOne);
userTwo.login();

console.log(adminOne);

