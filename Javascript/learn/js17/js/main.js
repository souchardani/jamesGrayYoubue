//Javascript classes
//superclase o blueprint, nunca se instancia
//al hacer _propiedades, damos a entender que la propiedad es privada
//Funcion factory: se usa para definir las propiedades privadas de la clase

// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
//   };
// }

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
