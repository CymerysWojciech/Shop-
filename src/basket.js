class Basket{
    constructor() {
        this.items = this.loadFromLocalStorage() ;
        this.totalValue = 0;
    }
    addToTotalValue(newPrice){
        this.totalValue += newPrice;
    }
    add(item){
        this.items.push(item);
        this.addToTotalValue(item.price);
        this.saveToLocalStorage()
    }
    remove(no){
        this.items.splice(no-1,1)
        this.saveToLocalStorage()
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
        this.saveToLocalStorage()
    }
    saveToLocalStorage(){
        localStorage.setItem('basket-items',JSON.stringify(this.items))
    }
    loadFromLocalStorage(){
        const itemsJson = localStorage.getItem('basket-items')

        return itemsJson?JSON.parse(itemsJson):[];
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

