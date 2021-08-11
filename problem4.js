// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

export default function problem4(inventory){
    if(inventory.length===0){
        return [];
      }

    var years = [];
    for(let i=0; i<inventory.length; i++){
        years.push( inventory[i].car_year );
    }

    return years;
}