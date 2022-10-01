const buyBtns = [...document.querySelectorAll('[data-name]')];
const buyAllBtn = document.querySelector(".btn-buy-all")
const basketList = document.querySelector( ".basket-list");
const totalPrice = document.querySelector("#total-price");



const basket = new Basket();

const removeItem = event =>{
    const id = Number(event.target.dataset.id);
    basket.remove(id);
    createBasketUi();
}

const createBasketUi = () => {
    const basketTotalValue = basket.getTotalValue().toFixed(2);
    basketList.innerText = "";
    totalPrice.innerText = "0";


    basket.showBasket().forEach(({name, id, price})=>{
        const newLi = document.createElement('li');
        newLi.innerText =`${name} - ${price.toFixed(2)}zł.`;
        newLi.addEventListener('click', removeItem)
        basketList.appendChild(newLi);
        newLi.dataset.id = id;
        totalPrice.innerText = basketTotalValue
        basketTotalValue ? buyAllBtn.removeAttribute("disabled"):buyAllBtn.setAttribute("disabled")
    })
};

const AddProductToBasket = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);
    const newProduct = new Product(name,price);
    basket.add(newProduct)
    createBasketUi()
};
const buyAllProducts = () => {
    basket.clearBasket();
    createBasketUi()
    alert('Zamówienie zostało przyjęte')
};

buyBtns.forEach( buyBtn => buyBtn.addEventListener('click',AddProductToBasket));
buyAllBtn.addEventListener('click',buyAllProducts)