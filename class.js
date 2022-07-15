class KioskCalc {
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this.fruitsPriceList={"orange":30,"mango":15,"avocado":40};
        this.getTotalCost=function(){
            return `${quantity} ${fruit} for KES ${quantity * this.fruitsPriceList.avocado}`
           
        }
    }
}

let kioskCalc = new KioskCalc("avocado",2);
console.log(kioskCalc.getTotalCost);
    
