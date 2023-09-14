//Objects
//key value pairs in curly braces

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

//destructuring objects

const { vocals, guitar, bass, drums } = band;
console.log(vocals);
console.log(guitar);
console.log(bass);
console.log(drums);

function sings({ vocals }) {
  return `*********${vocals} sings!`;
}

console.log(sings(band));

//for each para iterar sobre objetos
for (let job in band) {
  console.log(`on ${job} it's ${band[job]}`);
}

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrooooooom!";
  },
};
//en este caso usamos vehicle como constructor y pasamos herencia
const truck = Object.create(vehicle);
truck.doors = 2;

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooooooosh!";
};

const tesla = Object.create(car);

tesla.engine = function () {
  return "Shhhhhhh...";
};

//___________________________________
const myObj = { name: "Dave" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: {
    morning: "Cofee",
    afternoon: "Iced Tea",
  },
  //en los metodos, podemos acceder a las propiedades del objeto con
  //la palabra this
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
//si accedemos con dot notation hace no hace falta comillas
//si accedemos con corchetes(como en el array), si hace falta comillas
