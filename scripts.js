let firstfood = ''
let secondfood = ''
let thirdfood = ''

function chooseFood(elemento) {
    const food = document.querySelector(".middle-items-border-one");
    if(food !== null) {
        food.classList.remove("middle-items-border-one")
    }
    elemento.classList.toggle("middle-items-border-one")
    firstfood = elemento.querySelector(".middle-first-text").innerHTML
}

function chooseDrink(elemento) {
    drink = document.querySelector(".middle-items-border-two")
    if(drink !== null) {
        drink.classList.remove("middle-items-border-two")
    }
    elemento.classList.toggle("middle-items-border-two")
    secondfood = elemento.querySelector(".middle-first-text").innerHTML
}

function chooseDessert(elemento) {
    dessert = document.querySelector(".middle-items-border-three")
    if(dessert !== null) {
        dessert.classList.remove("middle-items-border-three")
    }
    elemento.classList.toggle("middle-items-border-three")
    thirdfood = elemento.querySelector(".middle-first-text").innerHTML
}