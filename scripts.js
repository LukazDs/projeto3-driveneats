let firstfood = ''
let secondfood = ''
let thirdfood = ''

function chooseFood(elemento) {
    const food = document.querySelector(".middle-items-border-one");
    const value = document.querySelector(".ball-green");
    if(food !== null) {
        food.classList.remove("middle-items-border-one");
        value.classList.remove("ball-green");
    }
    elemento.classList.toggle("middle-items-border-one");
    elemento.querySelector(".ball").classList.toggle("ball-green")
    firstfood = elemento.querySelector(".middle-first-text").innerHTML;
}

function chooseDrink(elemento) {
    const drink = document.querySelector(".middle-items-border-two");
    if(drink !== null) {
        drink.classList.remove("middle-items-border-two");
    }
    elemento.classList.toggle("middle-items-border-two");
    secondfood = elemento.querySelector(".middle-first-text").innerHTML;
}

function chooseDessert(elemento) {
    //seletor
    const dessert = document.querySelector(".middle-items-border-three");
    if(dessert !== null) {
        dessert.classList.remove("middle-items-border-three");
    }
    elemento.classList.toggle("middle-items-border-three");

    //nome da comida
    thirdfood = elemento.querySelector(".middle-first-text").innerHTML;

    //ativa botão
    if (firstfood !== '' && secondfood !== '' && thirdfood !== '') {
        button = document.querySelector(".bottom-content");
        button.classList.add("bottom-content-triggered");
        document.querySelector(".bottom-text").innerHTML = "Fechar pedido";
    }
}
