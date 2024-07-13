// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation)
{
const HQ = 42;
   const blocks = Math.abs(HQ - pickUpLocation);
    return blocks;
    }


function distanceFromHqInFeet(someValue) {
    const feet = (distanceFromHqInBlocks(someValue)) * 264;
    return feet}


function distanceTravelledInFeet(start, destination) {
    const feet = Math.abs(start - destination) * 264;
    return feet
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let price;

    if (distance <= 400) {
        price = 0;
    } else if (distance > 400 && distance <= 2000) {
        price = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        price = 25;
    } else {
        price = 'cannot travel that far';
    }

    return price;}