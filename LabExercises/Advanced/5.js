// fixing setTimeout with wrapper function
let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(`This car is a ${this.make}, ${this.model} from ${this.year}.`);
      },
    };

car.description();
setTimeout(() => car.description(), 200);


//changing year by using clone the car object 
let newCar = {...car, year: 2022};
newCar.description();

//when using wrapper function, it refernces the current object so if you change object, it uses the new values
setTimeout(() => newCar.description(), 200);

//using .bind() to permanentyl bind the methid to the original object
const boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);

//clone and change another property 
let updatedCar = { ...car, model: "Cayenne" };
setTimeout(boundDescription, 200);

//even if we clone the object or change properties, bind() fixes the content to original object