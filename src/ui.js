const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketList = document.querySelector( ".basket-list");
const totalPrice = document.querySelector("#total-price");
const basket = new Basket();

const createBasketUi = () => {
    basketList.innerText = ""
    basket.showBasket().forEach((product)=>{
        const newLi = document.createElement('li');
        newLi.innerText =product
        basketList.appendChild(newLi);
        totalPrice.innerText = basket.getTotalValue().toFixed(2);
    })


};

const AddProductToBasket = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);
    const newProduct = new Product(name,price);
    basket.add(newProduct)
    createBasketUi()
};
buyBtns.forEach((buyBtn)=>{


    buyBtn.addEventListener('click',AddProductToBasket)
})