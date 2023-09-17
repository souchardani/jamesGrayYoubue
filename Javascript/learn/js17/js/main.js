//Javascript classes
class pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust}  crust pizza`
    );
  }
}

const myPizza = new pizza("pepperoni", "small");

myPizza.bake();
console.log(myPizza.type);
