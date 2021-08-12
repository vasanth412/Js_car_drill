import problem4 from "../problem4.js";
import problem5 from "../problem5.js";
import inventory from "../index.js";

var year = problem4(inventory);
var old_cars = problem5(year, inventory);

console.log("Old car models: "+old_cars.old_cars);
console.log("Old car counts: "+old_cars.count);