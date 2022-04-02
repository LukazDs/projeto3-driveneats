let firstfood = ''
let secondfood = ''
let thirdfood = ''

function chooseFood(elemento) {
    const food = document.querySelector(".middle-items-border-one");
    const value = document.querySelector(".ball-green-one");
    if(food !== null) {
        food.classList.remove("middle-items-border-one");
        value.classList.remove("ball-green-one");
    }
    elemento.classList.toggle("middle-items-border-one");
    elemento.querySelector(".ball").classList.toggle("ball-green-one");
    firstfood = elemento.querySelector(".middle-first-text").innerHTML;
    if (firstfood !== '' && secondfood !== '' && thirdfood !== '') {
        button = document.querySelector(".bottom-content");
        button.classList.add("bottom-content-triggered");
        document.querySelector(".bottom-text").innerHTML = "Fechar pedido";
    }
}

function chooseDrink(elemento) {
    const drink = document.querySelector(".middle-items-border-two");
    const value = document.querySelector(".ball-green-two");
    if(drink !== null) {
        drink.classList.remove("middle-items-border-two");
        value.classList.remove("ball-green-two");
    }
    elemento.classList.toggle("middle-items-border-two");
    elemento.querySelector(".ball").classList.toggle("ball-green-two");
    secondfood = elemento.querySelector(".middle-first-text").innerHTML;
    if (firstfood !== '' && secondfood !== '' && thirdfood !== '') {
        button = document.querySelector(".bottom-content");
        button.classList.add("bottom-content-triggered");
        document.querySelector(".bottom-text").innerHTML = "Fechar pedido";
    }
}

function chooseDessert(elemento) {
    //seletor
    const dessert = document.querySelector(".middle-items-border-three");
    const value = document.querySelector(".ball-green-three");
    if(dessert !== null) {
        dessert.classList.remove("middle-items-border-three");
        value.classList.remove("ball-green-three");
    }
    elemento.classList.toggle("middle-items-border-three");
    elemento.querySelector(".ball").classList.toggle("ball-green-three");

    //nome da comida
    thirdfood = elemento.querySelector(".middle-first-text").innerHTML;

    //ativa botão
    if (firstfood !== '' && secondfood !== '' && thirdfood !== '') {
        button = document.querySelector(".bottom-content");
        button.classList.add("bottom-content-triggered");
        document.querySelector(".bottom-text").innerHTML = "Fechar pedido";
    }
}
