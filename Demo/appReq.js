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

Drinks.prototype.printMenue = function() {
    
console.log(`${this.name} : ${this.price} JD`);
}

let americano = new Drinks("americano", ["milk","coffie","sugar"], "./assets/Americano-ChristinaDibernardo-Unsplash.jpg",true, false, 2.50);
let espresso = new Drinks("espresso", ["coffie","sugar"], "./assets/Espresso.jpg",true, false, 3.50);

console.log(allDrinks);


americano.printMenue();
espresso.printMenue();