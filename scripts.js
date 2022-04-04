let firstfood = '';
let secondfood = '';
let thirdfood = '';
let firstprice = '';
let secondprice = '';
let thirdprice = '';

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
    firstprice = elemento.querySelector(".product-money").innerHTML
    firstprice.replace('R$', '')
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
    secondprice = elemento.querySelector(".product-money").innerHTML
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
    //nome da comida e preço
    thirdfood = elemento.querySelector(".middle-first-text").innerHTML;
    thirdprice = elemento.querySelector(".product-money").innerHTML
    //ativa botão
    if (firstfood !== '' && secondfood !== '' && thirdfood !== '') {
        button = document.querySelector(".bottom-content");
        button.classList.add("bottom-content-triggered");
        document.querySelector(".bottom-text").innerHTML = "Fechar pedido";
    }
}

function orderRequest() {
    if (firstfood !== '' && secondfood !== '' && thirdfood !== '') {
        const bonus = document.querySelector(".review-region");
        bonus.classList.remove("request");
        textPlates();
    }
}

function toBack () {
    document.querySelector(".review-region").classList.add("request")
}

function toFinally() {
    let name = prompt("Qual é o seu nome?") 
    let address = prompt("Qual é o seu endereço?") 
    window.open("https://wa.me/+554396630268?text=" + encodeURIComponent(finalMessage(name, address)))
}

function textPlates() {
    //plates
    document.querySelector(".food").innerHTML = firstfood;
    document.querySelector(".price-food").innerHTML = firstprice;
    document.querySelector(".drink").innerHTML = secondfood;
    document.querySelector(".price-drink").innerHTML = secondprice;
    document.querySelector(".dessert").innerHTML = thirdfood;
    document.querySelector(".price-dessert").innerHTML = thirdprice;
    document.querySelector(".price-total").innerHTML = "R$ " + totalValue().toFixed(2);
}

function totalValue() {
    //conversão
    firstprice = firstprice.replace('R$ ', '')
    secondprice = secondprice.replace('R$ ', '')
    thirdprice = thirdprice.replace('R$ ', '')
    //valor a ser pago
    let total = parseFloat(firstprice.replace(',', '.')) + parseFloat(secondprice.replace(',', '.')) + parseFloat(thirdprice.replace(',', '.'));
    return total;
}
function finalMessage(name, address) {
     //msg final
     let msg; 
     msg = "Olá, gostaria de fazer o pedido:"+ "\n- Prato: " + firstfood + "\n- Bebida: " + secondfood + "\n- Sobremesa: " + thirdfood + "\nTotal: R$ " + String( totalValue().toFixed(2)) + "\n" + "\nNome: " + name + "\nEndereço: " + address;
     return msg;
}
