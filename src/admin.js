const addProdactForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]')
const praceInput = document.querySelector('[name="product-price"]')
const prodactUl = document.querySelector('.prodact-list');

const addProdactsToShop = event => {
    event.preventDefault();

    const name = nameInput.value;
    const price = Number(praceInput.value);
    const newLi = document.createElement('li');

    const newStrong = document.createElement('strong');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(` - ${price.toFixed(2)} `);

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-buy-product');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = 'Kup'
    newBtn.addEventListener('click', AddProductToBasket)

    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newBtn);

    prodactUl.appendChild(newLi);
}

addProdactForm.addEventListener('submit',addProdactsToShop)