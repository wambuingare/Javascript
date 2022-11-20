
var fruit={
    Oranges:30,
    price:function(quantity){
        return`${quantity} Oranges for KES ${quantity*this.Oranges}`
    }
    
}
console.log(fruit.price(2))


class KioskCalc {
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this.fruitsPriceList={"orange":30,"mango":15,"avocado":40};
        this.getTotalCost=function (){
            return `${quantity} ${fruit} for KES ${quantity * this.avocado}`
           
        }
    }
}
KioskCalc.prototype.price=40;

        var kioskCalc = new KioskCalc('avocado',2);
        console.log(kiosk.getTotalCost());
    
