
// Normal mode

// changing to the strict mode:

'use strict';


// // var userName = "Ahmad";
// // console.log(userName);

// // var userNam = "bay";
// // console.log(userNam);





// // hoisting:

// // myFunction();

// // function myFunction() {
// //     console.log("inside function");
// // }


// // x=10;
// // const x = 0;
// // console.log(x);



// // block scope:

// // if(true) {
// //     const x = "block scope"; //with let i can access it inside the block
// //     console.log(x);
// // }

// // console.log(x); //with let i cannot access it from outside the block




// // function scope:

// //global variable cant reach from inside the function scope

// //const x = 10;


// // function myFunction() {

// //     const x = "inside function scope";
// //     console.log(x)
// // }

// // myFunction();
// // console.log(x);





// // global scope:   not inside function, not inside scope we consider it as global scope


// // const first = 1;
// // let second = 2;
// // var third = 3;

// // console.log(first,second,third);




// objects:

// const user = {
//     firstName: "yazan",
//     course: "py",
//     age: 24,
//     loveCoffe: true,
//     favFood: ["mansaf", "pizza","stake"],
//     greeting: function() {
//         console.log("welcome yazan" + this.firstName);
//         //console.log(this);

//     }
// }

// console.log(user);


// //dot notation

// console.log(user.firstName);
// console.log(user.age);
// console.log(user.loveCoffe);
// console.log(user.favFood);
// console.log(user.greeting);




// //bracket notation

// console.log(user["age"]);

// //invok function inside the method
// user.greeting();


// user["greeting"]();


// // adding new property
// user.lastName= "alfarra";
// user["nationality"] = "jordanian";




// // adding method

// user.weloming = function(){
//     console.log("we ah");
// }

// user.weloming();




//looping:

// for(const key in user) {
//     console.log(key);
// }



//  for(const key in user) {
//     console.log(key, user[key]);
//  }


// delete user.age;
// delete user["age"];


//This:  refer to the place which inside of it
// console.log(this);
// user.greeting();


// console.log(`this is ${user.firstName} from ${user.course} course . `)

