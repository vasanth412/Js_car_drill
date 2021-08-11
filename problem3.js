// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


export default function problem3(inventory){
    if(inventory.length===0){
        return [];
      }
    var carModels = [];
    for(let i=0; i<inventory.length; i++){
        let check = 0;
        for(let j=0; j<carModels.length; j++){
            if(inventory[i].car_model == carModels[j]){
                check = 1;
                break;
            }
        }
        if(check==0){
            carModels.push( inventory[i].car_model );
        }
    }
    for(let i=0; i<carModels.length; i++){
        for(let j=i+1; j<carModels.length; j++){
            if(carModels[i]>carModels[j]){
                let temp = carModels[i];
                carModels[i] = carModels[j];
                carModels[j] = temp;
            }
        }
    }
    
    return carModels;
}