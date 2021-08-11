export default function problem2(inventory){
    const lastCar = inventory[inventory.length-1];
    const lastCarDetails = "Last car is a "+lastCar.car_make+" "+lastCar.car_model;
    return lastCarDetails;
}