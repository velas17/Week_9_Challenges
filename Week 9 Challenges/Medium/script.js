
function cutPizzaSlices(x){

    var pizzaSlices = x;
    
    return function (y){
        return x/y;
    }
}

var sharePizza = cutPizzaSlices(8);
console.log(` Each person gets ${sharePizza(2)} slices of pizza`);                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(` Each person gets ${sharePizza(3)} slices of pizza`); 
  // prints "Each person gets 2.67 slices of pizza"
