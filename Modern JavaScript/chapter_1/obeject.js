// object literals
//curly bracktes to make an object literal

let user = { //user Object
    name: "crystal", //key: value (key value pair),
    age: 30,
    email: "test@email.de",
    location: "berlin",
    blog: ["haus","wand", "dach"]
};


console.log(user);

console.log(user.name);

user.age = 35; //overwrite the  age of user


//can use . Notification or [] Notification

console.log(user.age);
console.log(user['age']); //does the same

user['name']= "ben";

console.log(user.name);

//-----
const key = "location";
console.log(user[key]);
console.log(user.key); // is not working as a . Notifcation with a variable

//--- 

console.log(typeof user); //give out object
console.log(typeof user.age); // gives out number


//-------------- adding methos to object --------------

let user2 = { //user Object
    name: "geoge", //key: value (key value pair),
    age: 37,
    email: "lalal@email.de",
    location: "köln",
    blogs: ["haus","tee", "teich"],
    login: function(){ //method of the object
        console.log("function to login");
    },

    //can write it without the : function

    logout(){ //method of the object
        console.log("logout function");
    },

    logBlogs: function(){
        
    // console.log(this); //means the object (in a arrow function it would be the window)
        this.blogs.forEach(blog=> { //this would work different in a arrow function
            console.log(blog);
        });              //to get the blogs out of the object
    }
};

// console.log(this); //means the whole window

user2.login();//with the consolelog out of the function
user2.logBlogs();



//---------------object in an array ------------------

const blogs1 = [//array mit objecten
    {title: "blogtitle Nr 1", author: "mee"},
    {title: "blogtitle Nr 2", author: "youu"}
];

console.log(blogs1);

let user3 = { //user Object
    name: "otoo", //key: value (key value pair),
    age: 10,
    email: "test33@email.de",
    location: "portugal",
    blog: [{title: "blogtitle Nr 1", author: "mee"},
    {title: "blogtitle Nr 2", author: "youu"}],

    logBlogs(){
        this.blog.forEach(blog => {
            console.log(blog.title, blog.author);
        });
    }
};

user3.logBlogs();// gives out every object from the blog in the object user3


//------------------------Math Objects--------------------------------


console.log(Math); //shows all methods and objects attached to the Math object(is a build in Object)

console.log(Math.PI); //gives out the number of PI

const area = 7.7;

console.log(Math.round(area)); //gives 8

console.log(Math.floor(area)); //gives out 7 (rundet ab)

console.log(Math.ceil(area)); //gives out 8 (rundet auf)

console.log(Math.trunc(area)); //gives out 7  (cuts everything behind the comma)

const random= Math.random(); //gives a random number betweenn 0 and 1 

console.log(random);

const random1= Math.round(random); //gives out 0 or 1 roundet the random number
console.log(random1);

const random100= Math.round(random * 100); //give out a random number betwenn 1 and 100
console.log(random100);



