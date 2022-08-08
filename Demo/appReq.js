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


for (let i = 0; i < allDrinks.length; i++) {
      allDrinks[i].printMenue();
    }




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
}















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