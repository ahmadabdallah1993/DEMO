'use strict';



const yazan = {
    firstName: "yazan",
    course: "py",
    age: 24,
    loveCoffe: true,
    favFood: ["mansaf", "pizza","stake"],
    greeting: function() {
        console.log("welcome " + this.firstName);
        //console.log(this);

    }
};



const shaden = {
    firstName: "shaden",
    course: "js",
    age: 22,
    loveCoffe: false,
    favFood: ["fastFood", "pizza","stake"],
    greeting: function() {
        console.log("welcome " + this.firstName);
        //console.log(this);

    }
};

shaden["major"] = "AI";


const bashar = {
    firstName: "bashar",
    course: "py",
    age: 21,
    loveCoffe: true,
    favFood: ["fastFood", "pizza","stake"],
    greeting: function() {
        console.log("welcome " + this.firstName);
        //console.log(this);

    }
};

