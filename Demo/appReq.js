'use strict';

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
document.write(`<h1>Welcome to asac coffe house</h1><br><p>hello</p>`);
Drinks.prototype.printMenue = function() {
//console.log(`${this.name} : ${this.price} JD`);



document.write(`<p>${this.name} : ${this.price} JD</p>`)


}

let americano = new Drinks("americano", ["milk","coffie","sugar"], "./assets/Americano-ChristinaDibernardo-Unsplash.jpg",true, false, 2.50);
let espresso = new Drinks("espresso", ["coffie","sugar"], "./assets/Espresso.jpg",true, false, 3.50);

console.log(allDrinks);


americano.printMenue();
espresso.printMenue();


console.log(document)
console.dir(document)


//document.write

//document.write(`<h1>Welcome to asac coffe house</h1><br><p>hello</p>  `);
// i wrote on the document from the javascript


//document.write('')


//document.write(`<p>${this.name} : ${this.price} JD</p>`)


function render() {
    document.write(`<p>${espresso.name}</p>`);
}

render();