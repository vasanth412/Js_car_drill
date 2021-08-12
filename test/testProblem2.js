import problem2 from "../problem2.js";
import inventory from "../index.js";
const lastCar = problem2(inventory);
const lastCarDetails = "Last car is a "+lastCar.car_make+" "+lastCar.car_model;
console.log(lastCarDetails);
