class Basket{
    constructor() {
        this.items = [];
        this.totalValue = 0;
    }
    addToTotalValue(newPrice){
        this.totalValue += newPrice;
    }
    add(item){
        this.items.push(item);
        this.addToTotalValue(item.price);
    }
    remove(no){
        this.items.splice(no-1,1)
    }
    getTotalValue(){
        return this.items.reduce((prev,product) => prev + product.price, 0)
    }
    showBasket(){
        this.items
            .map((product, i)=>`${i+1} - ${product.name} - ${product.price.toFixed(2)} zł`)
            .forEach(line =>console.log(line));
    }

}
class Product{
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }
    setNewPrice(newPrice){
        this.price = newPrice;
    }
}

const oranges = new Product("Pomarańcza luz", 5.22);
const cucumbers = new Product("Ogórek duży",3.77);



const shopBasket = new Basket();
shopBasket.add(oranges);
shopBasket.add(cucumbers);
//shopBasket.showBasket();
//shopBasket.remove(2);
shopBasket.showBasket()
console.log(shopBasket.getTotalValue())