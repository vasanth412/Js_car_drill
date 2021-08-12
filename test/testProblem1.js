import problem1 from "../problem1.js";
import inventory from "../index.js";

const car = problem1(inventory);
const carDetails = "Car 33 is a "+car.car_year+" "+car.car_make+" "+car.car_model;
console.log(carDetails);