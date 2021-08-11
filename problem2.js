// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of: 
//"Last car is a *car make goes here* *car model goes here*"

export default function problem2(inventory){
    if(inventory.length===0){
        return [];
      }
      
    const lastCar = inventory[inventory.length-1];
    const lastCarDetails = "Last car is a "+lastCar.car_make+" "+lastCar.car_model;
    return lastCarDetails;
}