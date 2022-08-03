'use strict';

//constructor:

// // i can call it a templete, or blueprint, or function


//function name(p1,p2){

//}





// creating a constroctor:


const allUsers = [];


function User(nameValue, courseValue, ageValue, lovingCoffeeValue, favFoodValue) {
    this.firstName = nameValue;
    this.course = courseValue;
    this.age = ageValue;
    this.loveCoffe = lovingCoffeeValue;
    this.favFood = favFoodValue;
    this.greeting = function() {
        console.log("welcome " + this.firstName);
    };
    // console.log("this keyword -->" , this);

    allUsers.push(this);
}


// create objects:

// new User("yazan","py",24,false,["mansaf", "pizza"]);
// new User("sh", "js", 22, true, ["maftool", "burger"]);
// new User("ba", "java", 20, false);




// i can save them inside a variable if i want:

const yazan = new User("yazan","py",24,false,["mansaf", "pizza"]);
const sh = new User("sh", "js", 22, true, ["maftool", "burger"]);
const ba = new User("ba", "java", 20, false);


sh["major"] = "Ai";

console.log(yazan);
console.log(sh);
console.log(ba);





// calling a method for object:

yazan.greeting();
sh.greeting();
ba.greeting();




// allUsers.push(yazan);
// allUsers.push(sh);
// allUsers.push(ba);


console.log(allUsers);


for(let i = 0; i < allUsers.length; i ++) {
    console.log(allUsers[i]);
}


console.log("-------------------");



console.log("---------ages----------");

for(let i = 0; i < allUsers.length; i ++) {
    console.log(allUsers[i].age);
}


