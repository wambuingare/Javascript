var fruit={
    Oranges:30,
    price:function(quantity){
        return`${quantity} Oranges for KES ${quantity*this.Oranges}`
    }
    
}
console.log(fruit.price(2))