// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


export default function problem5( year, inventory ){
    var count = 0;
    var old_cars = [];

    for(let i=0; i<year.length; i++){
        if(year[i]<2000){
            old_cars.push( inventory[i].car_model);
            count++;
        }
    }

    return {old_cars, count};
}