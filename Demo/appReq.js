'use strict';

const bodyEl = document.getElementById('b');

//const body = document.getElementsByTagName('body');

const allDrinks = [];

function Drinks( name, ingredients, image, cold, hot, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.cold = cold;
    this.hot = hot;
    this.price = price;

    allDrinks.push(this);
};
// document.write(`<h1>Welcome to asac coffe house</h1>`);

const h1El = document.createElement('h1');

h1El.textContent = "Welcome to asac coffe house";

b.appendChild(h1El);



Drinks.prototype.printMenue = function() {
//console.log(`${this.name} : ${this.price} JD`);

const divEl = document.createElement('div');
b.appendChild(divEl);


const pEl = document.createElement('p');
pEl.textContent = `type name : ${this.name} : price : ${this.price}`;
divEl.appendChild(pEl);



const imgEl = document.createElement('img');
imgEl.src=`${this.image}`;
imgEl.alt=`${this.name}`;
divEl.appendChild(imgEl);


const ulEl = document.createElement('ul');
divEl.appendChild(ulEl);

for (let i = 0; i < this.ingredients.length; i++) {
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.ingredients[i];
    
}













// const pE1 = document.createElement('p');
// pE1.textContent = `Drink name : ${this.name} : ${this.price}`;

// body[0].appendChild(pE1);



// const imgE1 = document.createElement('img');
// imgE1.src = this.image;
// imgE1.alt = this.name;
// body[0].appendChild(imgE1);


// document.write(`<p>${this.name} : ${this.price} JD</p>`)


}

let americano = new Drinks("americano", ["milk","coffie","sugar"], "./assets/Americano-ChristinaDibernardo-Unsplash.jpg",true, false, 2.50);
let espresso = new Drinks("espresso", ["coffie","sugar"], "./assets/Espresso.jpg",true, false, 3.50);

console.log(allDrinks);







// americano.printMenue();
// espresso.printMenue();


// for (let i = 0; i < allDrinks.length; i++) {
//       allDrinks[i].printMenue();
//     }




//where
let formEl = document.getElementById('form');

//submit

//
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let name = event.target.drinkName.value;
    let ingredients = event.target.ingredients.value;
    let img = event.target.img.value;
    let price = event.target.price.value;

    let cold = event.target.cold.checked;  //if it is checked he will return for us true

    let hot = event.target.hot.checked;

    console.log(name, ingredients, img, price, cold, hot)

    let newDrink = new Drinks(name, ingredients, img, cold, hot, price);


    newDrink.printMenue();

    console.log(allDrinks);



    //i have to call it in the submit function(event handler)
    //i want to save the data in the databasde, when it handle submision
    // and i want to pass for it the data that i just submit it inside, which is the allDrinks

    // saveData(allDrinks);
    saveData(newDrink);  // you can send only the new drink only to your local storage
}

// it will gives me drinks which it will be array of objects inside my local storage.
// because it will be unreadable as object object object thats why i have to convert the things i want to save in the local storage as as a string


// thats why i want to convert the data to json data/format
//json: refers to js object notation  //it is a light weight format 
// i use it to save data  //and i use it to transfer data
// json format: it look like an object but all of it is string.

// {'name':'ahmad',
// 'age': '25',
// 'gender: 'male'}

//so i want to convert my obj to json format because the LS accept string to be able to save it in the local storage.

// we cant save img at the local storage we can only save the url for it


//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-------------------localStorage---------------------------




// first i want to save the item in the local storage

function saveData(data) {
    //i have to convert the data to json format then i can save it
    //stringify method it will convert the data from any type to string
    let stringObj = JSON.stringify(data);
    //then i have to set the string obj as the value, now it is string
    localStorage.setItem("drinks", stringObj);
}




// if i referesh the data i just submit it it will dissapear (i cant see it on the browser) but i saved it in the local storage

// second step i want to get the data from the local storage, because i want to render it again in the page

function getData() {
    let retreveData = localStorage.getItem('drinks');
    console.log(retreveData); //in here it will appear as a string  // // because we already did stringify


    console.log("------------------------------------")


    //now i want to convert it back to its original type so i can do the logic that i want on this previous array


    //third now i want to convert it back to its original type
    //parse: it mean i want to parse this string to its original type (the retreve data)
    let arrayData = JSON.parse(retreveData);
    console.log(arrayData);  // so in here it will appear as an array of objects // // because we already did parse







    //fourth step now i will start calling the method which it will print the menue for me (the print menu method)

    // X it will not work --------> for (let i = 0; i < arrayData.length; i++) {
    //     arrayData[i].printMenue();// so these object who came from the local storage is not related to the constructor, it is not generated from the constructor, it came from the local storage, so this arrayData it lost its access from the print menue method, and the print menue method is just related to the constructor because it is just a prototype method
        
    // }




    //thats why i have to send this new data to the constructor because i want to create new instances from the constructor so i can have an access to the print menue


    // so now i have to resantiate

    // create new instances from the constructor
    // // because i want to show the tea information in the page


    
    //it will work but it will repeat all of them again and again in the page
    
    // if(arrayData != null) {  //it mean im not goin to loop through it if it is empty
    //     for (let i = 0; i < arrayData.length; i++) {
    //         new Drinks(arrayData[i].name, 
    //             arrayData[i].ingredients, 
    //             arrayData[i].image, 
    //             arrayData[i].cold, 
    //             arrayData[i].hot, 
    //             arrayData[i].price);
            
    //     }

    // }
    
    
    


    //Cannot read properties of null so we gave to put if statment to fix this error
    //to fix the repeteation the dublicated   dont forget  //saveData(newDrink); to be add at submit
    if(arrayData != null) {
        let x = new Drinks(arrayData.name, arrayData.ingredients, arrayData.image, arrayData.cold, arrayData.hot, arrayData.price)
    }
        



    for (let i = 0; i < allDrinks.length; i++) {
        //print minue i will call it by all drinks array because i already pushed everything to it everytime i called the constructor
        allDrinks[i].printMenue();
        
    }


    console.log("--->",allDrinks);
    console.log("--->",arrayData);


}

// then i will call the function
getData();



























//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------

console.log(document)
console.dir(document)


//document.write

//document.write(`<h1>Welcome to asac coffe house</h1><br><p>hello</p>  `);
// i wrote on the document from the javascript


//document.write('')


//document.write(`<p>${this.name} : ${this.price} JD</p>`)


function render() {
    // document.write(`<p>${espresso.name}</p>`);
}

render();