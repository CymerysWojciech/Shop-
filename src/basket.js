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
        return this.items
            .map((product, i)=>{
                return{
                    id: i+1,
                    name: product.name,
                    price: product.price,
                }
            })
    }
    clearBasket(){
        this.items = [];
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

